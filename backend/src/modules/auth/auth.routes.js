import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { verifyTelegramAuth } from '../../utils/telegram.js';
import { upsertUserByTelegram } from '../users/users.service.js';

const router = Router();

router.post('/telegram', async (req, res) => {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const jwtSecret = process.env.JWT_SECRET;
    if (!botToken) return res.status(500).json({ message: 'Server not configured (missing TELEGRAM_BOT_TOKEN)' });
    if (!jwtSecret) return res.status(500).json({ message: 'Server not configured (missing JWT_SECRET)' });

    const check = verifyTelegramAuth(req.body, botToken, 300); // 5 minutes freshness window
    if (!check.ok) {
      return res.status(401).json({ message: 'Invalid Telegram auth', reason: check.reason });
    }

    const { id, username, first_name, last_name, photo_url } = req.body;

    const user = await upsertUserByTelegram({
      telegramId: String(id),
      username: username || null,
      firstName: first_name || null,
      lastName: last_name || null,
      photoUrl: photo_url || null,
    });

    const token = jwt.sign(
      { sub: user.id, tgid: user.telegramId, role: 'participant' },
      jwtSecret,
      { expiresIn: '14d' }
    );

    return res.json({ token, user: { id: user.id, username: user.username, firstName: user.firstName, lastName: user.lastName, photoUrl: user.photoUrl } });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;
