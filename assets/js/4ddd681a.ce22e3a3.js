"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[277],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1119:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="Basic Server",p={unversionedId:"tutorials/hubs-browser/dotnet-vscode/server",id:"tutorials/hubs-browser/dotnet-vscode/server",title:"Basic Server",description:"In this step we're going to create a new .NET 6 project, install all the required dependencies,",source:"@site/docs/tutorials/hubs-browser/dotnet-vscode/01-server.md",sourceDirName:"tutorials/hubs-browser/dotnet-vscode",slug:"/tutorials/hubs-browser/dotnet-vscode/server",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet-vscode/server",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/hubs-browser/dotnet-vscode/01-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Viewer & UI",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs-vscode/viewer"},next:{title:"Authentication",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/dotnet-vscode/auth"}},c={},u=[{value:"Project &amp; dependencies",id:"project--dependencies",level:2},{value:"Application config",id:"application-config",level:2},{value:"Create a basic server",id:"create-a-basic-server",level:2},{value:"Try it out",id:"try-it-out",level:2}],d={toc:u};function g(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-server"},"Basic Server"),(0,i.kt)("p",null,"In this step we're going to create a new .NET 6 project, install all the required dependencies,\nand setup a basic ASP.NET server."),(0,i.kt)("h2",{id:"project--dependencies"},"Project & dependencies"),(0,i.kt)("p",null,"Create a new folder for your project, navigate to it in the command line, and initialize a new\nASP.NET Core project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new web\n")),(0,i.kt)("p",null,"Next we will need to install the dependencies. In this case it will just be the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Autodesk.Forge"},"Forge SDK"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Autodesk.Forge\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"*.csproj")," file in your project should now look similar to this (possibly with\nslightly different version numbers, and additional .NET settings):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <PackageReference Include="Autodesk.Forge" Version="1.9.0" />\n  </ItemGroup>\n\n</Project>\n')),(0,i.kt)("p",null,"Finally, let's create a couple more subfolders in your project folder that we're going to need later:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Controllers")," - this is where we're going to implement all the server endpoints"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Models")," - here we're going to keep all the server-side logic that can be shared by different endpoints"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wwwrooot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)")),(0,i.kt)("h2",{id:"application-config"},"Application config"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet")," utility bootstrapped your application, it generated random port numbers\nfor its HTTP and HTTPS addresses. Let's change those to specific port numbers (8080 for HTTP,\nand 8081 for HTTPS) that we will use throughout this tutorial."),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Properties")," folder, and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"applicationUrl"),"\nproperty to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:8081;http://localhost:8080"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Launch Config",src:n(4029).Z,width:"1500",height:"965"})),(0,i.kt)("h2",{id:"create-a-basic-server"},"Create a basic server"),(0,i.kt)("p",null,"Next we'll setup our basic server. Start by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file in the root folder\nof your project with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var ForgeClientID = Environment.GetEnvironmentVariable("FORGE_CLIENT_ID");\n        var ForgeClientSecret = Environment.GetEnvironmentVariable("FORGE_CLIENT_SECRET");\n        var ForgeCallbackURL = Environment.GetEnvironmentVariable("FORGE_CALLBACK_URL");\n        if (string.IsNullOrEmpty(ForgeClientID) || string.IsNullOrEmpty(ForgeClientSecret) || string.IsNullOrEmpty(ForgeCallbackURL))\n        {\n            throw new ApplicationException("Missing required environment variables FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, or FORGE_CALLBACK_URL.");\n        }\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseHttpsRedirection();\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup"),' class is responsible for configuring our server and its "middleware", for example,\nserving of static files. We also try and retrieve the Forge application client ID, client secret\n(these are the values you obtain when ',(0,i.kt)("a",{parentName:"p",href:"../../../intro#create-an-app"},"creating a new Forge application"),"),\nand the callback URL (where our users will be redirected to after logging in) from environment\nvariables for later use."),(0,i.kt)("p",null,"Next, replace the content of ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        CreateHostBuilder(args).Build().Run();\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureWebHostDefaults(webBuilder =>\n            {\n                webBuilder.UseStartup<Startup>();\n            });\n}\n")),(0,i.kt)("p",null,"This code will make sure that the dotnet application creates a web server with our\nnew ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup")," class."),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"Now that we have a basic ASP.NET application setup, let's try it out. In the command line,\nsetup the required environment variables, ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_SECRET"),", and\n",(0,i.kt)("inlineCode",{parentName:"p"},"FORGE_CALLBACK_URL"),", and run the application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_CALLBACK_URL=https://localhost:8081/api/auth/callback\ndotnet run\n")),(0,i.kt)("p",null,"When you navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://localhost:8081"},"https://localhost:8081")," in your browser,\nyou should get a 404 response because we haven't implemented any server logic yet.\nThat's going to be the goal of the next step."))}g.isMDXComponent=!0},4029:function(e,t,n){t.Z=n.p+"assets/images/launch-config-289a88207fc80d9b90fc90a13ed3ffb8.png"}}]);