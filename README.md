# Dilhara Computational and Applied Math Lab (DiCAM Lab) — Lab Website

Website for an undergraduate research group in mathematical modeling and computational science at Northern Kentucky University.

## Put the site online (one time, about 15 minutes)

1. Sign in to GitHub. Click **+ → New organization → Free**, and give it a neutral name, for example `dicam-lab`.
2. In the organization, click **New repository**. Name it exactly `dicam-lab.github.io` (your organization name + `.github.io`), set it to **Public**, and create it.
3. Click **uploading an existing file**. Unzip the website folder on your computer, open it, select **everything inside** (including the hidden `.nojekyll` file if your computer shows it), and drag it onto the GitHub page. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment," choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After 1–2 minutes your site is live at `https://dicam-lab.github.io`.

## Update the content (any time)

All text lives in **one file: `content/site-data.js`**.

1. On GitHub, open `content/site-data.js` and click the **pencil icon** (Edit).
2. Change the text between the quotes. To add a student, project, paper, or news item, copy an existing `{ ... }` block, paste it, and edit it.
3. Click **Commit changes**. The site updates in 1–2 minutes.

Tips:
- Keep the quotes `"..."` and the comma after each item. If a page goes blank after an edit, a missing quote or comma is the usual cause. Use the **History** button to see or undo the last change.
- Lines starting with `//` are notes and are ignored.

## Add photos

1. Open the folder `assets/img/people/` on GitHub and click **Add file → Upload files**.
2. Upload the photo, e.g. `jane-doe.jpg`. Square photos about 600×600 pixels work best.
3. In `content/site-data.js`, set that person's `photo: "jane-doe.jpg"`.

Leave `photo: ""` to show the person's initials instead.

**Before posting student names, photos, or bios, get each student's written permission** (an email is fine), and let them approve their bio.

Project figures work the same way: upload to `assets/img/` and set `image: "file-name.png"` for that project.

## Change the lab name or colors

- **Name:** edit `labName` (full name) and `shortName` (abbreviation) at the top of `content/site-data.js`. Also edit the two text lines in the logo files `assets/img/logo-full.svg` and `logo-full-white.svg`.
- **Colors:** edit the color codes at the top of `assets/css/style.css`.

## Use your own web address (optional)

Buy a domain (for example `dicamlab.org`), then add it under **Settings → Pages → Custom domain** and follow GitHub's instructions for your domain provider.

## Files

| File / folder | What it is |
|---|---|
| `content/site-data.js` | **All page content. Edit this.** |
| `index.html`, `research.html`, `team.html`, `publications.html`, `news.html`, `join.html` | The six pages (no need to edit) |
| `assets/css/style.css` | Colors and layout |
| `assets/js/site.js` | Builds the pages from the content file |
| `assets/img/` | Logos, people photos, project figures |
