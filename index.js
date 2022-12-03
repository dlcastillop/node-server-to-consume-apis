const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
// Set a port
const PORT = 8000;
// Set the API URL
const URL = "https://some-api-url";

app.use(cors());

// Define your endpoint
app.get("/endpoint", (req, res) => {
  // Set the options to consume the API: method, url, headers, etc.
  const options = {
    method: "GET",
    url: URL,
    headers: {},
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
