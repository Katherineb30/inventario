/* function expression*/
import app from "./app.js";
const main =() => {
    app.listen(app.get("port"));
    console.log(`They company´s web server is running on port ${app.get("port")}`);

}

main();