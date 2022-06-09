const express = require("express");
const app = express();

const ipAdd = {};
app.use("/", (req, res) => {
  if (!ipAdd[req.ip]) 
  {
    ipAdd[req.ip] = {
      count: 0,
      time: Date.now(),
    };
    return res.status(201).send({ Data: "Data" });
  } 
  else 
  {
    if (Date.now() - ipAdd[req.ip].time > 60 * 1000) 
    {
      ipAdd[req.ip] = {
        count: 0,
        time: Date.now(),
      };
      return res.status(201).send({ Data: "Data" });
    } 
    else 
    {
      if (ipAdd[req.ip].count >= 10) 
      {
        const time = 60 - (Date.now() - ipAdd[req.ip].time) / 1000;
        const message = `Limit reached. Please try again after ${time} seconds`;
        return res.status(500).send({ message });
      } 
      else 
      {
        ipAdd[req.ip].count++;
        const { count } = ipAdd[req.ip];
        const message = `You have ${10 - count} requests left`;
        return res.status(201).send({ Data: "Data", message });
      }
    }
  }
});

app.listen(8080, () => {
  console.log("Listening on Port 8080...");
});