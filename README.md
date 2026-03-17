<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/ed05cc42-b6cf-4fb1-8a32-7a7ce8cdc3a8

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## GitHub Repository Setup & Deployment

1. **Environment Setup (.gitignore):** 
   A robust `.gitignore` file has been added to prevent unnecessary files such as `node_modules`, build artifacts (`dist`), logs, temporary editor configurations (`.vscode`, `.idea`), and secret environment files (`.env*`) from being tracked by Git.

2. **GitHub Actions Deployment:**
   A GitHub Action has been configured (`.github/workflows/deploy.yml`) to automatically build and deploy this Vite project to GitHub Pages every time you push to the `main` branch. 
   - To utilize this, ensure your repository has **GitHub Pages** enabled via **Settings > Pages > Build and deployment > Source** and select **GitHub Actions**.

3. **Verify Local Build:**
   You can verify the production build locally before pushing via:
   ```bash
   npm run build
   npm run preview
   ```
