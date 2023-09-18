import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
// import ProductRoute from "./routes/productRoutes.js".
import ProductRoutes from "./routes/productRoutes.js"
import SiswaRouter from "./routes/siswaRoutes.js"

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(ProductRoutes);
app.use(SiswaRouter);


app.listen(5000, () => console.log("HOHOHOHO"));