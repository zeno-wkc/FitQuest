import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function uploadHandler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Something went wrong' });
      return;
    }

    const file = files.file;
    if (!file || !['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
      res.status(400).json({ error: 'Invalid file type' });
      return;
    }

    const oldPath = file.path;
    const newPath = path.join(process.cwd(), 'public', 'uploads', file.name);

    fs.rename(oldPath, newPath, (renameErr) => {
      if (renameErr) {
        res.status(500).json({ error: 'Failed to save the file' });
        return;
      }
      res.status(200).json({ success: true });
    });
  });
}