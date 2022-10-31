import { Publisher, Subjects, TicketUpdatedEvent } from '@vb_tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
