import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SideBar from './Sidebar';

export default function ButtonSideBar() {
    const [click, setClick] = useState(false);

    

    return (
        <div className='w-[20%] h-[75%] absolute right-0 top-6 p-2 flex justify-end'>
            <SideBar></SideBar>
            <motion.div
                onClick={() => {
                    setClick(true);
                    console.log(click);
                }}
                initial={{ opacity: 0, y: '-100vh' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, type: 'spring' }}
                className='ml-5 h-12 text-center rounded-full bg-slate-300 p-2 hover:cursor-pointer'>
                <h1>teste</h1>
            </motion.div>
        </div>
    )
}

