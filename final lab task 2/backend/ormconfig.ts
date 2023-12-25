import { User } from "src/entities/user.entity";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import { Comment } from "src/entities/comment.entity";


const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: 'aiub',
    entities: [User,Comment],
    synchronize: true
}

export default config;