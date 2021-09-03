"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[427],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Authentication",c={unversionedId:"tutorials/simple-viewer/nodejs/auth",id:"tutorials/simple-viewer/nodejs/auth",isDocsHomePage:!1,title:"Authentication",description:"In this step we're going to extend the server implementation so that it can authenticate itself",source:"@site/docs/tutorials/simple-viewer/nodejs/auth.md",sourceDirName:"tutorials/simple-viewer/nodejs",slug:"/tutorials/simple-viewer/nodejs/auth",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/nodejs/auth",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/main/website/docs/tutorials/simple-viewer/nodejs/auth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic Server",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/nodejs/server"},next:{title:"Data Management",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/nodejs/data"}},p=[{value:"Token management",id:"token-management",children:[]},{value:"Server endpoints",id:"server-endpoints",children:[]},{value:"Try it out",id:"try-it-out",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"In this step we're going to extend the server implementation so that it can authenticate itself\nto the Forge platform, and generate access tokens for various needs."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'It is a good practice to generate an "internal" token with more capabilities (for example,\nallowing the owner to create or delete files in the Data Management service) that will only be used\nby the server, and a "public" token with fewer capabilities that can be safely shared with\nthe client-side logic.'))),(0,i.kt)("h2",{id:"token-management"},"Token management"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"forge.js")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," subfolder. That is where we will be implementing\nall the Forge-specific logic that will be used in different areas of our server application. Let's\nstart by adding the following code to the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/forge.js"',title:'"services/forge.js"'},"const { AuthClientTwoLegged } = require('forge-apis');\n\nconst { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET } = process.env;\nif (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET) {\n    console.warn('Missing some of the environment variables.');\n    process.exit(1);\n}\nconst INTERNAL_TOKEN_SCOPES = ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'];\nconst PUBLIC_TOKEN_SCOPES = ['viewables:read'];\n\nlet internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, INTERNAL_TOKEN_SCOPES, true);\nlet publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, PUBLIC_TOKEN_SCOPES, true);\n\nasync function getInternalToken() {\n    if (!internalAuthClient.isAuthorized()) {\n        await internalAuthClient.authenticate();\n    }\n    return internalAuthClient.getCredentials();\n}\n\nasync function getPublicToken() {\n    if (!publicAuthClient.isAuthorized()) {\n        await publicAuthClient.authenticate();\n    }\n    return publicAuthClient.getCredentials();\n}\n\nmodule.exports = {\n    getPublicToken,\n};\n")),(0,i.kt)("p",null,"The code expects the credentials of a Forge application to be provided as two environment variables,\n",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_SECRET"),". These are the ",(0,i.kt)("em",{parentName:"p"},"Client ID")," and ",(0,i.kt)("em",{parentName:"p"},"Client Secret")," values you\ncan obtain after ",(0,i.kt)("a",{parentName:"p",href:"../../../intro#create-an-app"},"creating a new Forge application"),". With the credentials,\nthe script then creates two authentication clients, one for internal use (giving us read/write access\nto the Data Management buckets and objects), and one for public use (only giving a read access to\nthe translation outputs from the Model Derivative service), and two helper methods to generate\nthe corresponding tokens for us. The ",(0,i.kt)("inlineCode",{parentName:"p"},"getPublicToken")," is made available to other Node.js scripts."),(0,i.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,i.kt)("p",null,"Next, let's add a first endpoint to our server. Create an ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.js")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," subfolder\nwith the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/auth.js"',title:'"routes/auth.js"'},"const express = require('express');\nconst { getPublicToken } = require('../services/forge.js');\n\nlet router = express.Router();\n\nrouter.get('/token', async function (req, res, next) {\n    try {\n        res.json(await getPublicToken());\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,i.kt)("p",null,"Here we implement a new ",(0,i.kt)("a",{parentName:"p",href:"http://expressjs.com/en/4x/api.html#router"},"Express Router")," that can handle\nendpoints ending with ",(0,i.kt)("inlineCode",{parentName:"p"},"/token")," by generating a public access token and sending it back to the client\nas a JSON response."),(0,i.kt)("p",null,'Let\'s "mount" the router to our server application by modifying the ',(0,i.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst PORT = process.env.PORT || 3000;\n\nlet app = express();\napp.use(express.static('public'));\n// highlight-start\napp.use('/api/auth', require('./routes/auth.js'));\n// highlight-end\napp.use(function (err, req, res, next) {\n    console.error(err);\n    res.status(500).send(err.message);\n});\napp.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });\n")),(0,i.kt)("p",null,"Since the router has been attached to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/auth")," prefix, it will now handle all requests\ncoming to the endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/auth/token"),"."),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"Let's see if our new server endpoint works. Try setting your own Forge client ID and client secret\nas the ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_SECRET")," environment variables, and run the application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nnpm start\n")),(0,i.kt)("p",null,"If the application start successfully and you navigate to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/api/auth/token"},"http://localhost:3000/api/auth/token"),"\nin the browser, the server should respond with a JSON object containing the access token data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Server Response",src:n(9465).Z})))}d.isMDXComponent=!0},9465:function(e,t,n){t.Z=n.p+"assets/images/auth-response-28494c38df07db6307fff8591a6dd37c.png"}}]);