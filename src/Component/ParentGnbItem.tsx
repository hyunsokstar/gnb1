"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { GnbItem } from './GnbItem';
import { ParentRoute, routes } from '@/app/routes';


const ParentGnbItem = ({ name, link, children }: ParentRoute) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className="parent-item">
            <div onClick={toggleSubMenu} className="parent-link">
                <Link href={link}>{name}</Link>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                        <path fill="#FFA500" d="M21.59 10.59l-1.41-1.41L12 16.17 3.41 9.41 2 10.82l10 10 10-10z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                        <path fill="#FFA500" d="M21.59 10.59l-1.41-1.41L12 16.17 3.41 9.41 2 10.82l10 10 10-10z" transform="rotate(-90 12 12)" />
                    </svg>
                )}
            </div>

            {isOpen && (
                <ul className="sub-menu">
                    {children.map((r) => {
                        const route = routes[r];
                        return <GnbItem {...route} key={route.key} />;
                    })}
                </ul>
            )}
        </li>

    );
}


export default ParentGnbItem;