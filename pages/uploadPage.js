import Head from "next/head";
import styles from "@/styles/UploadPage.module.css";
import { useState, useRef } from 'react';

export default function UploadPage() {
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  return (
    <>
      <Head>
        <title>Upload Page</title>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="zh" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
      </Head>
      <main className={styles.mainContainer}>
        <h1>Upload Your Avatar</h1>
        <form
          onSubmit={async (event) => {
            event.preventDefault();

            const file = inputFileRef.current.files[0];
            const formData = new FormData();
            formData.append('file', file);

            try {
              const response = await fetch(
                './api/file', // Update the endpoint URL accordingly
                {
                  method: 'POST',
                  body: formData,
                },
              );

              if (response.ok) {
                const newBlob = await response.json();
                setBlob(newBlob);
              } else {
                console.error('Failed to upload file');
              }
            } catch (error) {
              console.error('Error uploading file:', error);
            }
          }}
        >
          <input name="file" ref={inputFileRef} type="file" required />
          <button type="submit">Upload</button>
        </form>
        {blob && (
          <div>
            Blob URL: <a href={blob.url}>{blob.url}</a>
          </div>
        )}
      </main>
    </>
  );
}