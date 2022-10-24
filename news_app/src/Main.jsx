import React from 'react';
import Header from './Header/Header';
import Card from './Cards/Card';

export default function Main(props) {
    return (
        <div className='w-full h-screen'>
            <Header></Header>
            <Card></Card>
        </div>
    )
}