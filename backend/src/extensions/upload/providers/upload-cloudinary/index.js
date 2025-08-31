'use strict';

const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

module.exports = {
  init(config) {
    cloudinary.config({
      cloud_name: config.cloud_name,
      api_key: config.api_key,
      api_secret: config.api_secret,
    });

    return {
      async upload(file) {
        return new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              folder: 'strapi-uploads', 
              resource_type: 'image',
            },
            async (err, result) => {
              if (err) {
                return reject(err);
              }

              file.url = result.secure_url;

              file.formats = {
                thumbnail: {
                  url: cloudinary.url(result.public_id, { width: 200, height: 200, crop: 'fill' }),
                },
                small: {
                  url: cloudinary.url(result.public_id, { width: 500, height: 500, crop: 'fill' }),
                },
                medium: {
                  url: cloudinary.url(result.public_id, { width: 750, height: 750, crop: 'fill' }),
                },
                large: {
                  url: cloudinary.url(result.public_id, { width: 1000, height: 1000, crop: 'fill' }),
                },
              };

              resolve();
            }
          );

          streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
      },

      async delete(file) {
        try {
          await cloudinary.uploader.destroy(file.hash, {
            resource_type: 'image',
          });
        } catch (err) {
          throw err;
        }
      },
    };
  },
};
