import Team from '../app';

test('Throw error', () => {
  const team = new Team();
  const character = {
    name: 'Character',
    type: 'Swordman',
    health: 50,
    level: 2,
    attack: 20,
    defence: 20,
  };

  team.add(character);

  const result = Error('Already on the team');

  expect(() => team.add(character)).toThrow(result);
});

test('Add character', () => {
  const team = new Team();
  const character = {
    name: 'Character',
    type: 'Swordman',
    health: 50,
    level: 2,
    attack: 20,
    defence: 20,
  };

  team.add(character);

  const result = new Set([
    {
      name: 'Character',
      type: 'Swordman',
      health: 50,
      level: 2,
      attack: 20,
      defence: 20,
    },
  ]);

  expect(team.characters).toEqual(result);
});

test('convert set to array', () => {
  const character = {
    name: 'Character',
    type: 'Swordman',
    health: 50,
    level: 2,
    attack: 20,
    defence: 20,
  };
  const team = new Team();

  team.add(character);

  const result = [character];

  expect(team.toArray()).toEqual(result);
});

test('Return with no double', () => {
  const character1 = {
    name: 'Character',
    type: 'Swordman',
    health: 50,
    level: 2,
    attack: 20,
    defence: 20,
  };
  const character2 = {
    name: 'Character',
    type: 'Swordman',
    health: 50,
    level: 2,
    attack: 20,
    defence: 20,
  };
  const team = new Team();

  team.addAll(character1, character2, character2);

  const result = [character1, character2];

  expect(team.toArray()).toEqual(result);
});
