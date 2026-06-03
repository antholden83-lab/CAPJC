# Job Club Portal

This is the Job Club admin and member portal.

## Local link

When running on this computer, open:

`http://localhost:4174`

This local link only works on this computer.

## Live link

The live link is created by the hosting service after deployment.

If using Render, it will look something like:

`https://job-club-portal.onrender.com`

Put that address into the `APP_URL` environment variable on Render. The admin dashboard will then show the same link as the client sign-up link.

## Local admin login

Email:

`admin@jobclub.local`

Password:

`ChangeMe123!`

Change this before using the app with real people.

## Deploy Summary

1. Create a GitHub repository.
2. Add the contents of this folder.
3. In Render, create a new Blueprint from the repository.
4. Render reads `render.yaml` and creates the web service plus PostgreSQL database.
5. Add environment variables:
   - `APP_URL`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - SMTP settings for real email
   - S3 settings for private CV storage
6. Deploy.
7. Send clients the live `APP_URL`.

More detail is in `GO-LIVE-CHECKLIST.md`.
