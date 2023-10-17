// Inisialisasi
require("dotenv").config();
const express = require("express");
const app = express();

// Inisialisasi PORT
const PORT = process.env.SERVER_PORT || 3030;

// Inisialisasi Routes
const usersRoute = require("./routes/users");

// Inisialisasi Middleware
const middlewareLogRequest = require("./middlewares/logs");
const upload = require("./middlewares/multer");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(middlewareLogRequest);

// agar app dapat menerima data berupa json
app.use(express.json());

// agar app dapat mengakses folder dalam public
// app.use("/assets"), express.static("public/images");

// Route Family
app.use("/users", usersRoute);

// Upload Foto
app.post("/upload", upload.single("pict"), (req, res) => {
  res.json({
    message: "Upload Photo Success",
  });
});

// Test App
// app.get("/", (req, res) => {
//   res.send("Haiiii");
// });

// Untuk menampilkan bahwa server sedang berjalan di port
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
