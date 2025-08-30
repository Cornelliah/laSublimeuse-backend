module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env(
        'JWT_SECRET',
        '01857bca5c60daa172abd1e41b9ba9c59e6d048bde290c06ff2aba6ce235fda1'
      ),
    },
  },

  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {responsive_dimensions: false,},
        delete: {},
      },
     
    },
  },
});

