const { createApp } = require("./app");
const { appDataSource } = require("./src/models/dataSource");

const startServer = async () => {
  try {
    const app = createApp();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, async () => {
      await appDataSource
        .initialize()
        .then(() => {
          console.log("Data Source has been initialized!");
        })
        .catch((error) => {
          console.error("Error during Data Source initialization", error);
        });
      console.log(`Listening to request on 127.0.0.1:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
