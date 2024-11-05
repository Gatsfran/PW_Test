import {Injectable} from '@nestjs/common';
import {CreateTicketDto} from "./dto/create-ticket.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Ticket} from "./ticket.model";

@Injectable()
export class TicketService {

    constructor(@InjectModel(Ticket) private ticketRepository: typeof Ticket) {
    }

    async create(dto: CreateTicketDto) {
        const ticket = await this.ticketRepository.create(dto);
        return ticket;

    }
}
