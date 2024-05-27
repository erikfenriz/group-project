import React from 'react';
import {items} from '@/lib/placeholder-data'; // Assuming you have defined the Item interface in a types file
import styles from './styles.module.css';
import ItemCard from "@/app/ui/item/item";
import {Item} from "@/lib/definitions";
import { signOut_ } from '@/lib/actions'; // Import your signOut function

const Home: React.FC = () => {
    return (

        <main className={styles.container}>
            <form
            action={async () => {
                'use server';
                await signOut_();
                console.log("Sign out executed client");
                //window.location.href = "/";
            }}
            >
            <button
                type="submit" className="signout-btn"
            >
                <div className="signout-btn" style={{ color: 'black' }}>Sign Out</div>
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
