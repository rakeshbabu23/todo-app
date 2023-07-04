const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://baburakesh2301:rakesh@cluster1.60ohp4j.mongodb.net/todosapp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to db"))
  .catch((e) => console.log("errror in connecting to db"));
