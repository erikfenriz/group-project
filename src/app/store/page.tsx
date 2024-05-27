import React from 'react';
import {items} from '@/lib/placeholder-data'; // Assuming you have defined the Item interface in a types file
import styles from './styles.module.css';
import ItemCard from "@/app/ui/item/item";
import {Item} from "@/lib/definitions";
import { signOut } from '@/auth';


const Home: React.FC = () => {
    return (
        <main className={styles.container}>
            <form
            action={async () => {
                'use server';
                await signOut();
                console.log("Sign out executed client"); 
            }}
            >
            <button
                type="submit"
                className="signout-btn"
            >
                <span className="icon">&#x26A1;</span>
                <div className="hidden md:block" style={{ color: 'black' }}>Sign Out</div>
            </button>
            </form>
            <img className={styles.logo} src='/logo.png' alt='logo'/>
            <div className={styles.grid}>
                {items.map((item: Item) => (
                    <ItemCard key={item.id} item={item}/>
                ))}
            </div>
        </main>
    );
};

export default Home;
