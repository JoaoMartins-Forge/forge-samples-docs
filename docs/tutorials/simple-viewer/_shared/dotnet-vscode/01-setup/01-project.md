Create a new folder for your project, navigate to it in the command line, and initialize a new
ASP.NET Core project:

```bash
dotnet new web
```

Next we will need to install the dependencies. In this case it will just be the
[Forge SDK](https://www.nuget.org/packages/Autodesk.Forge):

```bash
dotnet add package Autodesk.Forge
```

The `*.csproj` file in your project should now look similar to this (possibly with
slightly different version numbers, and additional .NET settings):

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Autodesk.Forge" Version="1.9.0" />
  </ItemGroup>

</Project>

```

Finally, let's create a couple more subfolders in your project folder that we're going to need later:

- `Controllers` - this is where we're going to implement all the server endpoints
- `Models` - here we're going to keep all the server-side logic that can be shared by different endpoints
- `wwwroot` - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)

### Application config

When the `dotnet` utility bootstrapped your application, it generated random port numbers
for its HTTP and HTTPS addresses. Let's change those to specific port numbers (8080 for HTTP,
and 8081 for HTTPS) that we will use throughout this tutorial.

Open the `launchSettings.json` file under the `Properties` folder, and set the `applicationUrl`
property to `https://localhost:8081;http://localhost:8080`.

![Launch Config](launch-config.png)