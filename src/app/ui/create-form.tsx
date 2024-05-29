"use client";

import styles from "@/app/ui/create-form.module.css";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";
import { FormEvent } from "react";

interface FormData {
    name: string;
    description: string;
    price: string;
    size: string;
    images: File[];
    storeId: string;
    storeName: string;
    category: string;
}

function CreateForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        description: "",
        price: "",
        size: "",
        images: [],
        storeId: "",
        storeName: "",
        category: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, files } = e.target as HTMLInputElement;
    
        if (type === "file" && files) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            images: Array.from(files),
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          }));
        }
      };
    
      const convertImageToBase64 = async (file: File) => {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
          reader.onload = (event) => resolve(event.target?.result as string);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      };
    
      const uploadImages = async (files: File[]) => {
        const imageUrls = [];
        for (const file of files) {
          const base64Image = await convertImageToBase64(file);
          imageUrls.push(base64Image);
        }
        return imageUrls;
      };
    
      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        const imageUrls = await uploadImages(formData.images);
    
        const dataToSend = {
          ...formData,
          price: parseFloat(formData.price), // Convert price to number
          size: formData.size,
          images: imageUrls,
          storeId: parseInt(formData.storeId), // Convert storeId to number
          storeName: formData.storeName,
          category: parseInt(formData.category), // Convert category to number
        };
    
        try {
          const response = await fetch("http://localhost:4000/items", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
          });
    
          if (response.ok) {
            console.log("Item created successfully");
          } else {
            console.error("Error creating item");
          }
        } catch (error) {
          console.error("Error:", error);
        }
    };

    return (
        <>
            <form className={styles.form}  onSubmit={handleSubmit}>
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
                                value={formData.name}
                                onChange={handleChange}
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
                                value={formData.description}
                                onChange={handleChange}
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
                                value={formData.price}
                                onChange={handleChange}
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
                                value={formData.size}
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                value={formData.storeId}
                                onChange={handleChange}
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
                                value={formData.storeName}
                                onChange={handleChange}
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
                                value={formData.category}
                                onChange={handleChange}
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