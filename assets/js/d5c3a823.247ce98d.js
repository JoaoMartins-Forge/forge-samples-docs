"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[411],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=u(t),d=s,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=h;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9048:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var r=t(7462),s=t(3366),o=(t(7294),t(3905)),i=["components"],a={sidebar_position:3},l="Browsing Hubs",u={unversionedId:"tutorials/hubs-browser/nodejs/hubs",id:"tutorials/hubs-browser/nodejs/hubs",isDocsHomePage:!1,title:"Browsing Hubs",description:"In this step we'll extend our server so that we can browse the content of 3rd party",source:"@site/docs/tutorials/hubs-browser/nodejs/hubs.md",sourceDirName:"tutorials/hubs-browser/nodejs",slug:"/tutorials/hubs-browser/nodejs/hubs",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/hubs",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/main/website/docs/tutorials/hubs-browser/nodejs/hubs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/authentication"},next:{title:"Viewer",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/viewer"}},c=[{value:"Forge helpers",id:"forge-helpers",children:[]},{value:"Server endpoints",id:"server-endpoints",children:[]},{value:"Try it out",id:"try-it-out",children:[]}],p={toc:c};function h(e){var n=e.components,t=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browsing-hubs"},"Browsing Hubs"),(0,o.kt)("p",null,"In this step we'll extend our server so that we can browse the content of 3rd party\napplications built with Forge such as BIM 360 Docs or ACC."),(0,o.kt)("h2",{id:"forge-helpers"},"Forge helpers"),(0,o.kt)("p",null,"First, let's add a couple of helper functions to ",(0,o.kt)("inlineCode",{parentName:"p"},"services/forge.js")," for browsing through\nData Management hubs, projects, folders, items, and versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/forge.js"',title:'"services/forge.js"'},"// highlight-start\nconst { AuthClientThreeLegged, UserProfileApi, HubsApi, ProjectsApi, FoldersApi, ItemsApi } = require('forge-apis');\n// highlight-end\n\nconst { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL } = process.env;\nif (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET || !FORGE_CALLBACK_URL) {\n    console.warn('Missing some of the environment variables.');\n    process.exit(1);\n}\nconst INTERNAL_TOKEN_SCOPES = ['data:read'];\nconst PUBLIC_TOKEN_SCOPES = ['viewables:read'];\n\nfunction getAuthorizationUrl() {\n    return 'https://developer.api.autodesk.com' +\n        '/authentication/v1/authorize?response_type=code' +\n        '&client_id=' + FORGE_CLIENT_ID +\n        '&redirect_uri=' + FORGE_CALLBACK_URL +\n        '&scope=' + INTERNAL_TOKEN_SCOPES.join(' ');\n}\n\nconst internalAuthClient = new AuthClientThreeLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, INTERNAL_TOKEN_SCOPES);\nconst publicAuthClient = new AuthClientThreeLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, PUBLIC_TOKEN_SCOPES);\n\nasync function authCallbackMiddleware(req, res, next) {\n    const internalCredentials = await internalAuthClient.getToken(req.query.code);\n    const publicCredentials = await publicAuthClient.refreshToken(internalCredentials);\n    req.session.public_token = publicCredentials.access_token;\n    req.session.internal_token = internalCredentials.access_token;\n    req.session.refresh_token = publicCredentials.refresh_token;\n    req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;\n    next();\n}\n\nasync function authRefreshMiddleware(req, res, next) {\n    const { refresh_token, expires_at } = req.session;\n    if (!refresh_token) {\n        res.status(401).end();\n        return;\n    }\n\n    if (expires_at < Date.now()) {\n        const internalCredentials = await internalAuthClient.refreshToken({ refresh_token });\n        const publicCredentials = await publicAuthClient.refreshToken(internalCredentials);\n        req.session.public_token = publicCredentials.access_token;\n        req.session.internal_token = internalCredentials.access_token;\n        req.session.refresh_token = publicCredentials.refresh_token;\n        req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;\n    }\n    req.internalOAuthToken = {\n        access_token: req.session.internal_token,\n        expires_in: Math.round((req.session.expires_at - Date.now()) / 1000)\n    };\n    req.publicOAuthToken = {\n        access_token: req.session.public_token,\n        expires_in: Math.round((req.session.expires_at - Date.now()) / 1000)\n    };\n    next();\n}\n\nasync function getUserProfile(token) {\n    const resp = await new UserProfileApi().getUserProfile(internalAuthClient, token);\n    return resp.body;\n}\n\n// highlight-start\nasync function getHubs(token) {\n    const resp = await new HubsApi().getHubs(null, internalAuthClient, token);\n    return resp.body.data;\n}\n// highlight-end\n\n// highlight-start\nasync function getProjects(hubId, token) {\n    const resp = await new ProjectsApi().getHubProjects(hubId, null, internalAuthClient, token);\n    return resp.body.data;\n}\n// highlight-end\n\n// highlight-start\nasync function getProjectContents(hubId, projectId, folderId, token) {\n    if (!folderId) {\n        const resp = await new ProjectsApi().getProjectTopFolders(hubId, projectId, internalAuthClient, token);\n        return resp.body.data;\n    } else {\n        const resp = await new FoldersApi().getFolderContents(projectId, folderId, null, internalAuthClient, token);\n        return resp.body.data;\n    }\n}\n// highlight-end\n\n// highlight-start\nasync function getItemVersions(projectId, itemId, token) {\n    const resp = await new ItemsApi().getItemVersions(projectId, itemId, null, internalAuthClient, token);\n    return resp.body.data;\n}\n// highlight-end\n\nmodule.exports = {\n    getAuthorizationUrl,\n    authCallbackMiddleware,\n    authRefreshMiddleware,\n    getUserProfile,\n    // highlight-start\n    getHubs,\n    getProjects,\n    getProjectContents,\n    getItemVersions\n    // highlight-end\n};\n")),(0,o.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,o.kt)("p",null,"Next, let's expose the new functionality to the client-side code through another\nExpress router. Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"hubs.js")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," subfolder with the following\ncontent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/hubs.js"',title:'"routes/hubs.js"'},"const express = require('express');\nconst { authRefreshMiddleware, getHubs, getProjects, getProjectContents, getItemVersions } = require('../services/forge.js');\n\nlet router = express.Router();\n\nrouter.use(authRefreshMiddleware);\n\nrouter.get('/', async function (req, res, next) {\n    try {\n        const hubs = await getHubs(req.internalOAuthToken);\n        res.json(hubs);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/:hub_id/projects', async function (req, res, next) {\n    try {\n        const projects = await getProjects(req.params.hub_id, req.internalOAuthToken);\n        res.json(projects);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/:hub_id/projects/:project_id/contents', async function (req, res, next) {\n    try {\n        const contents = await getProjectContents(req.params.hub_id, req.params.project_id, req.query.folder_id, req.internalOAuthToken);\n        res.json(contents);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/:hub_id/projects/:project_id/contents/:item_id/versions', async function (req, res, next) {\n    try {\n        const versions = await getItemVersions(req.params.project_id, req.params.item_id, req.internalOAuthToken);\n        res.json(versions);\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,o.kt)("p",null,"And mount the router to our server application by modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session')\nconst PORT = process.env.PORT || 3000;\n\nlet app = express();\napp.use(express.static('public'));\napp.use(session({\n    secret: process.env.SERVER_SESSION_SECRET,\n    maxAge: 24 * 60 * 60 * 1000,\n}));\napp.use('/api/auth', require('./routes/auth.js'));\n// highlight-start\napp.use('/api/hubs', require('./routes/hubs.js'));\n// highlight-end\napp.use(function (err, req, res, next) {\n    console.error(err);\n    res.status(500).send(err.message);\n});\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)("p",null,"And that's it for the server side of our application. Time to try it out!\nMake sure you set all the required environment variables, and run the application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export SERVER_SESSION_SECRET=some-secret-phrase\nexport FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_CALLBACK_URL=http://localhost:3000/api/auth/callback\nnpm start\n")),(0,o.kt)("p",null,"You should now be able to explore the new endpoints tha will eventually be used from\nthe UI. For example, if you go to http://localhost:3000/api/hubs, the server should\nrespond with a JSON list of all the hubs you have access to. Try copying the ID of\none of the hubs, and use it in another address: http://localhost:3000/api/hubs/your-hub-id/projects.\nIn this case the server application should respond with a JSON list of all projects\navailable under the specified hub."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TODO: screenshot/gif")))}h.isMDXComponent=!0}}]);