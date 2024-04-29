import "react-image-crop/dist/ReactCrop.css";
import styles from "./UploadImgFile.module.css";
import { useState } from "react";
import ReactCrop from "react-image-crop";

export default function UploadImgFile() {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleImageLoaded = (img) => {
    console.log(img);
  };

  const handleCropComplete = (crop) => {
    makeClientCrop(crop);
  };

  const makeClientCrop = async (crop) => {
    if (image && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(image, crop);
      setCroppedImageUrl(croppedImageUrl);
    }
  };

  const getCroppedImg = (imageSrc, crop) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

        canvas.toBlob((blob) => {
          if (!blob) {
            //reject(new Error('Canvas is empty'));
            console.error("Canvas is empty");
            return;
          }
          const croppedImageUrl = window.URL.createObjectURL(blob);
          resolve(croppedImageUrl);
        }, "image/jpeg");
      };
    });
  };

  const handleSave = () => {
    // Here you can implement the logic to save the cropped image,
    // for example, sending it to the server or saving it locally.
    console.log("Cropped image URL:", croppedImageUrl);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <>
          <ReactCrop
            src={image}
            crop={crop}
            onImageLoaded={handleImageLoaded}
            onComplete={handleCropComplete}
            onChange={(newCrop) => setCrop(newCrop)}
          />
          {croppedImageUrl && (
            <div>
              <h2>Cropped Image Preview:</h2>
              <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
              <button onClick={handleSave}>Save Cropped Image</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
