"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[608],{2924:function(e,t,n){var o=n(7294).createContext(void 0);t.Z=o},5350:function(e,t,n){var o=n(7294),i=n(2924);t.Z=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},4905:function(e,t,n){n.d(t,{ZP:function(){return d}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),s=n(6213),l="import { initViewer, loadModel } from './viewer.js';\nimport { initTree } from './sidebar.js';\n\nconst login = document.getElementById('login');\ntry {\n    const resp = await fetch('/api/auth/profile');\n    const profile = await resp.json();\n    login.innerText = `Logout (${profile.name})`;\n    login.onclick = () => window.location.replace('/api/auth/logout');\n    const viewer = await initViewer(document.getElementById('preview'));\n    initTree(document.getElementById('tree'), function (nodes) {\n        if (nodes.length === 1) {\n            const urn = btoa(nodes[0].id).replace(/=/g, '');\n            loadModel(viewer, urn);\n        }\n    });\n} catch (err) {\n    login.innerText = 'Login';\n    login.onclick = () => window.location.replace('/api/auth/login');\n}\nlogin.style.display = 'inline';",a=["components"],c={toc:[{value:"Viewer logic",id:"viewer-logic",children:[]},{value:"Sidebar logic",id:"sidebar-logic",children:[]},{value:"Application logic",id:"application-logic",children:[]},{value:"User interface",id:"user-interface",children:[]}]};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"viewer-logic"},"Viewer logic"),(0,r.kt)("p",null,"Let's start by implementing the Forge Viewer functionality of our application. Create a ",(0,r.kt)("code",null,"viewer.js")," file under the ",(0,r.kt)("code",null,n.assetsFolder)," subfolder with the following code:"),(0,r.kt)(s.Z,{title:n.assetsFolder+"/viewer.js",className:"language-jsx",mdxType:"CodeBlock"},"/// import * as Autodesk from \"@types/forge-viewer\";\n\nexport async function initViewer(container) {\n    async function getAccessToken(callback) {\n        const resp = await fetch('/api/auth/token');\n        if (resp.ok) {\n            const { access_token, expires_in } = await resp.json();\n            callback(access_token, expires_in);\n        } else {\n            alert('Could not obtain access token. See the console for more details.');\n            console.error(await resp.text());\n        }\n    }\n    return new Promise(function (resolve, reject) {\n        Autodesk.Viewing.Initializer({ getAccessToken }, async function () {\n            const viewer = new Autodesk.Viewing.GuiViewer3D(container);\n            viewer.start();\n            viewer.setTheme('light-theme');\n            resolve(viewer);\n        });\n    });\n}\n\nexport function loadModel(viewer, urn) {\n    function onDocumentLoadSuccess(doc) {\n        viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry());\n    }\n    function onDocumentLoadFailure(code, message) {\n        alert('Could not load model. See the console for more details.');\n        console.error(message);\n    }\n    Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);\n}"),(0,r.kt)("p",null,"The script is an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ES6 module"),"\nthat exports two functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initViewer")," will create a new instance of Forge Viewer in the specified DOM container"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loadModel")," for loading a specific model to the viewer")),(0,r.kt)("h2",{id:"sidebar-logic"},"Sidebar logic"),(0,r.kt)("p",null,"Next we'll implement the behavior of a sidebar where we're going to display all the hubs, projects, folders, items, and versions in a 3rd party tree-view component. Create a ",(0,r.kt)("code",null,"sidebar.js")," file under the ",(0,r.kt)("code",null,n.assetsFolder)," subfolder with the following code:"),(0,r.kt)(s.Z,{title:n.assetsFolder+"/sidebar.js",className:"language-jsx",mdxType:"CodeBlock"},"import { VanillaTreeView } from 'https://unpkg.com/simple-treeview/dist/treeview.vanilla.js';\n\nexport function initTree(container, onSelectionChanged) {\n    async function getHubs() {\n        const resp = await fetch('/api/hubs');\n        const hubs = await resp.json();\n        return hubs.map(hub => ({\n            id: `hub|${hub.id}`,\n            label: hub.attributes.name,\n            icon: { classes: ['fas', 'fa-cloud'] },\n            state: 'collapsed'\n        }));\n    }\n\n    async function getProjects(hubId) {\n        const resp = await fetch(`/api/hubs/${hubId}/projects`);\n        const projects = await resp.json();\n        return projects.map(project => ({\n            id: `project|${hubId}|${project.id}`,\n            label: project.attributes.name,\n            icon: { classes: ['fas', 'fa-building'] },\n            state: 'collapsed'\n        }));\n    }\n\n    async function getProjectContents(hubId, projectId, folderId) {\n        let url = `/api/hubs/${hubId}/projects/${projectId}/contents`;\n        if (folderId) {\n            url += `?folder_id=${folderId}`;\n        }\n        const resp = await fetch(url);\n        const contents = await resp.json();\n        return contents.map(item => {\n            if (item.type === 'folders') {\n                return {\n                    id: `folder|${hubId}|${projectId}|${item.id}`,\n                    label: item.attributes.displayName,\n                    icon: { classes: ['fas', 'fa-folder'] },\n                    state: 'collapsed'\n                };\n            } else {\n                return {\n                    id: `item|${hubId}|${projectId}|${item.id}`,\n                    label: item.attributes.displayName,\n                    icon: { classes: ['far', 'fa-file'] },\n                    state: 'collapsed'\n                };\n            }\n        });\n    }\n\n    async function getItemVersions(hubId, projectId, itemId) {\n        const resp = await fetch(`/api/hubs/${hubId}/projects/${projectId}/contents/${itemId}/versions`);\n        const versions = await resp.json();\n        return versions.map(version => ({\n            id: version.id,\n            label: version.attributes.displayName,\n            icon: { classes: ['far', 'fa-clock'] }\n        }));\n    }\n\n    return new VanillaTreeView(container, {\n        provider: {\n            async getChildren(id) {\n                if (!id) {\n                    return getHubs();\n                }\n                const tokens = id.split('|');\n                switch (tokens[0]) {\n                    case 'hub':\n                        return getProjects(tokens[1]);\n                    case 'project':\n                        return getProjectContents(tokens[1], tokens[2], null);\n                    case 'folder':\n                        return getProjectContents(tokens[1], tokens[2], tokens[3]);\n                    case 'item':\n                        return getItemVersions(tokens[1], tokens[2], tokens[3]);\n                    default:\n                        return [];\n                }\n            }\n        },\n        onSelectionChanged: onSelectionChanged\n    });\n}"),(0,r.kt)("h2",{id:"application-logic"},"Application logic"),(0,r.kt)("p",null,"Now let's wire all the UI components together. Create a ",(0,r.kt)("code",null,"main.js")," file under the ",(0,r.kt)("code",null,n.assetsFolder)," folder, and populate it with the following code:"),(0,r.kt)(s.Z,{title:n.assetsFolder+"/main.js",className:"language-jsx",mdxType:"CodeBlock"},l),(0,r.kt)("p",null,"The script will first try and obtain user details to check whether we're logged in or not.\nIf we are, the code can then initialize the viewer as well as the tree-view component.\nThe callback function passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"initTree")," makes sure that when we click on a leaf node\nin the tree, the viewer will start loading the corresponding Forge model."),(0,r.kt)("h2",{id:"user-interface"},"User interface"),(0,r.kt)("p",null,"And finally, let's build the UI of our application."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("code",null,"main.css")," file under the ",(0,r.kt)("code",null,n.assetsFolder)," subfolder, and populate it with the following CSS rules:"),(0,r.kt)(s.Z,{title:n.assetsFolder+"/main.css",className:"language-css",mdxType:"CodeBlock"},l),(0,r.kt)("p",null,"Then, create an ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file in the same folder with the following content:"),(0,r.kt)(s.Z,{title:n.assetsFolder+"/index.html",className:"language-html",mdxType:"CodeBlock"},'<!doctype html>\n<html lang="en">\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css">\n    <link rel="stylesheet" href="https://unpkg.com/simple-treeview/dist/treeview.vanilla.css">\n    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">\n    <link rel="stylesheet" href="/main.css">\n    <title>Autodesk Forge: Hubs Browser</title>\n</head>\n\n<body>\n    <div id="header">\n        <img class="logo" src="/logo.png" alt="Autodesk Forge">\n        <span class="title">Hubs Browser</span>\n        <button id="login" style="display: none">Login</button>\n    </div>\n    <div id="sidebar">\n        <div id="tree"></div>\n    </div>\n    <div id="preview"></div>\n    <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js"><\/script>\n    <script src="/main.js" type="module"><\/script>\n</body>\n\n</html>'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that since ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," is also an ES6 module, we have to use ",(0,r.kt)("inlineCode",{parentName:"p"},'type="module"')," in its ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," tag.")),(0,r.kt)("p",null,"The application will look for ",(0,r.kt)("code",null,"favicon.ico")," and ",(0,r.kt)("code",null,"logo.png")," images under the ",(0,r.kt)("code",null,n.assetsFolder)," folder to use as the website's icon and logo. If you don't have any images of your own, feel free to download them from one of our samples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/favicon.ico"},"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/favicon.ico")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/logo.png"},"https://github.com/petrbroz/forge-simple-viewer-nodejs/blob/develop/public/logo.png"))))}d.isMDXComponent=!0},5825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),s=n(4905),l=["components"],a={sidebar_position:4},c="Viewer & UI",d={unversionedId:"tutorials/hubs-browser/dotnet/viewer",id:"tutorials/hubs-browser/dotnet/viewer",isDocsHomePage:!1,title:"Viewer & UI",description:"Finally, we're ready to build the client-side piece of our application.",source:"@site/docs/tutorials/hubs-browser/dotnet/viewer.mdx",sourceDirName:"tutorials/hubs-browser/dotnet",slug:"/tutorials/hubs-browser/dotnet/viewer",permalink:"/forge-samples-docs/cz/docs/tutorials/hubs-browser/dotnet/viewer",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/main/website/docs/tutorials/hubs-browser/dotnet/viewer.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Browsing Hubs",permalink:"/forge-samples-docs/cz/docs/tutorials/hubs-browser/dotnet/hubs"}},u=[{value:"Try it out",id:"try-it-out",children:[]}],p={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"viewer--ui"},"Viewer & UI"),(0,r.kt)("p",null,"Finally, we're ready to build the client-side piece of our application."),(0,r.kt)(s.ZP,{assetsFolder:"wwwroot",mdxType:"ViewerPartial"}),(0,r.kt)("h2",{id:"try-it-out"},"Try it out"),(0,r.kt)("p",null,"And that's it! Your application is now ready for action. Start it from the command line as usual:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_CALLBACK_URL=https://localhost:5001/api/auth/callback\ndotnet trun\n")),(0,r.kt)("p",null,"And then navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://localhost:5001"},"https://localhost:5001")," in your browser.\nYou should be presented with a simple UI, with a tree-view on the left side, and an empty viewer on the right.\nTry browsing through the tree, and select a specific version of one of your files. After that the corresponding\nmodel should be loaded into the viewer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final App",src:n(698).Z})))}h.isMDXComponent=!0},698:function(e,t,n){t.Z=n.p+"assets/images/final-app-ba5d7fc0746e0eacbcb098a85b7a446f.png"}}]);