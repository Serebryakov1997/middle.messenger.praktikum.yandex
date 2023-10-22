import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const app = express();
const PORT = 3000;

const currentDir = fileURLToPath(import.meta.url);
const dirname = path.dirname(currentDir);

app.use(express.static(path.join(dirname, '/build')));

app.get('*', (_, res) => {
  res.sendFile('/index.html', {
    root: path.join(dirname, '/build'),
  });
});

app.listen(PORT, () => {
  console.log(`My Web Messenger listening on port ${PORT}!`);
});
