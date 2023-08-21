import { Request, Response } from 'express';
import { UserService } from './user.service';

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDB(req.body);
    res.send({
      succes: true,
      message: 'User Created successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const insertProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertProfile(req.body);
    res.send({
      succes: true,
      message: 'Profile Created successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const updateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.updateProfile(req.body);
    res.send({
      succes: true,
      message: 'Profile Updated successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.send({
      succes: true,
      message: 'Users Retrived successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUsers(Number(req.params.id));
    res.send({
      succes: true,
      message: 'Users Retrived successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  insertIntoDB,
  insertProfile,
  updateProfile,
  getUsers,
  getSingleUsers,
};
