Now that we have a basic ASP.NET application setup, let's try it out. In the command line,
setup the two required environment variables, `FORGE_CLIENT_ID` and `FORGE_CLIENT_SECRET`,
and run the .NET application:

```bash
export FORGE_CLIENT_ID=your-own-forge-client-id
export FORGE_CLIENT_SECRET=your-own-forge-client-secret
dotnet run
```

When you navigate to [https://localhost:8081](https://localhost:8081) in your browser, you should
get a 404 response because we haven't implemented any server logic yet. That's going to be the topic
of the next step.
