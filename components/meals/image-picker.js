"use client"; 
import {useRef, useState} from "react";
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({name,label}) {
    const [pickedImage,setPickedImage] = useState();
    const imagereference = useRef();

    function handlePickerClick() {
        imagereference.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if(!file) {
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        return fileReader.readAsDataURL(file);
       
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image picked yet.</p>}
                    {pickedImage && (
                        <Image 
                            src={pickedImage} 
                            alt="image selected by you" 
                            fill
                        />
                    )}
                </div>
                <input 
                    className={classes.input}
                    type = "file"
                    id={name}
                    accept="image/png image/jpeg"
                    name={name}
                    ref={imagereference}
                    onChange={handleImageChange}
                    required
                />
                <button 
                    className={classes.button} 
                    type="button"
                    onClick={handlePickerClick}> 
                    Pick an Image
                </button>
            </div>
        </div>
    )
}