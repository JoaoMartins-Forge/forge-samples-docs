"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[247],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="Basic Server",p={unversionedId:"tutorials/simple-viewer/dotnet-vscode/server",id:"tutorials/simple-viewer/dotnet-vscode/server",title:"Basic Server",description:"In this step we're going to create a new .NET 6 project, install all the required dependencies,",source:"@site/docs/tutorials/simple-viewer/dotnet-vscode/01-server.md",sourceDirName:"tutorials/simple-viewer/dotnet-vscode",slug:"/tutorials/simple-viewer/dotnet-vscode/server",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/dotnet-vscode/server",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/simple-viewer/dotnet-vscode/01-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Viewer & UI",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/nodejs-vscode/viewer"},next:{title:"Authentication",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/dotnet-vscode/auth"}},c={},u=[{value:"Project &amp; dependencies",id:"project--dependencies",level:2},{value:"Application config",id:"application-config",level:2},{value:"Create a basic server",id:"create-a-basic-server",level:2},{value:"Try it out",id:"try-it-out",level:2}],d={toc:u};function g(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-server"},"Basic Server"),(0,o.kt)("p",null,"In this step we're going to create a new .NET 6 project, install all the required dependencies,\nand setup a basic ASP.NET server."),(0,o.kt)("h2",{id:"project--dependencies"},"Project & dependencies"),(0,o.kt)("p",null,"Create a new folder for your project, navigate to it in the command line, and initialize a new\nASP.NET Core project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new web\n")),(0,o.kt)("p",null,"Next we will need to install the dependencies. In this case it will just be the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Autodesk.Forge"},"Forge SDK"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Autodesk.Forge\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"*.csproj")," file in your project should now look similar to this (possibly with\nslightly different version numbers, and additional .NET settings):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <PackageReference Include="Autodesk.Forge" Version="1.9.0" />\n  </ItemGroup>\n\n</Project>\n\n')),(0,o.kt)("p",null,"Finally, let's create a couple more subfolders in your project folder that we're going to need later:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Controllers")," - this is where we're going to implement all the server endpoints"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Models")," - here we're going to keep all the server-side logic that can be shared by different endpoints"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wwwroot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)")),(0,o.kt)("h2",{id:"application-config"},"Application config"),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet")," utility bootstrapped your application, it generated random port numbers\nfor its HTTP and HTTPS addresses. Let's change those to specific port numbers (8080 for HTTP,\nand 8081 for HTTPS) that we will use throughout this tutorial."),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties")," folder, and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"applicationUrl"),"\nproperty to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:8081;http://localhost:8080"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Launch Config",src:n(3683).Z,width:"1500",height:"965"})),(0,o.kt)("h2",{id:"create-a-basic-server"},"Create a basic server"),(0,o.kt)("p",null,"Next we'll setup our basic server. Start by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file in the root folder\nof your project with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var ForgeClientID = Environment.GetEnvironmentVariable("FORGE_CLIENT_ID");\n        var ForgeClientSecret = Environment.GetEnvironmentVariable("FORGE_CLIENT_SECRET");\n        var ForgeBucket = Environment.GetEnvironmentVariable("FORGE_BUCKET"); // Optional\n        if (string.IsNullOrEmpty(ForgeClientID) || string.IsNullOrEmpty(ForgeClientSecret))\n        {\n            throw new ApplicationException("Missing required environment variables FORGE_CLIENT_ID or FORGE_CLIENT_SECRET.");\n        }\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseHttpsRedirection();\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup"),' class is responsible for configuring our server and its "middleware", for example,\nserving of static files. We also try and retrieve the Forge application client ID and secret\n(these are the values you obtain when ',(0,o.kt)("a",{parentName:"p",href:"../../../intro#create-an-app"},"creating a new Forge application"),")\nfrom environment variables for later use."),(0,o.kt)("p",null,"Next, replace the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        CreateHostBuilder(args).Build().Run();\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureWebHostDefaults(webBuilder =>\n            {\n                webBuilder.UseStartup<Startup>();\n            });\n}\n")),(0,o.kt)("p",null,"This code will make sure that the .NET application creates a web server with our\nnew ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup")," class."),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)("p",null,"Now that we have a basic ASP.NET application setup, let's try it out. In the command line,\nsetup the two required environment variables, ",(0,o.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_SECRET"),",\nand run the .NET application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\ndotnet run\n")),(0,o.kt)("p",null,"When you navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://localhost:8081"},"https://localhost:8081")," in your browser, you should\nget a 404 response because we haven't implemented any server logic yet. That's going to be the topic\nof the next step."))}g.isMDXComponent=!0},3683:function(e,t,n){t.Z=n.p+"assets/images/launch-config-289a88207fc80d9b90fc90a13ed3ffb8.png"}}]);