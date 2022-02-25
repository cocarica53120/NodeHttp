const https = require("https");

module.exports = {
  get: function (choice, callback) {
    https.get("https://v2.jokeapi.dev/joke/" + choice, function (res) {
      console.log("test", res.statusCode);
      let result = "";
      res.on("data", (data) => {
        result += data.toString();
      });
      res.on("end", () => {
        console.log(result);
        callback(result);
      });
    });
  },

  getPromise: function (choice) {
    return new Promise((res, rej) => {
      this.get(choice, (data) => {
        res(data);
      });
    });
  }
};
