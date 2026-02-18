import express from "express";
import { uploadDocument, askQuestion } from "../services/ragService.js";

const router = express.Router();

router.post("/uploadDocument", uploadDocument);
router.post("/ask", askQuestion);

export default router;