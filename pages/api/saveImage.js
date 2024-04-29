export default function handler(req, res) {
  if (req.method === "POST") {
    const { croppedImage } = req.body;

    // Process cropped image and save to server
    // Example: saveCroppedImageToServer(croppedImage);

    res.status(200).json({ message: "Cropped image saved successfully" });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}