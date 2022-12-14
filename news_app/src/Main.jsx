import React from 'react';
import Header from './Header/Header';
import Cards from './Cards/Card';
import { NewsProvider } from './NewsContext';

export default function Main(props) {
    return (
        <div className='w-full h-screen'>
            <NewsProvider>
                <Header></Header>
                <Cards></Cards>
            </NewsProvider>
        </div>
    )
}