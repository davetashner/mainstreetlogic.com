
# Main Street Logic LLC Site

This is a static React site for **Main Street Logic LLC**, intended to be deployed on S3.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000 to view the site.

## Build and Deploy

```bash
npm run build
aws s3 sync dist/ s3://mainstreetlogic.com --delete
```

Make sure your bucket has static website hosting enabled and both `index.html` and error document set to `index.html`.
