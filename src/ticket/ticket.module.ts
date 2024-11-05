import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Ticket} from "./ticket.model";

@Module({
  providers: [TicketService],
  controllers: [TicketController],
  imports:[
    SequelizeModule.forFeature([User, Ticket ]),

  ]
})
export class TicketModule {}
