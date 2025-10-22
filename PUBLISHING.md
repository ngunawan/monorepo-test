# Publishing @ngunawan/ui to GitHub Packages

## Prerequisites

1. **GitHub Personal Access Token**: Create a classic token with `write:packages` permission
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token with `write:packages` and `read:packages` scopes

2. **Authenticate with npm**: 
   ```bash
   npm login --scope=@ngunawan --auth-type=legacy --registry=https://npm.pkg.github.com
   ```
   - Username: your GitHub username
   - Password: your personal access token
   - Email: your GitHub email

## Manual Publishing Steps

1. **Build the package**:
   ```bash
   pnpm --filter @ngunawan/ui build
   ```

2. **Publish the package**:
   ```bash
   # From the root of the monorepo
   pnpm publish:ui
   
   # Or from the packages/ui directory
   cd packages/ui
   pnpm publish
   ```

## Automated Publishing

The GitHub Actions workflow in `.github/workflows/publish-ui.yml` will automatically publish when:
- You push changes to the `packages/ui/` directory on the `main` branch
- The package version in `package.json` is different from the published version

## Installing the Published Package

Once published, you can install it in other projects:

```bash
# First, configure npm to use GitHub Packages for @ngunawan scope
echo "@ngunawan:registry=https://npm.pkg.github.com" >> ~/.npmrc

# Then install
npm install @ngunawan/ui
```

## Version Management

To publish a new version:
1. Update the version in `packages/ui/package.json`
2. Commit and push to trigger automatic publishing
3. Or run the manual publishing steps above

## Troubleshooting

- Make sure your GitHub token has the `write:packages` permission
- Ensure you're authenticated to the GitHub npm registry
- Check that the package name matches your GitHub username/organization
- Verify the `.npmrc` configuration is correct