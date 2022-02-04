"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[471],{2924:function(e,n,t){var o=t(7294).createContext(void 0);n.Z=o},5350:function(e,n,t){var o=t(7294),i=t(2924);n.Z=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},9029:function(e,n,t){t.d(n,{ZP:function(){return c}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),s=t(6213),a=["components"],l={toc:[{value:"Viewer logic",id:"viewer-logic",children:[]},{value:"Sidebar logic",id:"sidebar-logic",children:[]},{value:"Application logic",id:"application-logic",children:[]},{value:"User interface",id:"user-interface",children:[]}]};function c(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"viewer-logic"},"Viewer logic"),(0,r.kt)("p",null,"Let's start by implementing the Forge Viewer functionality of our application. Create a ",(0,r.kt)("code",null,"viewer.js")," file under the ",(0,r.kt)("code",null,t.assetsFolder)," subfolder with the following code:"),(0,r.kt)(s.Z,{title:t.assetsFolder+"/viewer.js",className:"language-jsx",mdxType:"CodeBlock"},"/// import * as Autodesk from \"@types/forge-viewer\";\n\nexport function initViewer(container) {\n    async function getAccessToken(callback) {\n        try {\n            const resp = await fetch('/api/auth/token');\n            if (!resp.ok)\n                throw new Error(await resp.text());\n            const { access_token, expires_in } = await resp.json();\n            callback(access_token, expires_in);\n        } catch (err) {\n            alert('Could not obtain access token. See the console for more details.');\n            console.error(err);        \n        }\n    }\n    return new Promise(function (resolve, reject) {\n        Autodesk.Viewing.Initializer({ getAccessToken }, async function () {\n            const viewer = new Autodesk.Viewing.GuiViewer3D(container);\n            viewer.start();\n            viewer.setTheme('light-theme');\n            resolve(viewer);\n        });\n    });\n}\n\nexport function loadModel(viewer, urn) {\n    function onDocumentLoadSuccess(doc) {\n        viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry());\n    }\n    function onDocumentLoadFailure(code, message) {\n        alert('Could not load model. See console for more details.');\n        console.error(message);\n    }\n    Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);\n}\n"),(0,r.kt)("p",null,"The script is an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ES6 module"),"\nthat exports two functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initViewer")," will create a new instance of Forge Viewer in the specified DOM container"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loadModel")," for loading a specific model to the viewer")),(0,r.kt)("h2",{id:"sidebar-logic"},"Sidebar logic"),(0,r.kt)("p",null,"Next we'll implement the behavior of a sidebar where we're going to display all the hubs, projects, folders, items, and versions in a 3rd party tree-view component. Create a ",(0,r.kt)("code",null,"sidebar.js")," file under the ",(0,r.kt)("code",null,t.assetsFolder)," subfolder with the following code:"),(0,r.kt)(s.Z,{title:t.assetsFolder+"/sidebar.js",className:"language-jsx",mdxType:"CodeBlock"},"async function getJSON(url) {\n    const resp = await fetch(url);\n    if (!resp.ok) {\n        alert('Could not load tree data. See console for more details.');\n        console.error(await resp.text());\n        return [];\n    }\n    return resp.json();\n}\n\nfunction createTreeNode(id, text, icon, children = false) {\n    return { id, text, children, itree: { icon } };\n}\n\nasync function getHubs() {\n    const hubs = await getJSON('/api/hubs');\n    return hubs.map(hub => createTreeNode(`hub|${hub.id}`, hub.attributes.name, 'icon-hub', true));\n}\n\nasync function getProjects(hubId) {\n    const projects = await getJSON(`/api/hubs/${hubId}/projects`);\n    return projects.map(project => createTreeNode(`project|${hubId}|${project.id}`, project.attributes.name, 'icon-project', true));\n}\n\nasync function getContents(hubId, projectId, folderId = null) {\n    const contents = await getJSON(`/api/hubs/${hubId}/projects/${projectId}/contents` + (folderId ? `?folder_id=${folderId}` : ''));\n    return contents.map(item => {\n        if (item.type === 'folders') {\n            return createTreeNode(`folder|${hubId}|${projectId}|${item.id}`, item.attributes.displayName, 'icon-my-folder', true);\n        } else {\n            return createTreeNode(`item|${hubId}|${projectId}|${item.id}`, item.attributes.displayName, 'icon-item', true);\n        }\n    });\n}\n\nasync function getVersions(hubId, projectId, itemId) {\n    const versions = await getJSON(`/api/hubs/${hubId}/projects/${projectId}/contents/${itemId}/versions`);\n    return versions.map(version => createTreeNode(`version|${version.id}`, version.attributes.createTime, 'icon-version'));\n}\n\nexport function initTree(selector, onSelectionChanged) {\n    // See http://inspire-tree.com\n    const tree = new InspireTree({\n        data: function (node) {\n            if (!node || !node.id) {\n                return getHubs();\n            } else {\n                const tokens = node.id.split('|');\n                switch (tokens[0]) {\n                    case 'hub': return getProjects(tokens[1]);\n                    case 'project': return getContents(tokens[1], tokens[2]);\n                    case 'folder': return getContents(tokens[1], tokens[2], tokens[3]);\n                    case 'item': return getVersions(tokens[1], tokens[2], tokens[3]);\n                    default: return [];\n                }\n            }\n        }\n    });\n    tree.on('node.click', function (event, node) {\n        event.preventTreeDefault();\n        const tokens = node.id.split('|');\n        if (tokens[0] === 'version') {\n            onSelectionChanged(tokens[1]);\n        }\n    });\n    return new InspireTreeDOM(tree, { target: selector });\n}\n"),(0,r.kt)("h2",{id:"application-logic"},"Application logic"),(0,r.kt)("p",null,"Now let's wire all the UI components together. Create a ",(0,r.kt)("code",null,"main.js")," file under the ",(0,r.kt)("code",null,t.assetsFolder)," folder, and populate it with the following code:"),(0,r.kt)(s.Z,{title:t.assetsFolder+"/main.js",className:"language-jsx",mdxType:"CodeBlock"},"import { initViewer, loadModel } from './viewer.js';\nimport { initTree } from './sidebar.js';\n\nconst login = document.getElementById('login');\ntry {\n    const resp = await fetch('/api/auth/profile');\n    if (resp.ok) {\n        const user = await resp.json();\n        login.innerText = `Logout (${user.name})`;\n        login.onclick = () => window.location.replace('/api/auth/logout');\n        const viewer = await initViewer(document.getElementById('preview'));\n        initTree('#tree', (id) => loadModel(viewer, window.btoa(id).replace(/=/g, '')));\n    } else {\n        login.innerText = 'Login';\n        login.onclick = () => window.location.replace('/api/auth/login');\n    }\n    login.style.visibility = 'visible';\n} catch (err) {\n    alert('Could not initialize the application. See console for more details.');\n    console.error(err);\n}\n"),(0,r.kt)("p",null,"The script will first try and obtain user details to check whether we're logged in or not.\nIf we are, the code can then initialize the viewer as well as the tree-view component.\nThe callback function passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"initTree")," makes sure that when we click on a leaf node\nin the tree, the viewer will start loading the corresponding Forge model."),(0,r.kt)("h2",{id:"user-interface"},"User interface"),(0,r.kt)("p",null,"And finally, let's build the UI of our application."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("code",null,"main.css")," file under the ",(0,r.kt)("code",null,t.assetsFolder)," subfolder, and populate it with the following CSS rules:"),(0,r.kt)(s.Z,{title:t.assetsFolder+"/main.css",className:"language-css",mdxType:"CodeBlock"},"body, html {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: ArtifaktElement;\n}\n\n#header, #sidebar, #preview {\n    position: absolute;\n}\n\n#header {\n    height: 3em;\n    width: 100%;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#sidebar {\n    width: 25%;\n    left: 0;\n    top: 3em;\n    bottom: 0;\n    overflow-y: scroll;\n}\n\n#preview {\n    width: 75%;\n    right: 0;\n    top: 3em;\n    bottom: 0;\n}\n\n#header > * {\n    height: 2em;\n    margin: 0 0.5em;\n}\n\n#login {\n    font-family: ArtifaktElement;\n    font-size: 1em;\n}\n\n#header .title {\n    height: auto;\n    margin-right: auto;\n}\n\n#tree {\n    margin: 0.5em;\n}\n\n@media (max-width: 768px) {\n    #sidebar {\n        width: 100%;\n        top: 3em;\n        bottom: 75%;\n    }\n    #preview {\n        width: 100%;\n        top: 25%;\n        bottom: 0;\n    }\n}\n\n.icon-hub:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/apps-16.svg); /* or https://raw.githubusercontent.com/primer/octicons/main/icons/stack-16.svg */\n    background-size: cover;\n}\n\n.icon-project:before {\n    \n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/project-16.svg); /* or https://raw.githubusercontent.com/primer/octicons/main/icons/organization-16.svg */\n    background-size: cover;\n}\n\n.icon-my-folder:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/file-directory-16.svg);\n    background-size: cover;\n}\n\n.icon-item:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/file-16.svg);\n    background-size: cover;\n}\n\n.icon-version:before {\n    background-image: url(https://raw.githubusercontent.com/primer/octicons/main/icons/clock-16.svg);\n    background-size: cover;\n}\n"),(0,r.kt)("p",null,"Then, create an ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file in the same folder with the following content:"),(0,r.kt)(s.Z,{title:t.assetsFolder+"/index.html",className:"language-html",mdxType:"CodeBlock"},'<!doctype html>\n<html lang="en">\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css">\n    <link rel="stylesheet" href="https://unpkg.com/inspire-tree-dom@4.0.6/dist/inspire-tree-light.min.css">\n    <link rel="stylesheet" href="/main.css">\n    <title>Autodesk Forge: Hubs Browser</title>\n</head>\n\n<body>\n    <div id="header">\n        <img class="logo" src="/logo.png" alt="Autodesk Forge">\n        <span class="title">Hubs Browser</span>\n        <button id="login" style="visibility: hidden;">Login</button>\n    </div>\n    <div id="sidebar">\n        <div id="tree"></div>\n    </div>\n    <div id="preview"></div>\n    <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js"><\/script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"><\/script>\n    <script src="https://unpkg.com/inspire-tree@4.3.1/dist/inspire-tree.js"><\/script>\n    <script src="https://unpkg.com/inspire-tree-dom@4.0.6/dist/inspire-tree-dom.min.js"><\/script>\n    <script src="/main.js" type="module"><\/script>\n</body>\n\n</html>\n'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that since ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," is also an ES6 module, we have to use ",(0,r.kt)("inlineCode",{parentName:"p"},'type="module"')," in its ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," tag.")),(0,r.kt)("p",null,"The application will look for ",(0,r.kt)("code",null,"favicon.ico")," and ",(0,r.kt)("code",null,"logo.png")," images under the ",(0,r.kt)("code",null,t.assetsFolder)," folder to use as the website's icon and logo. If you don't have any images of your own, feel free to download them from one of our samples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/favicon.ico"},"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/favicon.ico")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/logo.png"},"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/logo.png"))))}c.isMDXComponent=!0},3652:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),s=t(9029),a=["components"],l={sidebar_position:4},c="Viewer & UI",d={unversionedId:"tutorials/hubs-browser/nodejs/viewer",id:"tutorials/hubs-browser/nodejs/viewer",isDocsHomePage:!1,title:"Viewer & UI",description:"Finally, we're ready to build the client-side piece of our application.",source:"@site/docs/tutorials/hubs-browser/nodejs/viewer.mdx",sourceDirName:"tutorials/hubs-browser/nodejs",slug:"/tutorials/hubs-browser/nodejs/viewer",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/viewer",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/hubs-browser/nodejs/viewer.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Browsing Hubs",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/hubs"},next:{title:"Basic Server",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet/server"}},u=[{value:"Try it out",id:"try-it-out",children:[]}],p={toc:u};function m(e){var n=e.components,l=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"viewer--ui"},"Viewer & UI"),(0,r.kt)("p",null,"Finally, we're ready to build the client-side piece of our application."),(0,r.kt)(s.ZP,{assetsFolder:"public",mdxType:"ViewerPartial"}),(0,r.kt)("h2",{id:"try-it-out"},"Try it out"),(0,r.kt)("p",null,"And that's it! Your application is now ready for action. Start it from the command line as usual:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export SERVER_SESSION_SECRET=some-secret-phrase\nexport FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_CALLBACK_URL=http://localhost:3000/api/auth/callback\nnpm start\n")),(0,r.kt)("p",null,"And then navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," in your browser.\nYou should be presented with a simple UI, with a tree-view on the left side, and an empty\nviewer on the right. Try browsing through the tree, and select a specific version of one\nof your files. After that the corresponding model should be loaded into the viewer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final App",src:t(5018).Z})))}m.isMDXComponent=!0},5018:function(e,n,t){n.Z=t.p+"assets/images/final-app-7302c45030e02a5f244d48bf585b1e86.png"}}]);