const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let reservations = [];

app.get("/api/reservations", (req, res) => {
  res.json(reservations);
});

app.post("/api/reservations", (req, res) => {
  const newReservation = {
    id: Date.now().toString(),
    ...req.body
  };
  reservations.push(newReservation);
  res.json(newReservation);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running");
});
