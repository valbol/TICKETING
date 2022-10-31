import { PaymentCreatedEvent, Publisher, Subjects } from '@vb_tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
