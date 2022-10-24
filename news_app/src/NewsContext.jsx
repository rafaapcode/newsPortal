import React, { createContext, useState } from 'react';

export const newsContext = createContext();

export function NewsProvider(props) {

    const [news, setNews] = useState([{ author: null, title: null, urlToImage: null, publishedAt: null }]);

    return (
        <newsContext.Provider value={[news, setNews]}>
            {props.children}
        </newsContext.Provider>
    )
}