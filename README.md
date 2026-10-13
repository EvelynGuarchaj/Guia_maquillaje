# Glam Diary · Guía de maquillaje

Página estática con looks de maquillaje, hecha con **Vite** y desplegada en un CDN con **Amazon S3 + CloudFront** mediante **GitHub Actions**.

**Sitio:** https://dmjr871jbsbqb.cloudfront.net

## Tecnologías

- Vite (HTML, CSS y JavaScript)
- Amazon S3 (bucket privado)
- Amazon CloudFront (CDN, creado manualmente)
- GitHub Actions (pipeline)

## Correr en local

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # genera dist/
npm run preview   # sirve dist/ en local
```

## Pipeline

Archivo: `.github/workflows/deploy.yml`. Se ejecuta con cada push a `main`:

1. **Build:** `npm run build` genera la carpeta `dist/`.
2. **Upload:** sube `dist/` al bucket de S3 con `aws s3 sync`.
3. **Invalidate:** crea una invalidación en CloudFront (`/*`) para que los cambios se vean de inmediato.

Secrets usados: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET` y `CLOUDFRONT_DISTRIBUTION_ID`.
