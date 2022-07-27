const express = require("express");
const app = express();
const port = 3007;
const answer = {
  result: "success",
};
app.get("/", (req, res) => {
  res.send("Done");
});
app.use(express.json());
app.post("/FoodItem/add", async (req, res) => {
  console.log(req.body);
  const data = req.body;

  console.log(result);
  res.send(perfect);
});

app.get("/FoodItem", async (req, res) => {
  console.log(result);
  res.send(result);
});

app.delete("/FoodItem/RemoveFoodItem:id", async (req, res) => {
  console.log(req.params.id);

  console.log(result);
  res.send(result);
});
async function run() {}

app.listen(port, async () => {
  run().catch(console.dir);
  console.log(`api is running in the number ${port}`);
});
