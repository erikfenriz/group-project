import React from "react";
import Link from "next/link";
import styles from "@/app/ui/item/item.module.css";
import { Item } from "@/lib/definitions";

interface ChildProps {
    item: Item;
    session: any;
    handleDelete: (itemId: number, itemEmail: string) => void;
}

const ItemCard: React.FC<ChildProps> = ({ item, session, handleDelete }) => {
    return (
        <div key={item._id} className={styles.card}>
            {session.user && session.user.email === item.email && (
                    <div className={styles.actionButtons}>
                        <button onClick={() => handleDelete(item._id, item.email)} className={styles.deleteButton}>Delete</button>
                        <Link href={`/store/edit/${item._id}`}>
                            <button className={styles.editButton}>Edit</button>
                        </Link>
                    </div>
            )}
            <img src={item.images[0]} alt={item.name} className={styles.image} />
            <div className={styles.cardContent}>
                <h2>{item.name}</h2>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>${item.price.toFixed(2)}</p>
                <button className={styles.addToCartButton}>Add to Cart</button>                
            </div>
        </div>
    );
};

export default ItemCard;
