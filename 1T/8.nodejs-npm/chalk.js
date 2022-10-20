 import chalk from 'chalk'
 import { faker } from '@faker-js/faker';

const randomName = faker.name.fullName(); 
const randomColor = faker.color.rgb();
console.log(chalk.hex(randomColor) (randomName));
