# Moving lauraoterophd.com from Squarespace to GitHub Pages

This is the full walkthrough for getting your site live on GitHub Pages (free) and pointing your existing domain at it, then safely cancelling the Squarespace website plan.

**Keep your domain registered at Squarespace Domains** — you're only cancelling the *website hosting* plan, not the domain itself. That's where the monthly savings come from; the domain renewal (usually ~$20/year) stays as-is unless you later decide to move the domain elsewhere too.

---

## Before you start

- [x] Real headshot photo in place at `assets/laura-otero-headshot.jpg`
- [x] All 4 featured videos wired in, plus 2 new eLearning samples, Driftwood Dominion, and 2 self-hosted Rise lessons
- [ ] A free [GitHub](https://github.com/join) account (you'll create this yourself — sign-ups require your own email/password)

---

## Step 1 — Create the GitHub repository

1. Log into GitHub and click the **+** in the top right → **New repository**.
2. Name it something like `lauraoterophd-site`. Set it to **Public** (required for free GitHub Pages). Don't initialize with a README (you already have one).
3. Click **Create repository**.
4. On the empty repo page, use **uploading an existing file** (or drag-and-drop) to upload every file from this folder — including the `assets` subfolder, the `CNAME` file, and the `.nojekyll` file. GitHub's web uploader supports dragging a whole folder in Chrome/Edge.
5. Commit the upload to the `main` branch.

*(If you're comfortable with git/command line instead, that works too — clone the empty repo, copy the files in, `git add . && git commit -m "Initial site" && git push`.)*

---

## Step 2 — Turn on GitHub Pages

1. In your repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
3. Under **Custom domain**, type `www.lauraoterophd.com` and save. GitHub will pick up the `CNAME` file already in your repo.
4. GitHub will show a DNS check that fails for now — that's expected until Step 3 is done.

---

## Step 3 — Update DNS at Squarespace Domains

1. Go to your [Squarespace domains dashboard](https://account.squarespace.com/domains) and select **lauraoterophd.com**.
2. Open **DNS Settings** (sometimes labeled **Advanced DNS Settings**).
3. You'll see existing records pointing the site at Squarespace's own servers — you're going to replace those, not add to them.

**Remove or edit:**
- Any existing **A records** on the root/apex (`@`) that point to Squarespace's hosting IPs.
- Any existing **CNAME record** for `www` that points to Squarespace (often `ext-cust.squarespace.com` or similar).

**Add these instead:**

| Type | Host | Points to |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<your-github-username>.github.io` |

(All four A records are needed — add them as four separate rows. Replace `<your-github-username>` with your actual GitHub username, not the repo name.)

4. Save. DNS changes typically take a few hours to propagate, sometimes up to 24–48 hours.

---

## Step 4 — Verify and lock in HTTPS

1. Back in GitHub **Settings → Pages**, wait for the DNS check to go green (refresh occasionally — no need to keep the tab open).
2. Once it's green, check the **Enforce HTTPS** box. This can take up to 24 hours to become available after DNS verifies.
3. Visit `https://www.lauraoterophd.com` in a private/incognito window to confirm the new site loads instead of the old Squarespace one.
4. Click through all three pages (Home, Portfolio, Contact) and test the video embeds and the contact email link.

---

## Step 5 — Cancel the Squarespace website plan

**Only do this after Step 4 is fully confirmed working** — don't cancel while DNS is still propagating, in case you need to roll back.

1. In Squarespace, go to **Billing & Account → Subscriptions**.
2. Cancel the **website/commerce plan** (not the domain).
3. Confirm your domain (`lauraoterophd.com`) still shows as active under **Domains** — separate from the website plan.

That's it — the domain keeps working, DNS now points at GitHub Pages instead of Squarespace, and the monthly website bill goes away.

---

## Notes on what changed from the old site

- **Contact form → email link.** GitHub Pages can only serve static files, so the old Squarespace contact form (which emailed you submissions) is replaced with a simple "Email Laura" link — same address you've always used (`laura.lark.otero@gmail.com`).
- **Videos → YouTube embeds.** Two of the four portfolio videos were already on YouTube; the other two needed to be uploaded there as well, since GitHub Pages can't stream large video files the way Squarespace's media CDN did.
- **Design.** This is a fresh, modern layout rather than a pixel copy of the old Squarespace theme, per your preference — same content and structure, cleaner presentation.

## If something goes wrong

DNS changes are reversible — if anything looks broken, you can revert the A/CNAME records at Squarespace back to their original values (screenshot them before changing, just in case) and the old Squarespace site will resume working within a few hours while you troubleshoot.
