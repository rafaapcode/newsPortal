import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import dotenv from 'dotenv';

dotenv.config();

export default class FavoriteNews {
    static async createNews(req, res) {
        const newFavoriteNews = await prisma.favoriteNews.create({ data: req.body });

        res.json({ message: 'News saved with success !!' });
    }

    static async getAllNews(req, res) {
        const allFavoriteNews = await prisma.favoriteNews.findMany({});

        res.json(allFavoriteNews);
    }

    static async deleteNews(req, res) {
            await prisma.favoriteNews.delete({
                where: { id: req.params.id }
            });

        res.json({ message: 'Deleted with Success !!' });
    }
}