import { Comment } from "src/entities/comment.entity";
import { Download } from "src/entities/download.entity";
import { Faq } from "src/entities/faq.entity";
import { PaymentMethod } from "src/entities/payment.method.entity";
import { Request } from "src/entities/request.entity";
import { Subscription } from "src/entities/subscription.entity";
import { Template } from "src/entities/template.entity";
import { User } from "src/entities/user.entity";
import { UserQuestion } from "src/entities/userquestion.entity";
import { Wishlist } from "src/entities/wishlist.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config : PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aiub',
    database: 'awt',
    entities: [User, Template,Subscription, PaymentMethod,Faq,UserQuestion,Download,Request,Comment, Wishlist],
    synchronize: true
}

export default config;