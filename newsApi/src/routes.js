import Router from 'express';
import { news } from './controller/News';

const newRouter = new Router();

newRouter.get('/', news);

export default newRouter;