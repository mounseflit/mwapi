const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/scrape", (req, res) => {
//   try{
//     const message = scrapeLogic("https://waliye.men.gov.ma/moutamadris/Account", mail, password, year, round);
//     res.json({message})
// }catch{
//     console.error("Error in scraping", error);
//     res.status(500).json({error:"Failed to scrape data"})
// }
  scrapeLogic(res);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
