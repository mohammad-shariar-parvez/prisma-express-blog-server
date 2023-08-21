import { PrismaClient } from '@prisma/client';
import app from './app';

const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

async function main() {
  app.listen(port, () => {
    console.log(`Server runnig at ${port}`);
  });
}
main();

// const postUser = await prisma.user.create({
//   data: {
//     email: 'parvez@gmail.com',
//     name: 'Parvez',
//     age: 45,
//   },
// });
// console.log(postUser);
// const getAllUsers = await prisma.user.findMany();
// console.log(getAllUsers);
