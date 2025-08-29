module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
   app: {
    keys: env.array('APP_KEYS'), 
  },
  config: {
      jwtSecret: env('JWT_SECRET'),
    },
  url: env('PUBLIC_URL', `https://lasublimeuse-backend.onrender.com`), 
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
