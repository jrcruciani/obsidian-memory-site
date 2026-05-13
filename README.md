# Obsidian Memory site

Static marketing site for the Obsidian Memory for AI project, currently framed around the stable v3.0 Atomic Markdown Memory core and the v3.1 agentic hardening additions from `Jrcruciani/obsidian-memory-for-ai`.

## Structure

- `index.html`
- `favicon.svg`
- `css/styles.css`
- `js/app.js`

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

The production site is served by Cloudflare Pages:

- `https://agentmemory.site`
- `https://obsidian-memory-site.pages.dev/`

Preferred deployment is through the GitHub-connected Cloudflare Pages project. If that integration is not available, deploy this folder manually to the Cloudflare Pages project.
