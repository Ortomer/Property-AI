export default function handler(req, res) {
  const properties = [
    { id: 1, name: "Green Apt 3B", leaseEndDays: 11, location: "Larnaca" },
    { id: 2, name: "Villa Rosa", leaseEndDays: 90, location: "Nicosia" },
  ];
  res.status(200).json({ properties });
}
