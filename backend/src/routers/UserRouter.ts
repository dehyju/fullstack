import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users index route');
})


export default router;