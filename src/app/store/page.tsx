'use client';

import React, {useState} from 'react';
import {items} from '@/lib/placeholder-data'; // Assuming you have defined the Item interface in a types file
import styles from './styles.module.css';
import ItemCard from "@/app/ui/item/item";
import {Item} from "@/lib/definitions";

const Store: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <main className={styles.container}>
            <img className={styles.logo} src='/logo.png' alt='logo'/>
            <div className={styles.searchContainer}>
                <input
                    type='text'
                    placeholder='Search items...'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.grid}>
                {filteredItems.map((item: Item) => (
                    <ItemCard key={item.id} item={item}/>
                ))}
            </div>
        </main>
    );
};

export default Store;
