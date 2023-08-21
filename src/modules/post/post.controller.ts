import { Request, Response } from 'express';
import { PostService } from './post.service';

const createPostController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.send({
      success: true,
      message: 'Post Created Successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPostController = async (req: Request, res: Response) => {
  const options = req.query;
  // console.log('Query', req.query);

  try {
    const result = await PostService.getPosts(options);
    res.send({
      success: true,
      message: 'Posts Retrived Successfully',
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSinglePostController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getSinglePost(Number(req.params.id));
    res.send({
      succes: true,
      message: 'Post Retrived successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const updatePostController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  try {
    const result = await PostService.updatePost(id, data);
    res.send({
      success: true,
      message: 'Posts Updated Successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const deletePostController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const result = await PostService.deletePost(id);
    res.send({
      success: true,
      message: 'Posts Delete Successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const learnAggregateController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.learnAggregate();
    res.send({
      success: true,
      message: 'learnAggregate Successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPostController,
  getAllPostController,
  getSinglePostController,
  updatePostController,
  deletePostController,
  learnAggregateController,
};
