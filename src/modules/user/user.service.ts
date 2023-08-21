import { PrismaClient, Profile, User } from '@prisma/client';

const prisma = new PrismaClient();

const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};
const insertProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      UserId: data.UserId,
    },
  });

  const result = await prisma.profile.create({
    data,
  });
  return result;
};
const updateProfile = async (data: Profile) => {
  const result = await prisma.profile.update({
    where: { UserId: data.UserId },
    data: data,
  });

  return result;
};

const getUsers = async () => {
  // const result = await prisma.user.findMany({
  //   select: {
  //     profile: true,
  //   },
  // });
  // console.log('yoo bro', result);
  const result = await prisma.$queryRaw`select * from users`;
  return result;
};
const getSingleUsers = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
  console.log('yoo bro', result);
  return result;
};

export const UserService = {
  insertIntoDB,
  insertProfile,
  updateProfile,
  getUsers,
  getSingleUsers,
};
