import express from 'express';
const router = express.Router();

// This is a placeholder for product routes
// You can add logic to fetch/save from MongoDB here
router.get('/', (req, res) => {
    res.json({ message: "Product routes working" });
});

export default router;
