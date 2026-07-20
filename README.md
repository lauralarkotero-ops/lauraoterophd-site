# lauraoterophd.com — static site

A clean, static rebuild of Laura Otero, Ph.D.'s website (originally on Squarespace), ready to host for free on GitHub Pages.

## What's here

- `index.html` — home / bio page
- `portfolio.html` — project portfolio (featured videos + categorized project write-ups)
- `contact.html` — contact page (email + brochure link)
- `assets/style.css` — all site styling
- `assets/laura-otero-headshot.jpg` — Laura's headshot
- `lessons/idmodels/` — self-hosted Articulate Rise lesson: "Review of Instructional Design Models" (IDT 204)
- `lessons/gateways/` — self-hosted Articulate Rise lesson: "Emerging Technologies in the Humanities" (SJSU International Gateways)
- `CNAME` — tells GitHub Pages this site should answer to `www.lauraoterophd.com`
- `.nojekyll` — tells GitHub Pages to serve the files as-is (skip Jekyll processing)

## Before you publish

Everything is content-complete — headshot, all four featured videos, the two new eLearning samples, Driftwood Dominion, and both self-hosted Rise lessons are already in place. Nothing left to swap in before pushing to GitHub, unless you want to add more projects later.

## Publishing to GitHub Pages

See the full step-by-step guide (`MIGRATION_GUIDE.md`) for the complete walkthrough, including the DNS changes at Squarespace. Quick version:

1. Create a new **public** GitHub repository (e.g. `lauraoterophd-site`).
2. Upload all the files in this folder to the repo (keep the folder structure — `assets/` stays a subfolder).
3. In the repo, go to **Settings → Pages**. Under "Build and deployment," source = `Deploy from a branch`, branch = `main`, folder = `/ (root)`.
4. Under "Custom domain," enter `www.lauraoterophd.com` and save (GitHub will detect the `CNAME` file already in the repo).
5. Update your DNS at Squarespace Domains as described in `MIGRATION_GUIDE.md`.
6. Wait for DNS to propagate and the "DNS check" on the Pages settings page to show a green checkmark, then check "Enforce HTTPS."
