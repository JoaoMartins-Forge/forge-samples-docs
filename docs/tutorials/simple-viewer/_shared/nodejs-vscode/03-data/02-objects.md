Now, let's add two more functions in `services/forge.js` that will be used to list
all objects in the preconfigured bucket, and to upload files to this bucket:

```js title="services/forge.js"
// highlight-start
const fs = require('fs');
const { AuthClientTwoLegged, BucketsApi, ObjectsApi, DerivativesApi } = require('forge-apis');
// highlight-end
const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = require('../config.js');

let internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);
let publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['viewables:read'], true);

async function getInternalToken() {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate();
    }
    return internalAuthClient.getCredentials();
}

async function getPublicToken() {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate();
    }
    return publicAuthClient.getCredentials();
}

async function ensureBucketExists(bucketKey) {
    try {
        await new BucketsApi().getBucketDetails(bucketKey, null, await getInternalToken());
    } catch (err) {
        if (err.statusCode === 404) {
            await new BucketsApi().createBucket({ bucketKey, policyKey: 'temporary' }, {}, null, await getInternalToken());
        } else {
            throw err;
        }
    }
}

// highlight-start
async function listObjects() {
    await ensureBucketExists(FORGE_BUCKET);
    let resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64 }, null, await getInternalToken());
    let objects = resp.body.items;
    while (resp.body.next) {
        const startAt = new URL(resp.body.next).searchParams.get('startAt');
        resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64, startAt }, null, await getInternalToken());
        objects = objects.concat(resp.body.items);
    }
    return objects;
}

async function uploadObject(objectName, filePath) {
    await ensureBucketExists(FORGE_BUCKET);
    const buffer = fs.readFileSync(filePath);
    const resp = await new ObjectsApi().uploadObject(FORGE_BUCKET, objectName, buffer.byteLength, buffer, {}, null, await getInternalToken());
    return resp.body;
}
// highlight-end

module.exports = {
    getPublicToken,
    // highlight-start
    listObjects,
    uploadObject,
    // highlight-end
};
```

As you can see, the `getObjects` method of the `ObjectsApi` class (responsible for listing files in a Data Management bucket)
uses pagination. In our code we simply iterate through all the pages and return all files from our application's bucket
in a single list.
