const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();
const PORT = process.env.PORT || 4000;
app.get("/scrape", (req, res) => {
  try {
        scrapeLogic(res);
  } catch {
    res.status(500).json({ error: "Failed to scrape data" });
  }
});
app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
