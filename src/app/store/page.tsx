'use client';

import React, {useEffect, useState} from 'react';
// import {items} from '@/lib/placeholder-data';
import styles from './styles.module.css';
import ItemCard from "@/app/ui/item/item";
import {Item} from "@/lib/definitions";
import Link from "next/link";
import {API_BASE_URL} from "@/lib/api";

const Store: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/items`);

                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data);
            } catch (error: any) {
                console.error('Error fetching items:', error.message);
            }
        };

        fetchItems();
    }, []);

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
                    <Link key={item._id} href={`/store/item/${item._id}`}>
                        <ItemCard key={item._id} item={item}/>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Store;
