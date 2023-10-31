const multerConfig = require("./multerConfig"); 
const multerS3 = require('multer-s3')
const crypto = require('crypto-js')
const multer = require('multer')
const aws = require('aws-sdk')
require('dotenv').config()

aws.config.update({
    accessKeyId: process.env.accessKeyIdAws,
    secretAccessKey: process.env.secretAccessKeyAws,
    region: 'us-east-2',
});

const upload = multer({
    storage: multerS3({
        s3: new aws.S3(),
        bucket: process.env.bucketAws,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        
        key: (req, file, callback) => {
            crypto.randomBytes(16, (err, hash) => {
              if (err) callback(err);
              const fileName = `uploads/${hash.toString("hex")}-${file.originalname}`;
              callback(null, fileName);
            });
        },

        //! Saving Files locally
        // local: multer.diskStorage({
        //     destination: (req, file, callback) => {
        //         callback(null, path.resove(__dirname, "..", "..", "tmp", "uploads"))
        //     },
        //     filename: (req, file, callback) => {
        //         crypto.ranbomBytes(16, (err, hash) => {
        //             if (err)
        //                 callback(err)

        //             file.key = `${hash}-${file.originalname}.${file.mimetype}`

        //             callback(null, file.key);
        //         })
        //     }
        // }),

        limits: {
            fileSize: multerConfig.fileSize["5mb"]
        }
    })
})