import { Subjects, Publisher, OrderCancelledEvent } from '@vb_tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
