import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { newsContext } from '../NewsContext'
import { CardsLayout } from './CardsLayout';

export default function Cards(props) {

    const [news] = useContext(newsContext);

    return (
        <div className='w-full h-screen flex mt-10 justify-evenly gap-5 flex-wrap'>
            {news.map((noticias, index) => {
                return (<motion.div key={index} className='font-sans rounded-xl w-2/5 h-2/5'>
                    <CardsLayout title={noticias.title} author={noticias.author} date={noticias.publishedAt} url={noticias.url} img={noticias.urlToImage}></CardsLayout>
                </motion.div>)
            })}
        </div>
    )
}