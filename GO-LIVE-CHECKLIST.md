# Required when hosted
NODE_ENV=production
APP_URL=https://your-job-club-portal.onrender.com
ADMIN_EMAIL=you@example.com
ADMIN_PASSWORD=change-this-before-going-live

# Render can create this automatically if you use render.yaml
DATABASE_URL=postgres://user:password@host:5432/database

# Optional: real email sending
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=you@example.com
SMTP_PASS=your-email-password-or-api-key
EMAIL_FROM="Job Club <you@example.com>"

# Optional: S3-compatible private CV storage
S3_BUCKET=your-private-bucket
S3_REGION=eu-west-2
S3_ENDPOINT=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
S3_FORCE_PATH_STYLE=false
S3_SERVER_SIDE_ENCRYPTION=AES256

# Optional upload limit, default is 10 MB
MAX_UPLOAD_BYTES=10485760
