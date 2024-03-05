import React, { useState } from 'react';

const MultipleImagePicker = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = event => {
    const selectedFiles = Array.from(event.target.files);
    const selectedImages = selectedFiles.map(file => URL.createObjectURL(file));
    setImages([...images, ...selectedImages]);
  };

  const removeImage = index => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      <div>
        {images.map((image, index) => (
          <div key={index} style={{ display: 'inline-block', position: 'relative' }}>
            <img src={image} alt={`Image ${index}`} style={{ width: 100, height: 100, margin: 5 }} onClick={() => removeImage(index)} />
            <button style={{ position: 'absolute', top: 0, right: 0 }} onClick={() => removeImage(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleImagePicker;
