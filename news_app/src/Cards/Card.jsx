import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { newsContext } from '../NewsContext'
import { CardsLayout } from './CardsLayout';

export default function Cards(props) {

    const { news: notice, status } = useContext(newsContext);

    const [news] = notice;
    const [done] = status;

    return (
        <div
            className={done ? 'w-full h-screen flex mt-10 justify-evenly gap-x-5 gap-y-44 flex-wrap'
            : 'hidden'}
        >
            {news.map((noticias, index) => {
                return (<motion.div key={index} className='font-sans shadow-md rounded-xl w-2/5 h-2/5'>
                    <CardsLayout title={noticias.title} author={noticias.author} date={noticias.publishedAt} url={noticias.url} img={noticias.urlToImage}></CardsLayout>
                </motion.div>)
            })}
        </div>
    )
}