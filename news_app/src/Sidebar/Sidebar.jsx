import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { newsContext } from '../NewsContext';

export default function SideBar() {
    const { sidebar } = useContext(newsContext);
    const [, setIsOpen] = sidebar;


    return (

        <motion.div
            initial={{ opacity: 0, scaleX: 0.2 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='bg-white/20 flex flex-col items-center gap-y-2 rounded-l-xl shadow-2xl backdrop-blur h-full w-full absolute z-10'
        >
            <motion.div
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: '-100vh' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='hover:cursor-pointer hover:bg-slate-200/30 mt-2 w-1/5 bg-white/60 text-center shadow rounded-xl'>
                <h1>X</h1>
            </motion.div>

        </motion.div>

    )
}