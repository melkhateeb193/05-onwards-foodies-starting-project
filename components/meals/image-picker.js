'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({label , name}) {

const [pickedImage, setPickedImage] = useState();
const imageInputRef = useRef();

    function handlePickCLick() {
        imageInputRef.current.click();
    }
function handleImageChange (e) {
const file = e.target.files[0];

if (!file) {
    setPickedImage();
    return;
}

const fileReader = new FileReader();
fileReader.onload = () => {
    setPickedImage(  fileReader.result)
};
fileReader.readAsDataURL(file);
}
  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p> }
                {pickedImage && <Image src={pickedImage} alt='the Image selected by the user' fill/> }
                </div>
        <input
        className={classes.input}
        type='file'
         id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
          />
          <button className={classes.button} onClick={handlePickCLick} type='button'>Pick an Image</button>
        </div>
    </div>
  )
}
