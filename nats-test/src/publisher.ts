import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

const stan: any = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
}); //? this is our client

//! Event driven architecture, we are listening to connection to be made
stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({ id: '123', title: 'Concert', price: 20 });
  } catch (err) {
    console.log(err);
  }
});
