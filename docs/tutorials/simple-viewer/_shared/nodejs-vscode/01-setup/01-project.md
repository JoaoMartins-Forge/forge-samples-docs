Create a new folder for your project, navigate to it in the command line, and initialize a new
Node.js project:

```bash
npm init -y
```

Next, install all the Node.js dependencies we're going to use. In this case it will be
the [Express.js](https://expressjs.com) framework, an Express.js [middleware](https://expressjs.com/en/guide/using-middleware.html)
for handling `multipart/form-data` requests, and finally the [Forge SDK](https://www.npmjs.com/package/forge-apis):

```bash
npm install --save express express-formidable forge-apis
```

The `"dependencies"` in your `package.json` file should now look something like this (potentially
with slightly different version numbers):

```json
// ...
"dependencies": {
    "express": "^4.17.1",
    "express-formidable": "^1.2.0",
    "forge-apis": "^0.8.6"
}
// ...
```

Finally, let's create a couple more subfolders in the project folder that we're going to need later:

- `wwwroot` - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)
- `routes` - this is where we're going to implement all the server endpoints
- `services` - here we're going to keep all the server-side logic that can be shared by different endpoints

### Application config

Our Node.js application will need a couple of configuration parameters to run properly, for example,
the app credentials for communicating with Autodesk Forge services (Forge client ID and secret), and
the name of a bucket in the [Data Management](https://forge.autodesk.com/en/docs/data/v2/developers_guide/overview)
service for storing uploaded designs. We will pass these parameters to the server app using environment variables.

Create a `config.js` file in the root of your project folder, and add the following code:

```js title="config.js"
let { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET, PORT } = process.env;
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
FORGE_BUCKET = FORGE_BUCKET || `${FORGE_CLIENT_ID.toLowerCase()}-basic-app`;
PORT = PORT || 8080;

module.exports = {
    FORGE_CLIENT_ID,
    FORGE_CLIENT_SECRET,
    FORGE_BUCKET,
    PORT
};
```

We simply read the environment variables from `process.env`, and exit the application
immediately if any of the required properties are missing. And if no bucket name is provided,
we generate one by appending the `-basic-app` suffix to the Forge Client ID.

:::caution
Note that the Data Management service requires bucket names to be **globally unique**,
and attempts to create a bucket with an already used name will fail with `409 Conflict`.
See the [documentation](https://forge.autodesk.com/en/docs/data/v2/reference/http/buckets-POST)
for more details.
:::
