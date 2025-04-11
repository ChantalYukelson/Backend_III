import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export const generateMockPets = (count) => {
  const pets = [];

  for (let i = 0; i < count; i++) {
    pets.push({
      name: faker.animal.cat(),
      specie: faker.animal.type(),
      age: faker.datatype.number({ min: 1, max: 15 }),
    });
  }

  return pets;
};

export const generateMockUsers = async (count) => {
  const users = [];
  const hashedPassword = await bcrypt.hash('coder123', 10);

  for (let i = 0; i < count; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
    });
  }

  return users;
};
