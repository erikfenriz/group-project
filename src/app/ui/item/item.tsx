import React from "react";
import styles from "@/app/ui/item/item.module.css";
import {Item} from "@/lib/definitions";

interface ChildProps {
    item: Item;
}

const ItemCard: React.FC<ChildProps> = ({item}) => {
    return (
        <div key={item._id} className={styles.card}>
            <img src={item.images[0]} alt={item.name} className={styles.image}/>
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
