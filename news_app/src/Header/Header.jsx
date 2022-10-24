import React, { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Button, Dropdown } from '@nextui-org/react';
import Acronymn from './Acronymn';
import { newsContext } from '../NewsContext'

export default function Header() {

    const [selected, setSelected] = useState(new Set(["Portuguese"]));
    const [input, setInput] = useState('');
    const [, setNews] = useContext(newsContext);

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
        fetch(`http://localhost:5000/news?subject=${input}&language=${language}`)
            .then(res => res.json())
            .then(data => {
                setNews(data);
            })
    }

    return (
        <motion.div className='bg-slate-400 flex mt-8 mx-auto w-3/4 h-3/4 items-center justify-center text-center rounded-md shadow-xl'>

            <motion.div className='w-2/5 ml-5'>
                <Input
                    onChange={getInputValue}
                    bordered
                    labelPlaceholder="Search for a news"
                    width='100%'
                    color="default" />
            </motion.div>

            <motion.div className='ml-10'>
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

            <motion.div className='ml-10'>
                <Button onPress={click} auto>Search</Button>
            </motion.div>

        </motion.div>
    )
}