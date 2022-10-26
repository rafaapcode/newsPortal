import Router from 'express';
import News from './controller/News';

const newRouter = new Router();

newRouter.get('/', News.getNews);

export default newRouter;