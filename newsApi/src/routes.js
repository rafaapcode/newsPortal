import Router from 'express';
import News from './controller/News';
import FavoriteNews from './controller/FavoriteNews';

const newRouter = new Router();

newRouter.get('/', News.getNews);
newRouter.post('/', FavoriteNews.createNews);
newRouter.get('/favoriteAll', FavoriteNews.getAllNews);
newRouter.delete('/:id', FavoriteNews.deleteNews);


export default newRouter;