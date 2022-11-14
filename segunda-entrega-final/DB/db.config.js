const envConfig = require("../config");

module.exports = {
  files: {
    products: "./data/products.json",
    cart: "./data/cart.json",
  },
  mongo: {
    uri: `mongodb+srv://nahuelotero:${envConfig.DB_PASSWORD}@nahuelotero.yd8rcag.mongodb.net/ecommerce?retryWrites=true&w=majority`,
  },
  firebase: {
    credentials: `${envConfig.FIREBASE_CREDENTIALS}`,
  },
};
