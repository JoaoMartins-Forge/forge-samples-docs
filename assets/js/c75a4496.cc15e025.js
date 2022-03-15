"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[375],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8060:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Basic Server",p={unversionedId:"tutorials/simple-viewer/dotnet-vs2022/server",id:"tutorials/simple-viewer/dotnet-vs2022/server",title:"Basic Server",description:"In this step we're going to create a new .NET 6 project, install all the required dependencies,",source:"@site/docs/tutorials/simple-viewer/dotnet-vs2022/01-server.md",sourceDirName:"tutorials/simple-viewer/dotnet-vs2022",slug:"/tutorials/simple-viewer/dotnet-vs2022/server",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/dotnet-vs2022/server",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/simple-viewer/dotnet-vs2022/01-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Viewer & UI",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/dotnet-vscode/viewer"},next:{title:"Introduction",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/"}},c={},u=[{value:"Create new project",id:"create-new-project",level:2},{value:"Add dependencies",id:"add-dependencies",level:2},{value:"Create a basic server",id:"create-a-basic-server",level:2},{value:"Try it out",id:"try-it-out",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-server"},"Basic Server"),(0,a.kt)("p",null,"In this step we're going to create a new .NET 6 project, install all the required dependencies,\nand setup a basic ASP.NET server."),(0,a.kt)("h2",{id:"create-new-project"},"Create new project"),(0,a.kt)("p",null,"Create a new project in Visual Studio:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Create a new project",src:n(6085).Z,width:"1014",height:"675"})),(0,a.kt)("p",null,"Choose the ",(0,a.kt)("em",{parentName:"p"},"ASP.NET Core Empty")," template:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Choose a template",src:n(2820).Z,width:"1014",height:"675"})),(0,a.kt)("p",null,"Name the project in any way you want:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Configure project",src:n(8066).Z,width:"1014",height:"675"})),(0,a.kt)("p",null,"Choose the ",(0,a.kt)("em",{parentName:"p"},".NET 6.0 (Long-term support)")," framework:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Additional information",src:n(7074).Z,width:"1014",height:"675"})),(0,a.kt)("p",null,"Once the project is ready, create a couple of subfolders in your project folder that we're going to need later:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Controllers")," - this is where we're going to implement all the server endpoints"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Models")," - here we're going to keep all the server-side logic that can be shared by different endpoints"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wwwrooot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)")),(0,a.kt)("p",null,"The folder structure in the ",(0,a.kt)("em",{parentName:"p"},"Solution Explorer")," should look similar to this:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Folder Structure",src:n(528).Z,width:"1081",height:"626"})),(0,a.kt)("h2",{id:"add-dependencies"},"Add dependencies"),(0,a.kt)("p",null,"Next we will need to install the dependencies. In this case it will just be the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Autodesk.Forge"},"Forge SDK"),". In the ",(0,a.kt)("em",{parentName:"p"},"Solution Explorer"),",\nright-click on ",(0,a.kt)("em",{parentName:"p"},"Dependencies"),", and then click on ",(0,a.kt)("em",{parentName:"p"},"Manage NuGet Packages..."),":"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Manage NuGet dependencies",src:n(4943).Z,width:"1247",height:"782"})),(0,a.kt)("p",null,"In the ",(0,a.kt)("em",{parentName:"p"},"NuGet Package Manager"),", switch to the ",(0,a.kt)("em",{parentName:"p"},"Browse")," tab, and search for and install\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Autodesk.Forge")," package:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Install Forge NuGet",src:n(5468).Z,width:"1247",height:"782"})),(0,a.kt)("h2",{id:"create-a-basic-server"},"Create a basic server"),(0,a.kt)("p",null,"Next we'll setup our basic server. Start by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file in the root folder\nof your project with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var ForgeClientID = Environment.GetEnvironmentVariable("FORGE_CLIENT_ID");\n        var ForgeClientSecret = Environment.GetEnvironmentVariable("FORGE_CLIENT_SECRET");\n        var ForgeBucket = Environment.GetEnvironmentVariable("FORGE_BUCKET"); // Optional\n        if (string.IsNullOrEmpty(ForgeClientID) || string.IsNullOrEmpty(ForgeClientSecret))\n        {\n            throw new ApplicationException("Missing required environment variables FORGE_CLIENT_ID or FORGE_CLIENT_SECRET.");\n        }\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseHttpsRedirection();\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup"),' class is responsible for configuring our server and its "middleware", for example,\nserving of static files. We also try and retrieve the Forge application client ID and secret\n(these are the values you obtain when ',(0,a.kt)("a",{parentName:"p",href:"../../../intro#create-an-app"},"creating a new Forge application"),")\nfrom environment variables for later use."),(0,a.kt)("p",null,"Next, replace the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        CreateHostBuilder(args).Build().Run();\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureWebHostDefaults(webBuilder =>\n            {\n                webBuilder.UseStartup<Startup>();\n            });\n}\n")),(0,a.kt)("p",null,"This code will make sure that the .NET application creates a web server with our\nnew ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup")," class."),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("p",null,"Now that we have a basic ASP.NET application setup, let's try it out! First of all, we need to provide\nthe two environment variables, ",(0,a.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_SECRET"),", to our application.\nIn Visual Studio 2022 this can be done via ",(0,a.kt)("em",{parentName:"p"},"Launch Profiles"),". Open the properties of your ASP.NET project\n(for example, by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"Alt"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"Enter"),"), navigate to the ",(0,a.kt)("em",{parentName:"p"},"Debug")," > ",(0,a.kt)("em",{parentName:"p"},"General")," section, and click on\n",(0,a.kt)("em",{parentName:"p"},"Open debug launch profiles UI"),". Then, in the ",(0,a.kt)("em",{parentName:"p"},"Launch Profiles")," window, add the environment variables\nand their values to the ",(0,a.kt)("em",{parentName:"p"},"Environment variables"),' field as "key=value" pairs separated by a comma.'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Launch Profiles",src:n(5418).Z,width:"1247",height:"782"})),(0,a.kt)("p",null,"With your env. variables setup, you can now start the application (for example, using\nthe ",(0,a.kt)("em",{parentName:"p"},"Debug")," > ",(0,a.kt)("em",{parentName:"p"},"Start Debugging")," menu item, or by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"F5"),"). Visual Studio will automatically\nopen the ",(0,a.kt)("a",{parentName:"p",href:"https://localhost:7197"},"https://localhost:7197")," URL in your browser. You should get\na 404 response because we haven't implemented any server logic yet. That's going to be the goal\nof the next step."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When starting the application for the first time you may be prompted to trust the self-signed\nSSL certificate generated by ASP.NET Core. This is expected, and you can accept this prompt."))))}m.isMDXComponent=!0},7074:function(e,t,n){t.Z=n.p+"assets/images/additional-info-dcb45e4bb4949e88f4ffd4ef7a82ca84.png"},2820:function(e,t,n){t.Z=n.p+"assets/images/choose-template-6f89f43d0145a0a54511663bcedf8c84.png"},8066:function(e,t,n){t.Z=n.p+"assets/images/configure-project-17bf08ad5f8192e5b4dc243b22a5db59.png"},6085:function(e,t,n){t.Z=n.p+"assets/images/create-project-de9c3e16127fd3d1e8f6fe91ef170bfd.png"},528:function(e,t,n){t.Z=n.p+"assets/images/folder-structure-ccddb35680fb9831ef301ce83351b545.png"},5468:function(e,t,n){t.Z=n.p+"assets/images/install-nuget-23b3e5175985e713d58b984d194e48a3.png"},5418:function(e,t,n){t.Z=n.p+"assets/images/launch-profiles-460879eba50a90fc9345f1c0e07cc961.png"},4943:function(e,t,n){t.Z=n.p+"assets/images/manage-nuget-ee25ebe534bb239ac5c651ae44061ff3.png"}}]);