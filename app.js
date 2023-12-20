const express = require("express");
const db = require("./database")
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(express.json());

db.sequelize.sync();

const userRouter = require("./routers/user.router");
const contactRouter = require("./routers/contact.router");

app.use("/user", userRouter);
app.use("/contact", contactRouter);

console.log("process.env.PORT", process.env.PORT)

app.listen(process.env.PORT, () => {
    console.log(`Application is listening at ${process.env.PORT}`);
});