# Allytic Labs Frontend

## Production Image Delivery

The production feature for fast global image loading is a CDN backed image delivery layer.
It has two parts:

1. Static asset CDN: serves built Vite files from edge locations.
2. Image loader CDN: optional resizing/format service that returns AVIF/WebP and width-specific variants.

Set these environment variables in the production host, not only in local development:

```bash
VITE_CDN_URL=https://cdn.yourdomain.com
VITE_IMAGE_LOADER_URL=https://images.yourdomain.com/resize
```

`VITE_CDN_URL` should point to the CDN origin where the contents of `dist/assets` are served.
`VITE_IMAGE_LOADER_URL` should point to an image resizing service that accepts:

```text
?url=<encoded-image-url>&w=<width>&q=<quality>&format=auto
```

If `VITE_IMAGE_LOADER_URL` is not set, images still use the static CDN and browser lazy loading.

## Deployment Checklist

1. Run `npm run build`.
2. Upload or expose `dist/assets` through the CDN domain.
3. Configure CDN cache policy for `/assets/*` as `public, max-age=31536000, immutable`.
4. Configure image loader cache policy to cache transformed images by full query string.
5. In Vercel, keep `vercel.json` headers enabled so hashed assets are cached at the edge.
6. For mainland China delivery, use a CDN with mainland China points of presence and complete any required local compliance steps for your hosting/CDN provider.
