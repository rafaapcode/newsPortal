import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import SideBar from './Sidebar';
import { newsContext } from '../NewsContext';

export default function ButtonSideBar() {
    const { sidebar } = useContext(newsContext);
    const [isOpen, setIsOpen] = sidebar;


    return (
        <div className='w-[20%] h-[90%] absolute right-0 top-6 p-2 flex justify-end z-20'>
            {isOpen && <SideBar></SideBar>}

            <motion.div
                onClick={() => {
                    setIsOpen(true);
                }}
                initial={{ opacity: 0, y: '-100vh' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, type: 'spring' }}
                className='ml-5 h-12 text-center rounded-lg w-32 bg-blue-500 shadow-xl hover:cursor-pointer hover:bg-blue-600'
            >
                <h1 className='mt-3 text-blue-200'>Saved News</h1>
            </motion.div>
        </div>
    )
}

