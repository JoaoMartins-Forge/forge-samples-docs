"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[184],{2924:function(e,t,n){var o=n(7294).createContext(void 0);t.Z=o},5350:function(e,t,n){var o=n(7294),i=n(2924);t.Z=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},7095:function(e,t,n){n.d(t,{ZP:function(){return d}});var o=n(7462),i=n(3366),l=(n(7294),n(3905)),a=n(6213),r=["components"],s={toc:[{value:"Viewer logic",id:"viewer-logic",children:[]},{value:"Application logic",id:"application-logic",children:[]},{value:"User interface",id:"user-interface",children:[]}]};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"viewer-logic"},"Viewer logic"),(0,l.kt)("p",null,"Let's start by implementing the Forge Viewer functionality of our application. Create a ",(0,l.kt)("code",null,"viewer.js")," file under the ",(0,l.kt)("code",null,n.assetsFolder)," subfolder with the following code:"),(0,l.kt)(a.Z,{title:n.assetsFolder+"/viewer.js",className:"language-js",mdxType:"CodeBlock"},"export async function initViewer(container) {\n    async function getAccessToken(callback) {\n        const resp = await fetch('/api/auth/token');\n        if (resp.ok) {\n            const { access_token, expires_in } = await resp.json();\n            callback(access_token, expires_in);\n        } else {\n            alert('Could not obtain access token. See the console for more details.');\n            console.error(await resp.text());\n        }\n    }\n    return new Promise(function (resolve, reject) {\n        Autodesk.Viewing.Initializer({ getAccessToken }, async function () {\n            const viewer = new Autodesk.Viewing.GuiViewer3D(container);\n            viewer.start();\n            viewer.setTheme('light-theme');\n            resolve(viewer);\n        });\n    });\n}\n\nexport function loadModel(viewer, urn) {\n    function onDocumentLoadSuccess(doc) {\n        viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry());\n    }\n    function onDocumentLoadFailure(code, message) {\n        alert('Could not load model. See the console for more details.');\n        console.error(message);\n    }\n    Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);\n}"),(0,l.kt)("p",null,"The script is an ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ES6 module"),"\nthat exports two functions, ",(0,l.kt)("inlineCode",{parentName:"p"},"initViewer")," that will create a new instance of Forge Viewer\nin the specified DOM container, and ",(0,l.kt)("inlineCode",{parentName:"p"},"loadModel")," which will load a specific model to the viewer."),(0,l.kt)("h2",{id:"application-logic"},"Application logic"),(0,l.kt)("p",null,"Next, let's define the logic of the application itself. We will need to populate the UI with all models available for viewing, and also the UI for uploading and translating new models. Create a ",(0,l.kt)("code",null,"main.js")," file under the ",(0,l.kt)("code",null,n.assetsFolder)," subfolder with the following content:"),(0,l.kt)(a.Z,{title:n.assetsFolder+"/main.js",className:"language-js",mdxType:"CodeBlock"},"import { initViewer, loadModel } from './viewer.js';\n\ninitViewer(document.getElementById('preview')).then(viewer => {\n    const urn = window.location.hash ? window.location.hash.substr(1) : null;\n    setupModelSelection(viewer, urn);\n    setupModelUpload(viewer);\n});\n\nasync function setupModelSelection(viewer, selectedUrn) {\n    const models = document.getElementById('models');\n    models.innerHTML = '';\n    const resp = await fetch('/api/models');\n    if (resp.ok) {\n        for (const model of await resp.json()) {\n            const option = document.createElement('option');\n            option.innerText = model.name;\n            option.setAttribute('value', model.urn);\n            if (model.urn === selectedUrn) {\n                option.setAttribute('selected', 'true');\n            }\n            models.appendChild(option);\n        }\n    } else {\n        alert('Could not list models. See the console for more details.');\n        console.error(await resp.text());\n    }\n    models.onchange = () => {\n        window.location.hash = models.value;\n        loadModel(viewer, models.value);\n    }\n    if (!viewer.model && models.value) {\n        models.onchange();\n    }\n}\n\nasync function setupModelUpload(viewer) {\n    const button = document.getElementById('upload');\n    const input = document.getElementById('input');\n    button.addEventListener('click', async function () {\n        input.click();\n    });\n    input.addEventListener('change', async function () {\n        if (input.files.length !== 1) {\n            return;\n        }\n        const file = input.files[0];\n        let data = new FormData();\n        data.append('model-file', file);\n        // When uploading a zip file, ask for the main design file in the archive\n        if (file.name.endsWith('.zip')) {\n            const entrypoint = window.prompt('Please enter the filename of the main design inside the archive.');\n            data.append('model-zip-entrypoint', entrypoint);\n        }\n        const resp = await fetch('/api/models', { method: 'POST', body: data });\n        if (resp.ok) {\n            input.value = '';\n            setupModelSelection(viewer);\n        } else {\n            alert('Could not upload model. See the console for more details.');\n            console.error(await resp.text());\n        }\n    });\n}"),(0,l.kt)("p",null,"The scripts will initialize the viewer, populate a dropdown element in the UI with models\nretrieved from the ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/models")," endpoint, and setup the file upload UI. Note that when\nthe uploaded file has a ",(0,l.kt)("inlineCode",{parentName:"p"},".zip")," extension, the JavaScript logic will also prompt the user\nfor the name of the file ",(0,l.kt)("strong",{parentName:"p"},"inside the archive")," that should be converted by Forge."),(0,l.kt)("h2",{id:"user-interface"},"User interface"),(0,l.kt)("p",null,"And finally, let's build the UI of our application."),(0,l.kt)("p",null,"Create a ",(0,l.kt)("code",null,"main.css")," file under the ",(0,l.kt)("code",null,n.assetsFolder)," subfolder, and populate it with the following CSS rules:"),(0,l.kt)(a.Z,{title:n.assetsFolder+"/main.css",className:"language-css",mdxType:"CodeBlock"},"body, html {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n}\n\n#header, #preview {\n    position: absolute;\n    width: 100%;\n}\n\n#header {\n    height: 3em;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#preview {\n    top: 3em;\n    bottom: 0;\n}\n\n#header > * {\n    height: 2em;\n    margin: 0 0.5em;\n    font-family: ArtifaktElement; /* Will be added by Forge Viewer */\n    font-size: 1em;\n}\n\n#header .title {\n    flex: 1 0 auto;\n    height: auto;\n}\n\n#models {\n    flex: 0 1 auto;\n    min-width: 2em;\n}\n"),(0,l.kt)("p",null,"Then, create an ",(0,l.kt)("code",null,"index.html")," file (also in the ",(0,l.kt)("code",null,n.assetsFolder)," subfolder) with the following content:"),(0,l.kt)(a.Z,{title:n.assetsFolder+"/index.html",className:"language-html",mdxType:"CodeBlock"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css">\n    <link rel="stylesheet" href="/main.css">\n    <title>Autodesk Forge: Simple Viewer</title>\n</head>\n\n<body>\n    <div id="header">\n        <img class="logo" src="/logo.png" alt="Autodesk Forge">\n        <span class="title">Simple Viewer</span>\n        <select name="models" id="models"></select>\n        <button id="upload" title="Upload New Model">Upload</button>\n        <input style="display: none" type="file" id="input">\n    </div>\n    <div id="preview"></div>\n    <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js"><\/script>\n    <script src="/main.js" type="module"><\/script>\n</body>\n\n</html>'),(0,l.kt)("p",null,"The HTML markup simply uses a ",(0,l.kt)("inlineCode",{parentName:"p"},"<select>")," element as the dropdown for listing the viewable models,\nand an ",(0,l.kt)("inlineCode",{parentName:"p"},'<input type="file">')," element with a ",(0,l.kt)("inlineCode",{parentName:"p"},"<button>")," to handle the uploading of a new model.\nNote that since ",(0,l.kt)("inlineCode",{parentName:"p"},"main.js")," is also an ES6 module, we have to use ",(0,l.kt)("inlineCode",{parentName:"p"},'type="module"')," in its ",(0,l.kt)("inlineCode",{parentName:"p"},"<script>")," tag."),(0,l.kt)("p",null,"The application will look for ",(0,l.kt)("code",null,"favicon.ico")," and ",(0,l.kt)("code",null,"logo.png")," images under the ",(0,l.kt)("code",null,n.assetsFolder)," folder to use as the website's icon and logo. If you don't have any images of your own, feel free to download them from one of our samples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/public/favicon.ico"},"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/public/favicon.ico")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/public/logo.png"},"https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/public/logo.png"))))}d.isMDXComponent=!0},4451:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var o=n(7462),i=n(3366),l=(n(7294),n(3905)),a=n(7095),r=["components"],s={sidebar_position:4},d="Viewer & UI",p={unversionedId:"tutorials/simple-viewer/dotnet/viewer",id:"tutorials/simple-viewer/dotnet/viewer",isDocsHomePage:!1,title:"Viewer & UI",description:"Finally, we're ready to build the client-side piece of our application.",source:"@site/docs/tutorials/simple-viewer/dotnet/viewer.mdx",sourceDirName:"tutorials/simple-viewer/dotnet",slug:"/tutorials/simple-viewer/dotnet/viewer",permalink:"/forge-samples-docs/cz/docs/tutorials/simple-viewer/dotnet/viewer",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/main/website/docs/tutorials/simple-viewer/dotnet/viewer.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data Management",permalink:"/forge-samples-docs/cz/docs/tutorials/simple-viewer/dotnet/data"},next:{title:"Introduction",permalink:"/forge-samples-docs/cz/docs/tutorials/hubs-browser/index"}},c=[{value:"Try it out",id:"try-it-out",children:[]}],u={toc:c};function m(e){var t=e.components,s=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"viewer--ui"},"Viewer & UI"),(0,l.kt)("p",null,"Finally, we're ready to build the client-side piece of our application."),(0,l.kt)(a.ZP,{assetsFolder:"wwwroot",mdxType:"ViewerPartial"}),(0,l.kt)("h2",{id:"try-it-out"},"Try it out"),(0,l.kt)("p",null,"And that's it! Your application is now ready for action. Start it from the command line as usual:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_BUCKET=optional-custom-bucket-name\ndotnet run\n")),(0,l.kt)("p",null,"And then navigate to ",(0,l.kt)("a",{parentName:"p",href:"https://localhost:5001"},"https://localhost:5001")," in your browser. You should be\npresented with a simple UI, with a dropdown in the top-right corner that will eventually get populated\nwith all models available in your configured bucket, and with a button for uploading new models.\nAnd as soon as you select one of the options from the dropdown, the corresponding model will get loaded\nin the viewer occupying the rest of the webpage."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Final App",src:n(6945).Z})))}m.isMDXComponent=!0},6945:function(e,t,n){t.Z=n.p+"assets/images/final-app-e22577b435e63247d263e62a9a0c4221.png"}}]);