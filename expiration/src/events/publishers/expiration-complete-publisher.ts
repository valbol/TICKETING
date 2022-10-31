import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@vb_tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
