import { User } from "src/entities/user.entity";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import { Comment } from "src/entities/comment.entity";
import { Request } from "src/entities/request.entity";
import { Wishlist } from "src/entities/wishlist.entity";
import { Template } from "src/entities/template.entity";

const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: 'aiub',
    entities: [User,Comment,Request, Wishlist, Template],
    synchronize: true
}

export default config;