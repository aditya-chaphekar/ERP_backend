import {createConnection} from "typeorm";
import path from "path";

try {
    createConnection({
        type: "mysql",
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT, 10),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_NAME,
        entities: [
            path.join(__dirname, '..', '..', '..', 'schemas', 'entity') + '/*{.ts,.js}'
        ],
        synchronize: true,
    })
} catch (e) {
    throw e;
}