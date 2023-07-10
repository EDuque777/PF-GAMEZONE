import React, { useState } from 'react';
import axios from 'axios';
import style from "./ProfileView.module.css";

const ShoppingView = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const datosUser =  JSON.parse(localStorage.getItem("user"));

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', selectedImage);

      const response = await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          datosUser: JSON.stringify(datosUser.id),
        },
      });

      if (response.status === 200) {
        console.log(response.data); // URL de la imagen en Cloudinary
      } else {
        console.log(response.data); // Mensaje de error
      }
    } catch (error) {
      console.log(error.message);
    }

    setSelectedImage(null);
  };

  return (
    <form onSubmit={handleSubmit} >
      <div>
      <input type="file" accept="image/*" name="file" onChange={handleImageChange} className={style.fileInput}/>
      </div>
      <div>
      <button type="submit" className={style.imagebuton} >Subir imagen</button>
      </div>
    </form>
  );
};

export default ShoppingView;