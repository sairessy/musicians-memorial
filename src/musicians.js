const ms = [
  { id: 0, name: 'Kurt Cobain', related: [] },
  { id: 1, name: '2Pac Shakur', related: [] },
  { id: 2, name: 'XXXTantation', related: [] },
  { id: 3, name: 'John Lenon', related: [5] },
  { id: 4, name: 'Syd Barret', related: [10] },
  { id: 5, name: 'George Harrison', related: [3] },
  { id: 6, name: 'Pop Smoke', related: [] },
  { id: 7, name: 'Jimi Hendrix', related: [] },
  { id: 8, name: 'Michael Jackson', related: [] },
  { id: 9, name: 'Freddie Mercury', related: [] },
  { id: 10, name: 'Richard Wright', related: [4] },
  { id: 11, name: 'brian Jones', related: [] },
  { id: 12, name: 'Janis Joplin', related: [] },
  { id: 13, name: 'Jim Morrison', related: [] },
  { id: 14, name: 'Amy Winehouse', related: [] },
  { id: 15, name: 'Marie Fredriksson', related: [] },
  { id: 16, name: 'Witney Houston', related: [] },
  { id: 17, name: 'Mick Jones', related: [18, 19] },
  { id: 18, name: 'Paul Simonon', related: [17, 19] },
  { id: 19, name: 'Joe Strummer', related: [17, 18] }
];

module.exports = ms;