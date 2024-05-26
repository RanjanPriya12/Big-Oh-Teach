const express = require("express");
const formRouter = require("./src/routes/form.route");
const formDataRouter = require("./src/routes/formData.route");

const app = express();
require('dotenv').config();
app.use(express.json());

app.use("api/v1/form/", formRouter);
app.use("api/v1/fill_data/", formDataRouter);

const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`Express Server is running on port : ${port}`);
});
