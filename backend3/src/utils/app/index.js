import express from "express";

const startApp = () => {
  const app = express();

  app.get("/notes", function (req, res) {
    res.send("Hello World");
  });

  app.listen(3000);

  return app;
};

export default startApp;
