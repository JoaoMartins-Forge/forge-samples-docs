"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[624],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(h,a(a({ref:n},p),{},{components:t})):o.createElement(h,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65:function(e,n,t){t.d(n,{ZP:function(){return l}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={toc:[]};function l(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's start by implementing the Forge Viewer functionality of our application.\nCreate a ",(0,i.kt)("inlineCode",{parentName:"p"},"viewer.js")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/viewer.js"',title:'"wwwroot/viewer.js"'},"/// import * as Autodesk from \"@types/forge-viewer\";\n\nasync function getAccessToken(callback) {\n    try {\n        const resp = await fetch('/api/auth/token');\n        if (!resp.ok)\n            throw new Error(await resp.text());\n        const { access_token, expires_in } = await resp.json();\n        callback(access_token, expires_in);\n    } catch (err) {\n        alert('Could not obtain access token. See the console for more details.');\n        console.error(err);        \n    }\n}\n\nexport function initViewer(container) {\n    return new Promise(function (resolve, reject) {\n        Autodesk.Viewing.Initializer({ getAccessToken }, async function () {\n            const viewer = new Autodesk.Viewing.GuiViewer3D(container);\n            viewer.start();\n            viewer.setTheme('light-theme');\n            resolve(viewer);\n        });\n    });\n}\n\nexport function loadModel(viewer, urn) {\n    function onDocumentLoadSuccess(doc) {\n        viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry());\n    }\n    function onDocumentLoadFailure(code, message) {\n        alert('Could not load model. See console for more details.');\n        console.error(message);\n    }\n    Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);\n}\n")),(0,i.kt)("p",null,"The script is an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ES6 module"),"\nthat exports two functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initViewer")," will create a new instance of Forge Viewer in the specified DOM container"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loadModel")," for loading a specific model to the viewer")))}l.isMDXComponent=!0},3675:function(e,n,t){t.d(n,{ZP:function(){return l}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={toc:[]};function l(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Next we'll implement the behavior of a sidebar where we're going to display\nall the hubs, projects, folders, items, and versions in a 3rd party tree-view component.\nCreate a ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebar.js")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/sidebar.js"',title:'"wwwroot/sidebar.js"'},"async function getJSON(url) {\n    const resp = await fetch(url);\n    if (!resp.ok) {\n        alert('Could not load tree data. See console for more details.');\n        console.error(await resp.text());\n        return [];\n    }\n    return resp.json();\n}\n\nfunction createTreeNode(id, text, icon, children = false) {\n    return { id, text, children, itree: { icon } };\n}\n\nasync function getHubs() {\n    const hubs = await getJSON('/api/hubs');\n    return hubs.map(hub => createTreeNode(`hub|${hub.id}`, hub.attributes.name, 'icon-hub', true));\n}\n\nasync function getProjects(hubId) {\n    const projects = await getJSON(`/api/hubs/${hubId}/projects`);\n    return projects.map(project => createTreeNode(`project|${hubId}|${project.id}`, project.attributes.name, 'icon-project', true));\n}\n\nasync function getContents(hubId, projectId, folderId = null) {\n    const contents = await getJSON(`/api/hubs/${hubId}/projects/${projectId}/contents` + (folderId ? `?folder_id=${folderId}` : ''));\n    return contents.map(item => {\n        if (item.type === 'folders') {\n            return createTreeNode(`folder|${hubId}|${projectId}|${item.id}`, item.attributes.displayName, 'icon-my-folder', true);\n        } else {\n            return createTreeNode(`item|${hubId}|${projectId}|${item.id}`, item.attributes.displayName, 'icon-item', true);\n        }\n    });\n}\n\nasync function getVersions(hubId, projectId, itemId) {\n    const versions = await getJSON(`/api/hubs/${hubId}/projects/${projectId}/contents/${itemId}/versions`);\n    return versions.map(version => createTreeNode(`version|${version.id}`, version.attributes.createTime, 'icon-version'));\n}\n\nexport function initTree(selector, onSelectionChanged) {\n    // See http://inspire-tree.com\n    const tree = new InspireTree({\n        data: function (node) {\n            if (!node || !node.id) {\n                return getHubs();\n            } else {\n                const tokens = node.id.split('|');\n                switch (tokens[0]) {\n                    case 'hub': return getProjects(tokens[1]);\n                    case 'project': return getContents(tokens[1], tokens[2]);\n                    case 'folder': return getContents(tokens[1], tokens[2], tokens[3]);\n                    case 'item': return getVersions(tokens[1], tokens[2], tokens[3]);\n                    default: return [];\n                }\n            }\n        }\n    });\n    tree.on('node.click', function (event, node) {\n        event.preventTreeDefault();\n        const tokens = node.id.split('|');\n        if (tokens[0] === 'version') {\n            onSelectionChanged(tokens[1]);\n        }\n    });\n    return new InspireTreeDOM(tree, { target: selector });\n}\n\n")))}l.isMDXComponent=!0},1195:function(e,n,t){t.d(n,{ZP:function(){return l}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={toc:[]};function l(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now let's wire all the UI components together. Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.js")," file under\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," folder, and populate it with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/main.js"',title:'"wwwroot/main.js"'},"import { initViewer, loadModel } from './viewer.js';\nimport { initTree } from './sidebar.js';\n\nconst login = document.getElementById('login');\ntry {\n    const resp = await fetch('/api/auth/profile');\n    if (resp.ok) {\n        const user = await resp.json();\n        login.innerText = `Logout (${user.name})`;\n        login.onclick = () => window.location.replace('/api/auth/logout');\n        const viewer = await initViewer(document.getElementById('preview'));\n        initTree('#tree', (id) => loadModel(viewer, window.btoa(id).replace(/=/g, '')));\n    } else {\n        login.innerText = 'Login';\n        login.onclick = () => window.location.replace('/api/auth/login');\n    }\n    login.style.visibility = 'visible';\n} catch (err) {\n    alert('Could not initialize the application. See console for more details.');\n    console.error(err);\n}\n")),(0,i.kt)("p",null,"The script will first try and obtain user details to check whether we're logged in or not.\nIf we are, the code can then initialize the viewer as well as the tree-view component.\nThe callback function passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"initTree")," makes sure that when we click on a leaf node\nin the tree, the viewer will start loading the corresponding Forge model."))}l.isMDXComponent=!0},5614:function(e,n,t){t.d(n,{ZP:function(){return l}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={toc:[]};function l(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"And finally, let's build the UI of our application."),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.css")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder, and populate it with the following CSS rules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="wwwroot/main.css"',title:'"wwwroot/main.css"'},"body, html {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: ArtifaktElement;\n}\n\n#header, #sidebar, #preview {\n    position: absolute;\n}\n\n#header {\n    height: 3em;\n    width: 100%;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#sidebar {\n    width: 25%;\n    left: 0;\n    top: 3em;\n    bottom: 0;\n    overflow-y: scroll;\n}\n\n#preview {\n    width: 75%;\n    right: 0;\n    top: 3em;\n    bottom: 0;\n}\n\n#header > * {\n    height: 2em;\n    margin: 0 0.5em;\n}\n\n#login {\n    font-family: ArtifaktElement;\n    font-size: 1em;\n}\n\n#header .title {\n    height: auto;\n    margin-right: auto;\n}\n\n#tree {\n    margin: 0.5em;\n}\n\n@media (max-width: 768px) {\n    #sidebar {\n        width: 100%;\n        top: 3em;\n        bottom: 75%;\n    }\n    #preview {\n        width: 100%;\n        top: 25%;\n        bottom: 0;\n    }\n}\n\n.icon-hub:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/apps-16.svg); /* or https://raw.githubusercontent.com/primer/octicons/main/icons/stack-16.svg */\n    background-size: cover;\n}\n\n.icon-project:before {\n    \n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/project-16.svg); /* or https://raw.githubusercontent.com/primer/octicons/main/icons/organization-16.svg */\n    background-size: cover;\n}\n\n.icon-my-folder:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/file-directory-16.svg);\n    background-size: cover;\n}\n\n.icon-item:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/file-16.svg);\n    background-size: cover;\n}\n\n.icon-version:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/clock-16.svg);\n    background-size: cover;\n}\n")),(0,i.kt)("p",null,"Then, create an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file in the same folder with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="wwwroot/index.html"',title:'"wwwroot/index.html"'},'<!doctype html>\n<html lang="en">\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css">\n    <link rel="stylesheet" href="https://unpkg.com/inspire-tree-dom@4.0.6/dist/inspire-tree-light.min.css">\n    <link rel="stylesheet" href="/main.css">\n    <title>Autodesk Forge: Hubs Browser</title>\n</head>\n\n<body>\n    <div id="header">\n        <img class="logo" src="/logo.png" alt="Autodesk Forge">\n        <span class="title">Hubs Browser</span>\n        <button id="login" style="visibility: hidden;">Login</button>\n    </div>\n    <div id="sidebar">\n        <div id="tree"></div>\n    </div>\n    <div id="preview"></div>\n    <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js"><\/script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"><\/script>\n    <script src="https://unpkg.com/inspire-tree@4.3.1/dist/inspire-tree.js"><\/script>\n    <script src="https://unpkg.com/inspire-tree-dom@4.0.6/dist/inspire-tree-dom.min.js"><\/script>\n    <script src="/main.js" type="module"><\/script>\n</body>\n\n</html>\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that since ",(0,i.kt)("inlineCode",{parentName:"p"},"main.js")," is also an ES6 module, we have to use ",(0,i.kt)("inlineCode",{parentName:"p"},'type="module"')," in its ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag.")),(0,i.kt)("p",null,"The application will look for ",(0,i.kt)("inlineCode",{parentName:"p"},"favicon.ico")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"logo.png")," images under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," folder\nto use as the website's icon and logo. If you don't have any images of your own, feel free\nto download them from one of our samples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/favicon.ico"},"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/favicon.ico")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/logo.png"},"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/logo.png"))))}l.isMDXComponent=!0},3936:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return w}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=t(65),s=t(3675),l=t(1195),c=t(5614),p=["components"],d={sidebar_position:4},u="Viewer & UI",m={unversionedId:"tutorials/hubs-browser/dotnet-vs2022/viewer",id:"tutorials/hubs-browser/dotnet-vs2022/viewer",title:"Viewer & UI",description:"Finally, we're ready to build the client-side piece of our application.",source:"@site/docs/tutorials/02-hubs-browser/dotnet-vs2022/04-viewer.mdx",sourceDirName:"tutorials/02-hubs-browser/dotnet-vs2022",slug:"/tutorials/hubs-browser/dotnet-vs2022/viewer",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet-vs2022/viewer",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/02-hubs-browser/dotnet-vs2022/04-viewer.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Browsing Hubs",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet-vs2022/hubs"},next:{title:"Introduction",permalink:"/forge-samples-docs/docs/tutorials/dashboard/"}},h={},w=[{value:"Viewer logic",id:"viewer-logic",level:2},{value:"Sidebar logic",id:"sidebar-logic",level:2},{value:"Application logic",id:"application-logic",level:2},{value:"User interface",id:"user-interface",level:2},{value:"Try it out",id:"try-it-out",level:2}],f={toc:w};function g(e){var n=e.components,d=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},f,d,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"viewer--ui"},"Viewer & UI"),(0,i.kt)("p",null,"Finally, we're ready to build the client-side piece of our application."),(0,i.kt)("h2",{id:"viewer-logic"},"Viewer logic"),(0,i.kt)(a.ZP,{mdxType:"ViewerLogic"}),(0,i.kt)("h2",{id:"sidebar-logic"},"Sidebar logic"),(0,i.kt)(s.ZP,{mdxType:"SidebarLogic"}),(0,i.kt)("h2",{id:"application-logic"},"Application logic"),(0,i.kt)(l.ZP,{mdxType:"AppLogic"}),(0,i.kt)("h2",{id:"user-interface"},"User interface"),(0,i.kt)(c.ZP,{mdxType:"UiSetup"}),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"And that's it! Your application is now ready for action. Start it from Visual Studio, and when\nyou go to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),", you should be presented with a simple UI,\nwith a tree-view on the left side, and an empty viewer on the right. Try browsing through the tree,\nand select a specific version of one of your files. After that the corresponding model should be loaded\ninto the viewer."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Final App",src:t(5889).Z,width:"1197",height:"825"})))}g.isMDXComponent=!0},5889:function(e,n,t){n.Z=t.p+"assets/images/final-app-647e1c3ca6ce06d094ca58e60671b20e.png"}}]);