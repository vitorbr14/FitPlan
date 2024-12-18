// firebase.ts
import * as admin from "firebase-admin";
var serviceAccount = require("../src/firebasekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin;
