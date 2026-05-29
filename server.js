import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES Modules environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from 'dist' directory with cache-control
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the index.html for all matching wildcard client-side routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.5' === '0.0.0.0' ? '0.0.0.5' : '0.0.0.0', () => {
  console.log(`Server is successfully running on port ${PORT}`);
});
