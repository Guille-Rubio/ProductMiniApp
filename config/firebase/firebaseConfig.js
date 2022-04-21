var admin = require("firebase-admin");

var serviceAccount = require("./firebase.json");

const BUCKET = "miniapp-aced3.appspot.com"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});


const uploadImage = (req, res, next) => {
  if (req.file) return next();

  const imagen = req.file;
}