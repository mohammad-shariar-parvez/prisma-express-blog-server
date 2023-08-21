import express from 'express';
import { PostController } from './post.controller';

const router = express.Router();

router.get('/', PostController.getAllPostController);
router.get('/learn-aggregate', PostController.learnAggregateController);
router.get('/:id', PostController.getSinglePostController);
router.post('/create-post', PostController.createPostController);
router.patch('/:id', PostController.updatePostController);
router.delete('/:id', PostController.deletePostController);

export const PostRoutes = router;
