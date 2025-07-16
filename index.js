const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const anomalies = [
  { id: 1, property: "Villa Rosa", type: "Expense Spike", urgency: "High", description: "€1,340 this month (↑48%)" },
  { id: 2, property: "Building Max", type: "Yield Drop", urgency: "Medium", description: "Yield dropped 12% this month" },
];

const properties = [
  { id: 1, name: "Green Apt 3B", leaseEndDays: 11, location: "Larnaca" },
  { id: 2, name: "Villa Rosa", leaseEndDays: 90, location: "Nicosia" },
];

app.get("/anomalies", (req, res) => {
  res.json({ anomalies });
});

app.get("/properties", (req, res) => {
  res.json({ properties });
});

app.use("/.well-known", express.static(path.join(__dirname, "well-known")));
app.use("/", express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`✅ Property AI Plugin server running at http://localhost:${port}`);
});
