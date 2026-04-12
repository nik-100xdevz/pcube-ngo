# pcube-ngo

## Local development

```bash
cd "/c/Users/Ram/Desktop/pcube/P-cube/latest/project (1)/pcube-foundation"
npm install
npm run dev
```

Vite will print the local URL (for example: `http://localhost:5175/`). Open that in your browser.

## Build

```bash
cd "/c/Users/Ram/Desktop/pcube/P-cube/latest/project (1)/pcube-foundation"
npm run build
```

Build output is generated at `dist/public`.

## Deploy to Vercel

This app is a Vite SPA. The repo includes `vercel.json` with the correct output directory and SPA routing.

Recommended Vercel settings:

- Framework preset: **Vite** (or **Other** if not detected)
- Root directory: **pcube-foundation**
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist/public`

If you deploy from the Vercel UI, just point it at the `pcube-foundation` folder and confirm the settings above.
