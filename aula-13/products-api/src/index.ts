import { createConnection } from "typeorm";
import app from "./app";

createConnection().then(async () => {
    app.listen(3000, () => console.log('Server started at port 3000'));
}).catch(error => console.log(error));