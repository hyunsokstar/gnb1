// const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
//     const path = ['', ...item].join('/')
//     console.log(path)

//     return <div>Item page {path}</div>
// }

// export default ItemPage

// src\app\[...item]\page.tsx

'use client'
import React, { useEffect } from 'react';
import { ROUTE_PATH, isParentRoute, routes } from '../routes';

interface ItemPageProps {
    params: {
        item: string[];
    };
}


const ItemPage: React.FC<ItemPageProps> = ({ params: { item } }) => {
    const path = ['', ...item].join('/') as ROUTE_PATH
    console.log("path : ", path)
    const route = routes[path]

    if (!route || isParentRoute(route)) return null
    const { children: Component } = route

    return Component ? <Component /> : null

};


export default ItemPage;