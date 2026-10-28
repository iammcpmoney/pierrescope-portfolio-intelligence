# Publishing and Transfer Guide

This folder is a portable static showcase and case study. It contains no operational app database or credentials. Review the contents before copying or publishing.

## Hosting choices

The export is a static website: `index.html`, `styles.css`, `app.js`, and the `assets` folder. GitHub Pages is the recommended route when the public case study is in GitHub. A standard website host can serve the same files from its web root. Neither option needs Node.js; `server.js` is only for local preview.

### GitHub Pages (recommended)

Push the export contents to the repository’s `main` branch, then select **Settings → Pages → Deploy from a branch → main → /(root)**. The paths are relative so the project site works under the repository URL.

### Ordinary static website hosting

Upload the **contents** of the export folder so `index.html` is at the host’s web root (often named `public_html`, `www`, or `htdocs`). Keep `assets/`, `styles.css`, and `app.js` in their relative locations. Do not upload only the ZIP or place the entire folder one level below the configured web root unless that folder is the domain’s document root. No Node.js process is required.

## On the source machine: create the GitHub-ready package

1. Keep the export folder and its companion ZIP together. Do not copy files from the parent operational app.
2. Review README.md and CONVERSATION_SUMMARY.md.
3. Use the proposed repository name pierrescope-portfolio-intelligence.
4. Create the GitHub repository as an empty public repository. Do not generate a README, license, or .gitignore there; this package already includes them.
5. Do not publish until the content and synthetic-data checks in the README have been reviewed.

## On the new machine

1. Copy pierrescope-showcase-export.zip to the machine and extract it.
2. Review README.md, CONVERSATION_SUMMARY.md, and this guide. Confirm the files are the intended showcase only.
3. Install Git if it is not already available. Create an empty public repository named pierrescope-portfolio-intelligence under your GitHub account.
4. Open a terminal in the extracted folder. Initialize the repository and push the files, replacing YOUR_GITHUB_USERNAME with your account name:

       git init
       git branch -M main
       git add .
       git commit -m "Prepare PierreScope portfolio intelligence showcase"
       git remote add origin https://github.com/YOUR_GITHUB_USERNAME/pierrescope-portfolio-intelligence.git
       git push -u origin main

5. In GitHub, open repository Settings, then Pages. Choose Deploy from a branch, select main and /(root), and save. GitHub Pages will publish the root index.html and its relative assets.
6. Wait for the Pages deployment to complete. The project-site URL will be:

       https://YOUR_GITHUB_USERNAME.github.io/pierrescope-portfolio-intelligence/

7. Open the HTTPS URL in a private or clean browser window. Verify all four sections, the 12-month chart, one-pager link, screenshots, and saved AI example evidence.
8. Replace the URL placeholders in README.md and LINKEDIN_POST.md with the final GitHub repository and Pages links. Commit and push that update.
9. Add the one-pager and both links to your LinkedIn profile. Publish the post draft after confirming the links work.

## Optional local preview

If Node.js is installed, run node server.js from the extracted folder and open http://127.0.0.1:3210/. This local server is only for preview; GitHub Pages serves the static files directly.

## What gets exposed

The public repository and hosted demo expose the limited showcase HTML, CSS, JavaScript, diagrams, screenshots, and sample data. Do not add operational app files, databases, credentials, real work records, or proprietary prompts and implementation logic. GitHub Pages does not hide browser-delivered code.



