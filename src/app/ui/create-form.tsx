"use client";

import styles from "@/app/ui/create-form.module.css";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useFormState } from "react-dom";
import Image from "next/image";
import Header from "./header";


function CreateForm() {
    return (
        <>
            <Header />
            <form className={styles.form}>
                <div className={styles.title_div}>
                    <h1 className={styles.title}>Post an item</h1>
                    <Image
                    src="/flower.svg"
                    alt="Flower Icon"
                    width={40}
                    height={40}
                    className={styles.flower_icon}
                    />
                </div>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="info" className={styles.fieldset_title}>
                        Information of the item
                    </label>
                    {/* Item Name */}
                    <div>
                        <label htmlFor="name">
                            Name
                        </label>
                        <div className={styles.input}>
                            <input
                                id="name" 
                                name="name"
                                type="text"
                                placeholder="Enter the name of the item" 
                                className={styles.input_box}
                                required
                            />
                        </div>
                    </div>
                    {/* Description */}
                    <div className={styles.input}>
                        <label htmlFor="description">
                            Description
                        </label>
                        <div>
                            <input
                                id="description" 
                                name="description"
                                type="text"
                                placeholder="Enter the description of the item"
                                className={styles.input_box} 
                                required
                            />
                        </div>
                    </div>
                    {/* Price */}
                    <div className={styles.input}>
                        <label htmlFor="price">
                            Price
                        </label>
                        <div>
                            <input
                                id="price" 
                                name="price"
                                type="number"
                                placeholder="Enter the price of the item"
                                step="0.01"
                                className={styles.input_box}
                                required
                            />
                        </div>
                    </div>
                    {/* Size */}
                    <div className={styles.input}>
                        <label htmlFor="size">
                            Size
                        </label>
                        <div>
                            <input
                                id="size" 
                                name="size"
                                type="number"
                                placeholder="Enter the size of the item"
                                step="0.01"
                                className={styles.input_box}
                                required
                            />
                        </div>
                    </div>
                    {/* Images */}
                    <div className={styles.input}>
                        <label htmlFor="images">
                            Images
                        </label>
                        <div>
                            <input
                                id="images" 
                                name="images"
                                type="file"
                                multiple
                                className={styles.input_box}
                                required
                            />
                        </div>
                    </div>
                    {/* StoreId */}
                    <div className={styles.input}>
                        <label htmlFor="storeId">
                            Store ID
                        </label>
                        <div>
                            <input
                                id="storeId" 
                                name="storeId"
                                type="number"
                                placeholder="Enter Store ID"
                                step="1"
                                className={styles.input_box}
                                required
                            />
                        </div>
                    </div>
                    {/* StoreName */}
                    <div className={styles.input}>
                        <label htmlFor="storeName">
                            Store Name
                        </label>
                        <div>
                            <input
                                id="storeName" 
                                name="storeName"
                                type="text"
                                placeholder="Enter Store Name"
                                className={styles.input_box}
                                required
                            />
                        </div>
                    </div>
                    {/* Category */}
                    <div className={styles.input}>
                        <label htmlFor="Category">
                            Category
                        </label>
                        <div>
                            <input
                                id="category" 
                                name="category"
                                type="number"
                                placeholder="Enter category number"
                                step="1"
                                className={styles.input_box}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.submit_button}>
                        <input
                            id="submitBtn"
                            type="submit"
                            value="Submit"
                            className={styles.submitBtn}
                        />
                        <PaperAirplaneIcon className={styles.submit_icon} />
                    </div>
                </fieldset>
            </form>
        </>
        
    )
}

export default CreateForm;