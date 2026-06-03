services:
  - type: web
    name: job-club-portal
    env: node
    plan: starter
    buildCommand: npm install
    startCommand: npm start
    healthCheckPath: /api/health
    envVars:
      - key: NODE_ENV
        value: production
      - key: APP_URL
        sync: false
      - key: ADMIN_EMAIL
        sync: false
      - key: ADMIN_PASSWORD
        sync: false
      - key: DATABASE_URL
        fromDatabase:
          name: job-club-db
          property: connectionString

databases:
  - name: job-club-db
    plan: starter
