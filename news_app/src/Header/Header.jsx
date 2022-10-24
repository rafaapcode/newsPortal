import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Button, Dropdown } from '@nextui-org/react';

export default function Header() {

    const [selected, setSelected] = useState(new Set(["text"]));

    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    return (
        <motion.div className='bg-slate-400 flex w-3/4 h-3/4 items-center justify-center text-center mt-8 rounded-md shadow-xl'>
            <motion.div className='w-2/5 ml-5'>
                <Input
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
                        <Dropdown.Item key="text">Text</Dropdown.Item>
                        <Dropdown.Item key="number">Number</Dropdown.Item>
                        <Dropdown.Item key="date">Date</Dropdown.Item>
                        <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                        <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </motion.div>

            <motion.div className='ml-10'>
                <Button auto>Search</Button>
            </motion.div>

        </motion.div>
    )
}