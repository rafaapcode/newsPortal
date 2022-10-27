import Router from 'express';
import News from './controller/News';

const newRouter = new Router();

newRouter.get('/', News.getNews);
newRouter.post('/favoritenews', News.getNews);
newRouter.get('/favoriteAll', News.getNews);
newRouter.delete('/:id', News.getNews);


export default newRouter;