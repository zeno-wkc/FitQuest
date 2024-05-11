import styles from "./uploadForm.module.css";
import { useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/file/", {
      method: "POST",
      body: formData,
    });
    // Handle response
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
  </form>
  );
}