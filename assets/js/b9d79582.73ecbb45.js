"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[723],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5573:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={sidebar_position:2},l="Authentication",c={unversionedId:"tutorials/simple-viewer/dotnet-vs2022/auth",id:"tutorials/simple-viewer/dotnet-vs2022/auth",title:"Authentication",description:"In this step we're going to extend the server implementation so that it can authenticate itself",source:"@site/docs/tutorials/01-simple-viewer/dotnet-vs2022/02-auth.mdx",sourceDirName:"tutorials/01-simple-viewer/dotnet-vs2022",slug:"/tutorials/simple-viewer/dotnet-vs2022/auth",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/dotnet-vs2022/auth",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/01-simple-viewer/dotnet-vs2022/02-auth.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic Server",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/dotnet-vs2022/server"},next:{title:"Model Management",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/dotnet-vs2022/models"}},p={},u=[{value:"Token management",id:"token-management",level:2},{value:"Server endpoints",id:"server-endpoints",level:2},{value:"Try it out",id:"try-it-out",level:2}],d={toc:u};function g(e){var n=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"In this step we're going to extend the server implementation so that it can authenticate itself\nto the Forge platform, and generate access tokens for various needs."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'It is a good practice to generate an "internal" token with more capabilities (for example,\nallowing the owner to create or delete files in the Data Management service) that will only be used\nby the server, and a "public" token with fewer capabilities that can be safely shared with\nthe client-side logic.'))),(0,o.kt)("h2",{id:"token-management"},"Token management"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgeService.cs")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Models")," subfolder. That is where we will be implementing\nall the Forge-specific logic that will be used in different areas of our server application. Let's\nstart by adding the following code to the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.cs"',title:'"Models/ForgeService.cs"'},'using System;\nusing System.Collections.Generic;\nusing System.IO;\nusing System.Threading.Tasks;\nusing Autodesk.Forge;\nusing Autodesk.Forge.Client;\nusing Autodesk.Forge.Model;\n\npublic record Token(string AccessToken, DateTime ExpiresAt);\n\npublic class ForgeService\n{\n    private readonly string _clientId;\n    private readonly string _clientSecret;\n    private Token _internalTokenCache;\n    private Token _publicTokenCache;\n\n    public ForgeService(string clientId, string clientSecret, string bucket = null)\n    {\n        _clientId = clientId;\n        _clientSecret = clientSecret;\n    }\n\n    private async Task<Token> GetToken(Scope[] scopes)\n    {\n        dynamic auth = await new TwoLeggedApi().AuthenticateAsync(_clientId, _clientSecret, "client_credentials", scopes);\n        return new Token(auth.access_token, DateTime.UtcNow.AddSeconds(auth.expires_in));\n    }\n\n    public async Task<Token> GetPublicToken()\n    {\n        if (_publicTokenCache == null || _publicTokenCache.ExpiresAt < DateTime.UtcNow)\n            _publicTokenCache = await GetToken(new Scope[] { Scope.ViewablesRead });\n        return _publicTokenCache;\n    }\n\n    private async Task<Token> GetInternalToken()\n    {\n        if (_internalTokenCache == null || _internalTokenCache.ExpiresAt < DateTime.UtcNow)\n            _internalTokenCache = await GetToken(new Scope[] { Scope.BucketCreate, Scope.BucketRead, Scope.DataRead, Scope.DataWrite, Scope.DataCreate });\n        return _internalTokenCache;\n    }\n}\n')),(0,o.kt)("p",null,"The helper class takes the credentials of a Forge application, and creates two authentication clients,\none for internal use (giving us read/write access to the Data Management buckets and objects), and one\nfor public use (only allowing access to the translation outputs from the Model Derivative service),\nand a couple of methods for generating the corresponding tokens for us."),(0,o.kt)("p",null,"Next, let's update our ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file to make a singleton instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgeService")," class\navailable to our server application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var ForgeClientID = Environment.GetEnvironmentVariable("FORGE_CLIENT_ID");\n        var ForgeClientSecret = Environment.GetEnvironmentVariable("FORGE_CLIENT_SECRET");\n        var ForgeBucket = Environment.GetEnvironmentVariable("FORGE_BUCKET"); // Optional\n        if (string.IsNullOrEmpty(ForgeClientID) || string.IsNullOrEmpty(ForgeClientSecret))\n        {\n            throw new ApplicationException("Missing required environment variables FORGE_CLIENT_ID or FORGE_CLIENT_SECRET.");\n        }\n        // highlight-start\n        services.AddSingleton<ForgeService>(new ForgeService(ForgeClientID, ForgeClientSecret, ForgeBucket));\n        // highlight-end\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseHttpsRedirection();\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')),(0,o.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,o.kt)("p",null,"Now let's add a first endpoint to our server. Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthController.cs")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers"),"\nsubfolder with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/AuthController.cs"',title:'"Controllers/AuthController.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Mvc;\n\n[ApiController]\n[Route("api/[controller]")]\npublic class AuthController : ControllerBase\n{\n    public record AccessToken(string access_token, long expires_in);\n\n    private readonly ForgeService _forgeService;\n\n    public AuthController(ForgeService forgeService)\n    {\n        _forgeService = forgeService;\n    }\n\n    [HttpGet("token")]\n    public async Task<AccessToken> GetAccessToken()\n    {\n        var token = await _forgeService.GetPublicToken();\n        return new AccessToken(\n            token.AccessToken,\n            (long)Math.Round((token.ExpiresAt - DateTime.UtcNow).TotalSeconds)\n        );\n    }\n}\n')),(0,o.kt)("p",null,"The controller will receive the instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgeService")," through ASP.NET's\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0"},"Dependency injection"),",\nand it will handle requests to ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/auth/token")," by generating a new access token\nand sending it back to the client as a JSON payload."),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)("p",null,"Let's see if our new server endpoint works. Start the application from Visual Studio,\nand when you navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/token"},"http://localhost:8080/api/auth/token"),",\nthe server should respond with a JSON object containing the access token data."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Server Response",src:t(3430).Z,width:"1197",height:"825"})))}g.isMDXComponent=!0},3430:function(e,n,t){n.Z=t.p+"assets/images/auth-response-b5ce1704ad4b4bb8dfa643abeba62678.png"}}]);