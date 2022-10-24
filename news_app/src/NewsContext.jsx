import React, { createContext, useState } from 'react';

export const newsContext = createContext();

export function NewsProvider(props) {

    const [news, setNews] = useState([{ author: null, title: null, urlToImage: null, publishedAt: null }]);
    const [have, setHave] = useState(false);

    return (
        <newsContext.Provider value={{ news: [news, setNews], status: [have, setHave]}}>
            {props.children}
        </newsContext.Provider>
    )
}