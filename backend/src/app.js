import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();

// Basic middlewares
app.use(cors());
app.use(express.json());

// Healthcheck
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API routes
app.use('/api', routes);

// Error handler (simple)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

const PORT = process.env.BACKEND_PORT || process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
