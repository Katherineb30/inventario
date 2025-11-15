/* importamos al framework express */
import express from "express"; 
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js";

/* le asigno mi express que importe a mi constante app */
/* asignamos a app toda funcionalidad para mi server web */
const app = express();

/* setear un puerto a mi web server */
app.set("port", 5000)

app.use(cors());
/* rutas - routes */
app.use("/api/categorias", categoriaRoutes)

/* exportamos app para usarla en otros archivos */
/* hacemos disponible a mi server app para toda la aplicación */
export default app;