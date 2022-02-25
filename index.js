var http = require("http");
const jokeApi = require("./joke-api");
console.log("jokeApi", jokeApi);

//create a server object:
http
  .createServer(async function (req, res) {
    console.log("s0");
    res.write("Hello World!"); //write a response to the client
    console.log("s1");
    res.write("\njokeApi get with Any => " + (await jokeApi.getPromise("Any")));
    res.write(
      "\njokeApi get with Programming => " +
        (await jokeApi.getPromise("Programming"))
    );
    jokeApi.get("Any", function (data) {
      console.log("data", data);
      res.write(data);
      res.end(); //end the response
    });
    // res.end();
    console.log("s2");
    // res.end(); //end the response
    console.log("end");
  })
  .listen(8080); //the server object listens on port 8080
