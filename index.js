const express = require("express");
const bodyParser = require('body-parser')
const { scrapeLogic } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;


app.use(bodyParser.json()) // Parse json request body
app.post("/scrape", async(req, res) => {
  try {
    let url = "https://waliye.men.gov.ma/moutamadris/Account";
    // let mail = "R130001518@taalim.ma";
    // let password = "130569Akram";
    let year  = (new Date().getFullYear() - 1).toString();
    let round = "2";
    const {email, password} = req.body;
    const message = await scrapeLogic(url, email, password, year, round);
    res.json({ message });
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
