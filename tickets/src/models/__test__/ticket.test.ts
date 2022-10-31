import { Ticket } from '../tickets';

it('implements optimistic concurrency control', async () => {
  //Create instance of a ticket
  const ticket = Ticket.build({ title: ' concert', price: 5, userId: '123' });

  //Save the ticket to the DB
  await ticket.save();

  // Fetch the ticket twice
  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  // make 2 separate changes to the ticket we fetched
  firstInstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });

  // save the first fetched ticket
  await firstInstance!.save();

  // expect(async () => {
  //   await secondInstance!.save();
  // }).toThrow();

  try {
    await secondInstance!.save();
  } catch (err) {
    return;
  }

  throw new Error('Should not reach this error!!!');
});

it('increments the version number on multiple saves', async () => {
  const ticket = Ticket.build({ title: 'concert', price: 20, userId: '1425' });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
