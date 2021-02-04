const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const usersRoutes = require("./routes/users-routes");
const charactersRoutes = require("./routes/characters-routes");
const favsRoutes = require("./routes/favs-routes");

const app = express();
app.use(express.json());
app.use(usersRoutes);
app.use(charactersRoutes);
app.use(favsRoutes);

const connect = async () => {
  try {
    const url = process.env.MONGODB_URI;
    const connexion = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      )
    );
  } catch (err) {
    console.log(err);
  }
};

connect();
