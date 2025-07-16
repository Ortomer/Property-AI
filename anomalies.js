export default function handler(req, res) {
  const anomalies = [
    { id: 1, property: "Villa Rosa", type: "Expense Spike", urgency: "High", description: "€1,340 this month (↑48%)" },
    { id: 2, property: "Building Max", type: "Yield Drop", urgency: "Medium", description: "Yield dropped 12% this month" },
  ];
  res.status(200).json({ anomalies });
}
