import { Router } from "express";
import {
  createFypdf,
  createSypdf,
  createTypdf,
  getAllFyPdfs,
  getAllSyPdfs,
  getAllTyPdfs,
  searchFyPdfByTitle,
  searchSyPdfByTitle,
  searchTyPdfByTitle
} from "../controllers/pdfs.controller.js";

const router = Router();

/* ===== CREATE PDF ROUTES ===== */
router.post("/createFyPdf", createFypdf);
router.post("/createSyPdf", createSypdf);
router.post("/createTyPdf", createTypdf);

/* ===== GET ALL PDF ROUTES ===== */
router.get("/FyallPdfs", getAllFyPdfs);
router.get("/SyallPdfs", getAllSyPdfs);
router.get("/TyallPdfs", getAllTyPdfs);

/* ===== SEARCH BY TITLE ===== */
router.get("/Fypdfsbytitle", searchFyPdfByTitle);
router.get("/Sypdfsbytitle", searchSyPdfByTitle);
router.get("/Typdfsbytitle", searchTyPdfByTitle);

export default router;
