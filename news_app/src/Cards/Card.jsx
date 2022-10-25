import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { newsContext } from '../NewsContext'
import { CardsLayout } from './CardsLayout';
import Error from '../Erro/Error';
import './Cards.css'

export default function Cards(props) {

    const { news: notice, status } = useContext(newsContext);

    const [news] = notice;
    const [done] = status;

    console.log(news.message, done);

    return (
        <div id='container'
            className={done ? 'w-full h-screen flex mt-10 justify-evenly gap-x-5 gap-y-44 flex-wrap'
                : 'hidden'}
        >
            {news.message ? (<Error msg={news.message}></Error>) :
                news.map((noticias, index) => {
                    return (<motion.div key={index} id='containerCard' className='font-sans shadow-md rounded-xl w-2/5 h-fit'>
                        <CardsLayout title={noticias.title} author={noticias.author} date={noticias.publishedAt} url={noticias.url} img={noticias.urlToImage}></CardsLayout>
                    </motion.div>)
                })
            }
        </div>
    )
}