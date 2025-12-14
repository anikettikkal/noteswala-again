import { Router } from "express";
import {
  createFyPdf,
  createSyPdf,
  createTyPdf,
  getAllFyPdfs,
  getAllSyPdfs,
  getAllTyPdfs,
  searchFyPdfByTitle,
  searchSyPdfByTitle,
  searchTyPdfByTitle
} from "../controllers/pdf.controller.js";

const router = Router();

/* ===== CREATE PDF ROUTES ===== */
router.post("/createFyPdf", createFyPdf);
router.post("/createSyPdf", createSyPdf);
router.post("/createTyPdf", createTyPdf);

/* ===== GET ALL PDF ROUTES ===== */
router.get("/FyallPdfs", getAllFyPdfs);
router.get("/SyallPdfs", getAllSyPdfs);
router.get("/TyallPdfs", getAllTyPdfs);

/* ===== SEARCH BY TITLE ===== */
router.get("/Fypdfsbytitle", searchFyPdfByTitle);
router.get("/Sypdfsbytitle", searchSyPdfByTitle);
router.get("/Typdfsbytitle", searchTyPdfByTitle);

export default router;
