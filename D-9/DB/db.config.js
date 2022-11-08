const envConfig = require('../config');
const firebaseConfig = require('./firebase/firebase.config.json');

module.exports = {
  file: { // Esta opcion es solo de demostracion
    users: './data/users.json',
    products: './data/products.json'
  },
  mongodb: {
    uri: `mongodb+srv://nahuelotero:${envConfig.DB_PASSWORD}@nahuelotero.yd8rcag.mongodb.net/nahuel?retryWrites=true&w=majority`
  },
  firebase: {
    credentials: firebaseConfig
  },
}