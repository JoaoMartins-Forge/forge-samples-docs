"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[934],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4775:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),s=r(3366),o=(r(7294),r(3905)),a=["components"],i={sidebar_position:1},l="Basic Server",p={unversionedId:"tutorials/hubs-browser/nodejs/server",id:"tutorials/hubs-browser/nodejs/server",isDocsHomePage:!1,title:"Basic Server",description:"In this step we're going to create a new Node.js project, install all the required dependencies,",source:"@site/docs/tutorials/hubs-browser/nodejs/server.md",sourceDirName:"tutorials/hubs-browser/nodejs",slug:"/tutorials/hubs-browser/nodejs/server",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/server",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/hubs-browser/nodejs/server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/index"},next:{title:"Authentication",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/auth"}},c=[{value:"Project &amp; dependencies",id:"project--dependencies",children:[]},{value:"Create a basic server",id:"create-a-basic-server",children:[]},{value:"Try it out",id:"try-it-out",children:[]}],u={toc:c};function d(e){var t=e.components,i=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-server"},"Basic Server"),(0,o.kt)("p",null,"In this step we're going to create a new Node.js project, install all the required dependencies,\nand setup a basic ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com"},"Express.js")," server."),(0,o.kt)("h2",{id:"project--dependencies"},"Project & dependencies"),(0,o.kt)("p",null,"Create a new folder for your project, navigate to it in the command line,\nand initialize a new Node.js project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,o.kt)("p",null,"Next, install all the Node.js dependencies we're going to use. In this case it will be\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com"},"Express.js")," framework, an Express.js ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/using-middleware.html"},"middleware"),"\nfor handling cookie-based sessions, and finally the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/forge-apis"},"Forge SDK"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save express cookie-session forge-apis\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'"dependencies"')," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file should now look something like this\n(potentially with slightly different version numbers):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"dependencies": {\n  "cookie-session": "^1.4.0",\n  "express": "^4.17.1",\n  "forge-apis": "^0.8.6"\n},\n// ...\n')),(0,o.kt)("p",null,"Finally, let's create a couple more subfolders in your project folder that we're going to need later:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"public")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"routes")," - this is where we're going to implement all the server endpoints"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"services")," - here we're going to keep all the server-side logic that can be shared by different endpoints")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Folder Structure",src:r(6199).Z})),(0,o.kt)("h2",{id:"create-a-basic-server"},"Create a basic server"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," file in the root of your project folder with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session')\nconst PORT = process.env.PORT || 3000;\n\nlet app = express();\napp.use(express.static('public'));\napp.use(session({\n    secret: process.env.SERVER_SESSION_SECRET,\n    maxAge: 24 * 60 * 60 * 1000,\n}));\napp.use(function (err, req, res, next) {\n    console.error(err);\n    res.status(500).send(err.message);\n});\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")),(0,o.kt)("p",null,"For now the server isn't doing much, just serving client side assets from the ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," subfolder,\nand accessing session data stored in cookies. The cookies will be encrypted using a secret phrase\nthat we will need to pass to the application via the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"SERVER_SESSION_SECRET"),"."),(0,o.kt)("p",null,"Next, let's add a ",(0,o.kt)("inlineCode",{parentName:"p"},'"start": "node server.js"')," script to the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file so that we can\neasily run our application later:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"scripts": {\n    "start": "node server.js"\n}\n// ...\n')),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)("p",null,"Try running the application from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export SERVER_SESSION_SECRET=some-secret-phrase\nnpm start\n")),(0,o.kt)("p",null,"Then open your browser and navigate to http://localhost:3000. The server should respond\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"Cannot GET /")," because we haven't added any logic to it just yet. That's going to be\nthe topic of step 2 - ",(0,o.kt)("a",{parentName:"p",href:"./auth"},"Authentication"),"."))}d.isMDXComponent=!0},6199:function(e,t,r){t.Z=r.p+"assets/images/folder-structure-193b774d739b6efb5b9f2a2a36b2dbef.png"}}]);