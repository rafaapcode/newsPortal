import React, { useContext } from 'react';
import { Card, Text } from "@nextui-org/react";
import { motion } from 'framer-motion';
import { newsContext } from '../NewsContext'

export default function Error(props) {
    const { status } = useContext(newsContext);
    const [, setDone] = status;

    return (
        <motion.div className='w-1/2'
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ type: 'spring', duration: 1.2 }}
            onClick={() => setDone(false)}
        >
            <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{ mw: "100%", backgroundColor: '#ef4444' }}
            >
                <Card.Body>
                    <Text css={{ color: 'White' }}>{props.msg}</Text>
                </Card.Body>
            </Card>
        </motion.div>
    )
}