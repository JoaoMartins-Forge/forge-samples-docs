And that's it! Your application is now ready for action. Start it from the command line as usual:

```bash
export FORGE_CLIENT_ID=your-own-forge-client-id
export FORGE_CLIENT_SECRET=your-own-forge-client-secret
export FORGE_BUCKET=optional-custom-bucket-name
dotnet run
```

And then navigate to [https://localhost:8081](https://localhost:8081) in your browser. You should be
presented with a simple UI, with a dropdown in the top-right corner that will eventually get populated
with all models available in your configured bucket, and with a button for uploading new models.
And as soon as you select one of the options from the dropdown, the corresponding model will get loaded
in the viewer occupying the rest of the webpage.

![Final App](./result.png)
