import { Publisher, Subjects, TicketCreatedEvent } from '@vb_tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
