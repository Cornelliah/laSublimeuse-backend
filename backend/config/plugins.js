module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env(
        'JWT_SECRET'
      ),
    },
  },

  upload: {
    config: {
      provider: 'upload-cloudinary',
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

