const admin = require("firebase-admin");

const serviceAccount = require("../../Firebase.json");

const BUCKET = process.env.BUCKET

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();


const uploadImage = (req, res, next) => {
  if (!req.file) return next();
  console.log("file", req.file)
  console.log("name", req.file.originalname)


  const image = req.file;
  const filename = Date.now() + "_" + image.originalname.split(".").pop()

  const file = bucket.file(filename);

  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype,
    },

  });

  stream.on("error", (e) => {
    console.error(e)
  })

  stream.on("finish", async () => {

    await file.makePublic();
    req.file.firebaseUrl = `https://strage.googleapis.com/${BUCKET}/${filename}`;

    next();

  })

  stream.end(image.buffer)

};

module.exports = uploadImage;