import { Publisher, Subjects, OrderCreatedEvent } from '@vb_tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
