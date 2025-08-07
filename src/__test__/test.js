import healthBar, { sortByHealth } from '../health_bar';

test('healthBar test', () => {
  const myObject = { name: 'Маг', health: 90 };
  const result = healthBar(myObject);

  expect(result).toBe('healthy');
});

test('healthBar test', () => {
  const myObject = { name: 'Воин', health: 38 };
  const result = healthBar(myObject);

  expect(result).toBe('wounded');
});

test('healthBar test', () => {
  const myObject = { name: 'Лучник', health: 10 };
  const result = healthBar(myObject);

  expect(result).toBe('critical');
});

test('sortByHealth test', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortByHealth(input);

  expect(result).toEqual(expected);
});
