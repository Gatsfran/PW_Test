import {Body, Controller, Post} from '@nestjs/common';
import {CreateTicketDto} from "./dto/create-ticket.dto";
import {TicketService} from "./ticket.service";

@Controller('ticket')
export class TicketController {

    constructor(private ticketService: TicketService ) {}

    @Post()
    createTicket(@Body() dto: CreateTicketDto) {
        this.ticketService.create(dto)

    }
}
