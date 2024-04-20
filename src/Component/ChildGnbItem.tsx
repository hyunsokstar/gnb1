// components/ChildGnbItem.tsx
import React from 'react';
import Link from 'next/link';
import { ChildRoute } from '@/app/routes';


const ChildGnbItem: React.FC<ChildRoute> = ({ name, link }) => {

    const liClickHandler = () => {
        // console.log("li click : ", link);
    };


    return (
        <li onClick={liClickHandler}>
            <Link href={link}>{name}</Link>
        </li>
    );
};


export default ChildGnbItem;