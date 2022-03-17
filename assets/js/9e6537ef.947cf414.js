"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[560],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),o=n(7294),r=n(2389),i=n(9366),s=n(6010),l="tabItem_LplD";function p(e){var t,n,r,p=e.lazy,c=e.block,u=e.defaultValue,d=e.values,m=e.groupId,g=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(t=null!=u?u:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),b=N.tabGroupChoices,C=N.setTabGroupChoices,w=(0,o.useState)(k),y=w[0],E=w[1],T=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=b[m];null!=x&&x!==y&&f.some((function(e){return e.value===x}))&&E(x)}var I=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==y&&(S(t),E(a),null!=m&&C(m,a))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},g)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return T.push(e)},onKeyDown:R,onFocus:I,onClick:I},r,{className:(0,s.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),p?(0,o.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function c(e){var t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},4870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return J},contentTitle:function(){return q},default:function(){return Y},frontMatter:function(){return K},metadata:function(){return W},toc:function(){return $}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(9877),s=n(8215),l=["components"],p={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create a new folder for your project, navigate to it in the command line,\nand initialize a new Node.js project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,r.kt)("p",null,"Next, install all the Node.js dependencies we're going to use. In this case it will be\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://expressjs.com"},"Express.js")," framework, an Express.js ",(0,r.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/using-middleware.html"},"middleware"),"\nfor handling cookie-based sessions, and finally the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/forge-apis"},"Forge SDK"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save express cookie-session forge-apis\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'"dependencies"')," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file should now look something like this\n(potentially with slightly different version numbers):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"dependencies": {\n    "cookie-session": "^1.4.0",\n    "express": "^4.17.1",\n    "forge-apis": "^0.8.6"\n},\n// ...\n')),(0,r.kt)("p",null,"Finally, let's create a couple more subfolders in your project folder that we're going to need later:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wwwroot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routes")," - this is where we're going to implement all the server endpoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"services")," - here we're going to keep all the server-side logic that can be shared by different endpoints")))}c.isMDXComponent=!0;var u=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Our Node.js application will need a couple of configuration parameters to run properly, for example,\nthe credentials of our Forge app for communicating with Autodesk Forge services, or the callback URL\nwhere our users will be redirected to during the ",(0,r.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/"},"3-legged authentication workflow"),".\nWe will pass these parameters to the server app using environment variables."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"config.js")," file in the root of your project folder, and add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config.js"',title:'"config.js"'},"let { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, SERVER_SESSION_SECRET, PORT } = process.env;\nif (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET || !FORGE_CALLBACK_URL || !SERVER_SESSION_SECRET) {\n    console.warn('Missing some of the environment variables.');\n    process.exit(1);\n}\nconst INTERNAL_TOKEN_SCOPES = ['data:read'];\nconst PUBLIC_TOKEN_SCOPES = ['viewables:read'];\nPORT = PORT || 8080;\n\nmodule.exports = {\n    FORGE_CLIENT_ID,\n    FORGE_CLIENT_SECRET,\n    FORGE_CALLBACK_URL,\n    SERVER_SESSION_SECRET,\n    INTERNAL_TOKEN_SCOPES,\n    PUBLIC_TOKEN_SCOPES,\n    PORT\n};\n")),(0,r.kt)("p",null,"We simply read the environment variables from ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env"),", and exit the application\nimmediately if any of the required properties are missing."))}m.isMDXComponent=!0;var g=["components"],h={toc:[]};function f(e){var t=e.components,n=(0,o.Z)(e,g);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js")," file in the root of your project folder with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session')\nconst { PORT, SERVER_SESSION_SECRET } = require('./config.js');\n\nlet app = express();\napp.use(express.static('wwwroot'));\napp.use(session({ secret: SERVER_SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 }));\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")),(0,r.kt)("p",null,"For now the server isn't doing much, just serving client side assets from the ",(0,r.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder,\nand accessing session data stored in cookies. The cookies will be encrypted using a secret phrase\nthat we will need to pass to the application via the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_SESSION_SECRET"),"."),(0,r.kt)("p",null,"Next, let's add a ",(0,r.kt)("inlineCode",{parentName:"p"},'"start": "node server.js"')," script to the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file so that we can\neasily run our application later:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"scripts": {\n    "start": "node server.js"\n}\n// ...\n')))}f.isMDXComponent=!0;var v=["components"],k={toc:[]};function N(e){var t=e.components,n=(0,o.Z)(e,v);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to run and debug our application in Visual Studio Code, we need to create\na ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"},"launch configuration"),".\nCreate a new ",(0,r.kt)("inlineCode",{parentName:"p"},".vscode")," folder in your project folder, and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"launch.json")," file inside this\nfolder with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/launch.json"',title:'".vscode/launch.json"'},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "type": "node",\n            "request": "launch",\n            "name": "Launch Server",\n            "runtimeExecutable": "npm",\n            "runtimeArgs": [\n                "start"\n            ],\n            "envFile": "${workspaceFolder}/.env",\n            "skipFiles": [\n                "<node_internals>/**/*.js"\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"The JSON structure defines a single launch configuration called ",(0,r.kt)("em",{parentName:"p"},"Launch Server"),"\nthat will start our application using the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," command, and what is more\nimportant, it will look for a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in the project folder, and provide\nany ",(0,r.kt)("inlineCode",{parentName:"p"},'<key>="<value>"')," pairs defined in this file as environment variables to our application.\nLet's create the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in the project folder, and populate it with our environment\nvariables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-title=".env"'},'FORGE_CLIENT_ID="your-client-id"\nFORGE_CLIENT_SECRET="your-client-secret"\nFORGE_CALLBACK_URL="http://localhost:8080/api/auth/callback"\nSERVER_SESSION_SECRET="some-random-phrase"\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file contains sensitive information, make sure that it is ",(0,r.kt)("strong",{parentName:"p"},"excluded")," from git.\nThis can be done by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," line to the ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file."))),(0,r.kt)("p",null,"Now start the application from Visual Studio Code (for example, via the ",(0,r.kt)("em",{parentName:"p"},"Run > Start Debugging"),"\nmenu, or by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"F5"),"), and navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"\nin the browser. The server should respond with ",(0,r.kt)("inlineCode",{parentName:"p"},"Cannot GET /")," because we haven't added any\nlogic to it just yet. That's going to be the topic of the next step."))}N.isMDXComponent=!0;var b=["components"],C={toc:[]};function w(e){var t=e.components,n=(0,o.Z)(e,b);return(0,r.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create a new folder for your project, navigate to it in the command line, and initialize a new\nASP.NET Core project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new web\n")),(0,r.kt)("p",null,"Next we will need to install the dependencies. In this case it will just be the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Autodesk.Forge"},"Forge SDK"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Autodesk.Forge\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"*.csproj")," file in your project should now look similar to this (possibly with\nslightly different version numbers, and additional .NET settings):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <PackageReference Include="Autodesk.Forge" Version="1.9.0" />\n  </ItemGroup>\n\n</Project>\n')),(0,r.kt)("p",null,"Finally, let's create a couple more subfolders in your project folder that we're going to need later:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Controllers")," - this is where we're going to implement all the server endpoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Models")," - here we're going to keep all the server-side logic that can be shared by different endpoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wwwrooot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)")))}w.isMDXComponent=!0;var y=["components"],E={toc:[]};function T(e){var t=e.components,i=(0,o.Z)(e,y);return(0,r.kt)("wrapper",(0,a.Z)({},E,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet")," utility bootstrapped your application, it generated random port numbers\nfor its HTTP and HTTPS addresses. Let's change those to a specific port number (8080) that\nwe will use throughout this tutorial."),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," folder, and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"applicationUrl"),"\nproperty to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Launch Config",src:n(4432).Z,width:"1500",height:"965"})))}T.isMDXComponent=!0;var S=["components"],x={toc:[]};function I(e){var t=e.components,n=(0,o.Z)(e,S);return(0,r.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Start by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file in the root folder\nof your project with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var ForgeClientID = Environment.GetEnvironmentVariable("FORGE_CLIENT_ID");\n        var ForgeClientSecret = Environment.GetEnvironmentVariable("FORGE_CLIENT_SECRET");\n        var ForgeCallbackURL = Environment.GetEnvironmentVariable("FORGE_CALLBACK_URL");\n        if (string.IsNullOrEmpty(ForgeClientID) || string.IsNullOrEmpty(ForgeClientSecret) || string.IsNullOrEmpty(ForgeCallbackURL))\n        {\n            throw new ApplicationException("Missing required environment variables FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, or FORGE_CALLBACK_URL.");\n        }\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseHttpsRedirection();\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup"),' class is responsible for configuring our server and its "middleware", for example,\nserving of static files. We also try and retrieve the Forge application client ID, client secret\n(these are the values you obtain when creating a new Forge application),\nand the callback URL (where our users will be redirected to after logging in) from environment\nvariables for later use.'),(0,r.kt)("p",null,"Next, replace the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        CreateHostBuilder(args).Build().Run();\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureWebHostDefaults(webBuilder =>\n            {\n                webBuilder.UseStartup<Startup>();\n            });\n}\n")),(0,r.kt)("p",null,"This code will make sure that the .NET application creates a web server with our\nnew ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," class."))}I.isMDXComponent=!0;var R=["components"],L={toc:[]};function _(e){var t=e.components,n=(0,o.Z)(e,R);return(0,r.kt)("wrapper",(0,a.Z)({},L,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that we have a basic ASP.NET application setup, let's try it out. In the command line,\nsetup the required environment variables, ",(0,r.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_ID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_SECRET"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"FORGE_CALLBACK_URL"),", and run the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_CALLBACK_URL=http://localhost:8080/api/auth/callback\ndotnet run\n")),(0,r.kt)("p",null,"When you navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," in your browser,\nyou should get a 404 response because we haven't implemented any server logic yet.\nThat's going to be the goal of the next step."))}_.isMDXComponent=!0;var j=n(1294),O=n(2376),D=["components"],F={toc:[]};function Z(e){var t=e.components,n=(0,o.Z)(e,D);return(0,r.kt)("wrapper",(0,a.Z)({},F,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(j.ZP,{mdxType:"SetupVS2022"}),(0,r.kt)(O.ZP,{mdxType:"AddDependencies"}))}Z.isMDXComponent=!0;var M=["components"],P={toc:[]};function A(e){var t=e.components,n=(0,o.Z)(e,M);return(0,r.kt)("wrapper",(0,a.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet")," utility bootstrapped your application, it generated random port numbers\nfor its HTTP and HTTPS addresses. Let's change those to a specific port number (8080) that\nwe will use throughout this tutorial."),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," folder, and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"applicationUrl"),"\nproperty to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."))}A.isMDXComponent=!0;var G=["components"],V={toc:[]};function U(e){var t=e.components,n=(0,o.Z)(e,G);return(0,r.kt)("wrapper",(0,a.Z)({},V,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Start by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file in the root folder\nof your project with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var ForgeClientID = Environment.GetEnvironmentVariable("FORGE_CLIENT_ID");\n        var ForgeClientSecret = Environment.GetEnvironmentVariable("FORGE_CLIENT_SECRET");\n        var ForgeCallbackURL = Environment.GetEnvironmentVariable("FORGE_CALLBACK_URL");\n        if (string.IsNullOrEmpty(ForgeClientID) || string.IsNullOrEmpty(ForgeClientSecret) || string.IsNullOrEmpty(ForgeCallbackURL))\n        {\n            throw new ApplicationException("Missing required environment variables FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, or FORGE_CALLBACK_URL.");\n        }\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseHttpsRedirection();\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup"),' class is responsible for configuring our server and its "middleware", for example,\nserving of static files. We also try and retrieve the Forge application client ID, client secret\n(these are the values you obtain when creating a new Forge application),\nand the callback URL (where our users will be redirected to after logging in) from environment\nvariables for later use.'),(0,r.kt)("p",null,"Next, replace the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        CreateHostBuilder(args).Build().Run();\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureWebHostDefaults(webBuilder =>\n            {\n                webBuilder.UseStartup<Startup>();\n            });\n}\n")),(0,r.kt)("p",null,"This code will make sure that the .NET application creates a web server with our\nnew ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," class."))}U.isMDXComponent=!0;var B=["components"],H={toc:[]};function X(e){var t=e.components,i=(0,o.Z)(e,B);return(0,r.kt)("wrapper",(0,a.Z)({},H,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that we have a basic ASP.NET application setup, let's try it out!"),(0,r.kt)("p",null,'In order to be able to run our app, we need to provide a "launch configuration" for it,\nspecifying things such as the environment variables, and the address and port the server should\nbe listening on. Open the ',(0,r.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," folder, add the\n",(0,r.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_ID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_SECRET"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"FORGE_CALLBACK_URL")," environment variables\nwith your Forge app credentials and callback, and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"applicationUrl"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Launch Settings",src:n(7817).Z,width:"1107",height:"700"})),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The callback URL we specify here must match the callback URL that you've configured\nfor your Forge application on ",(0,r.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/myapps"},"https://forge.autodesk.com/myapps"),"."))),(0,r.kt)("p",null,"When you start the application, Visual Studio will automaticaly open ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"\nin your browser, and you should get a 404 response because we haven't implemented any server logic yet.\nThat's going to be the topic of the next step."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When starting the application for the first time you may be prompted to trust the self-signed\nSSL certificate generated by ASP.NET Core. This is expected, and you can accept this prompt."))))}X.isMDXComponent=!0;var z=["components"],K={},q="Application Setup",W={unversionedId:"tutorials/hubs-browser/setup",id:"tutorials/hubs-browser/setup",title:"Application Setup",description:"Let's start by creating a new project, installing required dependencies, and setting up",source:"@site/docs/tutorials/02-hubs-browser/01-setup.mdx",sourceDirName:"tutorials/02-hubs-browser",slug:"/tutorials/hubs-browser/setup",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/setup",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/02-hubs-browser/01-setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/"},next:{title:"Authentication",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/auth"}},J={},$=[{value:"Create project",id:"create-project",level:2},{value:"Application config",id:"application-config",level:2},{value:"Create basic server",id:"create-basic-server",level:2},{value:"Try it out",id:"try-it-out",level:2}],Q={toc:$};function Y(e){var t=e.components,n=(0,o.Z)(e,z);return(0,r.kt)("wrapper",(0,a.Z)({},Q,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-setup"},"Application Setup"),(0,r.kt)("p",null,"Let's start by creating a new project, installing required dependencies, and setting up\na basic server application."),(0,r.kt)("h2",{id:"create-project"},"Create project"),(0,r.kt)(i.Z,{groupId:"development-environment",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0,mdxType:"TabItem"},(0,r.kt)(c,{mdxType:"NodeJsVsCodeProject"})),(0,r.kt)(s.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode",default:!0,mdxType:"TabItem"},(0,r.kt)(w,{mdxType:"DotNetVsCodeProject"})),(0,r.kt)(s.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022",default:!0,mdxType:"TabItem"},(0,r.kt)(Z,{mdxType:"DotNetVs2022Project"}))),(0,r.kt)("h2",{id:"application-config"},"Application config"),(0,r.kt)(i.Z,{groupId:"development-environment",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0,mdxType:"TabItem"},(0,r.kt)(m,{mdxType:"NodeJsVsCodeConfig"})),(0,r.kt)(s.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode",default:!0,mdxType:"TabItem"},(0,r.kt)(T,{mdxType:"DotNetVsCodeConfig"})),(0,r.kt)(s.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022",default:!0,mdxType:"TabItem"},(0,r.kt)(A,{mdxType:"DotNetVs2022Config"}))),(0,r.kt)("h2",{id:"create-basic-server"},"Create basic server"),(0,r.kt)("p",null,"Next we'll setup a basic server application."),(0,r.kt)(i.Z,{groupId:"development-environment",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0,mdxType:"TabItem"},(0,r.kt)(f,{mdxType:"NodeJsVsCodeServer"})),(0,r.kt)(s.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode",default:!0,mdxType:"TabItem"},(0,r.kt)(I,{mdxType:"DotNetVsCodeServer"})),(0,r.kt)(s.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022",default:!0,mdxType:"TabItem"},(0,r.kt)(U,{mdxType:"DotNetVs2022Server"}))),(0,r.kt)("h2",{id:"try-it-out"},"Try it out"),(0,r.kt)(i.Z,{groupId:"development-environment",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0,mdxType:"TabItem"},(0,r.kt)(N,{mdxType:"NodeJsVsCodeTest"})),(0,r.kt)(s.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode",default:!0,mdxType:"TabItem"},(0,r.kt)(_,{mdxType:"DotNetVsCodeTest"})),(0,r.kt)(s.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022",default:!0,mdxType:"TabItem"},(0,r.kt)(X,{mdxType:"DotNetVs2022Test"}))))}Y.isMDXComponent=!0},1294:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={toc:[]};function l(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create a new project in Visual Studio:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Create a new project",src:n(4905).Z,width:"1014",height:"675"})),(0,r.kt)("p",null,"Choose the ",(0,r.kt)("em",{parentName:"p"},"ASP.NET Core Empty")," template:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Choose a template",src:n(1898).Z,width:"1014",height:"675"})),(0,r.kt)("p",null,"Name the project in any way you want:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Configure project",src:n(2985).Z,width:"1014",height:"675"})),(0,r.kt)("p",null,"Choose the ",(0,r.kt)("em",{parentName:"p"},".NET 6.0 (Long-term support)")," framework:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Additional information",src:n(5339).Z,width:"1014",height:"675"})),(0,r.kt)("p",null,"Once the project is ready, create a couple of subfolders in your project folder that we're going to need later:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Controllers")," - this is where we're going to implement all the server endpoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Models")," - here we're going to keep all the server-side logic that can be shared by different endpoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wwwrooot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)")))}l.isMDXComponent=!0},2376:function(e,t,n){n.d(t,{ZP:function(){return l}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={toc:[]};function l(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Next we will need to install the dependencies. In this case it will just be the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Autodesk.Forge"},"Forge SDK"),". In the ",(0,r.kt)("em",{parentName:"p"},"Solution Explorer"),",\nright-click on ",(0,r.kt)("em",{parentName:"p"},"Dependencies"),", and then click on ",(0,r.kt)("em",{parentName:"p"},"Manage NuGet Packages..."),":"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Manage NuGet dependencies",src:n(7282).Z,width:"1107",height:"700"})),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"NuGet Package Manager"),", switch to the ",(0,r.kt)("em",{parentName:"p"},"Browse")," tab, and search for and install\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Autodesk.Forge")," package:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Install Forge NuGet",src:n(3331).Z,width:"1107",height:"700"})))}l.isMDXComponent=!0},7817:function(e,t,n){t.Z=n.p+"assets/images/launch-settings-72de9e2dd6a6a211f1f4d667b570acf2.png"},4432:function(e,t,n){t.Z=n.p+"assets/images/launch-config-289a88207fc80d9b90fc90a13ed3ffb8.png"},5339:function(e,t,n){t.Z=n.p+"assets/images/additional-info-dcb45e4bb4949e88f4ffd4ef7a82ca84.png"},1898:function(e,t,n){t.Z=n.p+"assets/images/choose-template-bb61d671a1d5bf504e1142b6fa8cfd10.png"},2985:function(e,t,n){t.Z=n.p+"assets/images/configure-project-681284225cfaf3cce2a472bbacca6608.png"},4905:function(e,t,n){t.Z=n.p+"assets/images/create-project-012f4e961161580141e76bf3f9339589.png"},3331:function(e,t,n){t.Z=n.p+"assets/images/install-forge-aeb9560b27734dc57695b6eb2e12943d.png"},7282:function(e,t,n){t.Z=n.p+"assets/images/manage-nugets-ba9603ba8f866f072e3bbc358e84db1a.png"}}]);