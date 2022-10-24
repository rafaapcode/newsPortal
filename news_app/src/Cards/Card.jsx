import React from 'react';
import { motion } from 'framer-motion';

export default function Card(props) {
    return (
        <div className='w-full h-screen bg-slate-500 flex mt-10 justify-evenly gap-5 flex-wrap'>
            <motion.div className='w-2/5 h-2/5 bg-sky-100'>
                <h1>Olá</h1>
            </motion.div>
            <motion.div className='w-2/5 h-2/5 bg-sky-100'>
                <h1>Olá</h1>
            </motion.div>
            <motion.div className='w-2/5 h-2/5 bg-sky-100'>
                <h1>Olá</h1>
            </motion.div>
            <motion.div className='w-2/5 h-2/5 bg-sky-100'>
                <h1>Olá</h1>
            </motion.div>
        </div>
    )
}