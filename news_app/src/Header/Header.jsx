import React, { useContext, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Button, Dropdown, Text } from '@nextui-org/react';
import Acronymn from './Acronymn';
import { newsContext } from '../NewsContext'
import './Header.css';
import { isDisabled } from '@testing-library/user-event/dist/utils';

export default function Header() {

    const [selected, setSelected] = useState(new Set(["Portuguese"]));
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('');
    const [filterDate, setDate] = useState('');
    const { news, status } = useContext(newsContext);

    const [have] = status;

    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    const language = Acronymn.get(selectedValue);

    function getInputValue(event) {
        const value = event.target.value;
        setFilter(value);
        setInput(value);
    }

    function getInputFilterValue(event) {
        const value = event.target.value;
        setFilter(value);
    }

    function getDateValue(event) {
        const value = event.target.value;

        setDate(value);
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

    function filterNews() {
        const [notice, setNotices] = news;

        const noticeFiltered = notice.filter(news => news.author.includes(filter));

        setNotices(noticeFiltered);
    }

    function filterNewsDate() {
        const [notice, setNotices] = news;

        const noticeFiltered = notice.filter(news => news.publishedAt === filterDate);

        setNotices(noticeFiltered);
    }

    return (
        <motion.div id='headerCard' className='flex mt-8 mx-auto w-3/4 h-3/4 flex-col items-center justify-center text-center rounded-md shadow-xl bg-gradient-to-r from-sky-100 to-blue-400'>
            <Text
                id='titleHeader'
                className='mb-10'
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue100 -20%, $blue600 70%",
                }}
                weight="bold"
            >
                Search for a News
            </Text>

            <motion.div className='w-full h-1/5 mx-auto flex justify-evenly text-center flex-wrap'>
                <motion.div id='inputHeaderSubject' className='w-2/5 ml-5'
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

                <motion.div id='btnHeaderSubject' className='ml-10 h-fit rounded-xl'
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

            <motion.div className={!have ? 'hidden' : 'w-full h-fit mx-auto flex text-center justify-evenly flex-wrap'}>

                <motion.div id='inputFilterHeader' className='w-1/5'
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
                        onChange={getInputFilterValue}
                        bordered
                        labelPlaceholder="Filter by Author"
                        width='100%'
                        color="primary" />
                </motion.div>

                <motion.div className='h-fit rounded-xl'
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
                    <Button onPress={filterNews} auto>Filter</Button>
                </motion.div>

                <motion.div id='dateFilterHeader' className='w-1/4'
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
                        onChange={getDateValue}
                        type={'date'}
                        bordered
                        width='100%'
                        color="primary" />
                </motion.div>

                <motion.div id='dateFilterHeaderBtn' className='h-fit rounded-xl'
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
                    <Button onPress={filterNewsDate} auto>Filter by date</Button>
                </motion.div>

            </motion.div>

        </motion.div>
    )
}