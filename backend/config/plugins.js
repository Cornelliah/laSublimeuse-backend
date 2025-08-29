module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', '01857bca5c60daa172abd1e41b9ba9c59e6d048bde290c06ff2aba6ce235fda1'),
    },
  },
});
