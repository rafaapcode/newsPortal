import dotenv from 'dotenv';

dotenv.config();

export async function news(req, res) {
    try {
        const { language, subject } = req.query;
        const BASE_URL = `https://newsapi.org/v2/everything?language=${language}&q=${subject}`;

        const requests = new Request(BASE_URL, {
            headers: new Headers({ 'X-Api-Key': `${process.env.API_KEY}` })
        });

        const news = await fetch(requests).then(res => res.json());

        if (news.status === 'error') {
            return res.status(400).json({ message: 'News not found.' })
        }

        const newsfilter = news['articles'].map(({ author, title, url, urlToImage, publishedAt }) => {
            if (!author) {
                author = 'Unknown';
            }
            return { author, title, url, urlToImage, publishedAt: publishedAt.slice(0,10) };
        })

        res.json(newsfilter);
    } catch (error) {
        return res.status(400).json({ message: 'News not found.' });
    }
}