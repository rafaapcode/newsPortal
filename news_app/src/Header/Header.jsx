import React, { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Button, Dropdown, Text } from '@nextui-org/react';
import Acronymn from './Acronymn';
import { newsContext } from '../NewsContext'

export default function Header() {

    const [selected, setSelected] = useState(new Set(["Portuguese"]));
    const [input, setInput] = useState('');
    const { news, status } = useContext(newsContext);

    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    const language = Acronymn.get(selectedValue);

    function getInputValue(event) {
        const value = event.target.value;

        setInput(value);
    }

    function click() {
        const [, setNews] = news;
        const [, setHave] = status;
        fetch(`http://localhost:5000/news?subject=${input}&language=${language}`)
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setHave(true);
            })
    }

    return (
        <motion.div className='flex mt-8 mx-auto w-3/4 h-3/4 flex-col items-center justify-center text-center rounded-md shadow-xl bg-gradient-to-r from-sky-100 to-blue-400'>

            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue100 -20%, $blue600 70%",
                }}
                weight="bold"
            >
                Search for a News
            </Text>

            <motion.div className='w-full h-1/2 mx-auto flex mt-8 justify-evenly text-center flex-wrap'>
                <motion.div className='w-2/5 ml-5'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        default: {
                            duration: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <Input
                        onChange={getInputValue}
                        bordered
                        labelPlaceholder="Search for a news"
                        width='100%'
                        color="primary" />
                </motion.div>

                <motion.div className='ml-10 h-fit'
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        default: {
                            duration: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <Dropdown>
                        <Dropdown.Button flat color="primary" css={{ tt: "capitalize" }}>
                            {selectedValue}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="primary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selected}
                            onSelectionChange={setSelected}
                        >
                            <Dropdown.Item key="Portuguese">Portuguese</Dropdown.Item>
                            <Dropdown.Item key="English">English</Dropdown.Item>
                            <Dropdown.Item key="Arabic">Arabic</Dropdown.Item>
                            <Dropdown.Item key="Spanish">Spanish</Dropdown.Item>
                            <Dropdown.Item key="Dutch">Dutch</Dropdown.Item>
                            <Dropdown.Item key="German">German</Dropdown.Item>
                            <Dropdown.Item key="Italian">Italian</Dropdown.Item>
                            <Dropdown.Item key="French">French</Dropdown.Item>
                            <Dropdown.Item key="Russian">Russian</Dropdown.Item>
                            <Dropdown.Item key="Chinese">Chinese</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </motion.div>

                <motion.div className='ml-10 h-fit rounded-xl'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        default: {
                            duration: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <Button onPress={click} auto>Search</Button>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}