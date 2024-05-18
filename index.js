const express = require("express");
const morgan = require("morgan"); 
const app = express();

function requestLogger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url} - IP: ${req.ip}`
  );
  next();
}

app.use(morgan("dev")); 
app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
