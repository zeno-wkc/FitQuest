import styles from "./ImageCrop.module.css";
import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import AvatarEditor from 'react-avatar-editor';

export default function ImageCropper({ src, onSave }) {
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [croppedImage, setCroppedImage] = useState(null);
  const [editor, setEditor] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    if (editor) {
      const canvas = editor.getImage().toDataURL();
      setCroppedImage(canvas);
    }
  };

  const handleSave = () => {
    onSave(croppedImage);
  };

  return (
    <div>
      <ReactCrop
        src={src}
        crop={crop}
        onChange={newCrop => setCrop(newCrop)}
        onComplete={onCropComplete}
      />
      {croppedImage && (
        <AvatarEditor
          ref={setEditor}
          image={croppedImage}
          width={200}
          height={200}
          border={50}
          borderRadius={100}
        />
      )}
      {croppedImage && <button onClick={handleSave}>Save Image</button>}
    </div>
  );
}
