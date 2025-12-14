import {FyPdf} from "../models/pdfsModels/fypdf.model.js"
import { SyPdf } from "../models/pdfsModels/sypdf.model.js";
import { TyPdf } from "../models/pdfsModels/typdf.model.js";
import ApiResponse from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// ---------------- create pdf -----------

export const createFypdf = asyncHandler(async(req,res)=>{
    const {title,description,imgUrl,pdfUrl,year,faculty} = req.body;

    if (!pdfUrl || !title) {
        throw new ApiError(400,"pdfurl and title required for creating pdf");
        
    }

    const saveFypdf =await FyPdf.create({title,description,imgUrl,pdfUrl,year,faculty})

    return res.json(new ApiResponse(201,"fypdf created successfully",saveFypdf))
})

export const createSypdf = asyncHandler(async(req,res)=>{
    const {title,description,imgUrl,pdfUrl,year,faculty} = req.body;

    if (!title || !pdfUrl) {
        throw new ApiError(400,"title and pdfurl required");
        
    } 

    const saveSypdf = await SyPdf.create({title,description,pdfUrl,imgUrl,year,faculty})

    return res.status(200).json(new ApiResponse(200,"sypdf created successfully",saveSypdf))
})

export const createTypdf = asyncHandler(async(req,res)=>{
    const {title,description,imgUrl,pdfUrl,year,faculty} = req.body;

    if (!pdfUrl || !title) {
        throw new ApiError(400,"pdfurl and title required for creating pdf");
        
    }

    const saveTypdf =await TyPdf.create({title,description,imgUrl,pdfUrl,year,faculty})

    return res.json(new ApiResponse(201,"typdf created successfully",saveTypdf))
})


//---------------- get all pdfs------------------
export const getAllFyPdfs = asyncHandler(async (req, res) => {
    const pdfs = await FyPdf.find();
    return res
        .status(200)
        .json(new ApiResponse(200, pdfs, "FY PDFs fetched successfully"));
});

export const getAllSyPdfs = asyncHandler(async (req, res) => {
    const pdfs = await SyPdf.find();
    return res
        .status(200)
        .json(new ApiResponse(200, pdfs, "SY PDFs fetched successfully"));
});

export const getAllTyPdfs = asyncHandler(async (req, res) => {
    const pdfs = await TyPdf.find();
    return res
        .status(200)
        .json(new ApiResponse(200, pdfs, "TY PDFs fetched successfully"));
});


//---------------- search pdfs by title -------------------------

export const searchFyPdfByTitle = asyncHandler(async (req, res) => {
    const { title } = req.query;

    const pdfs = await FyPdf.find({
        title: { $regex: title, $options: "i" }
    });

    return res
        .status(200)
        .json(new ApiResponse(200, pdfs, "FY PDFs fetched successfully"));
});

export const searchSyPdfByTitle = asyncHandler(async (req, res) => {
    const { title } = req.query;

    const pdfs = await SyPdf.find({
        title: { $regex: title, $options: "i" }
    });

    return res
        .status(200)
        .json(new ApiResponse(200, pdfs, "SY PDFs fetched successfully"));
});

export const searchTyPdfByTitle = asyncHandler(async (req, res) => {
    const { title } = req.query;

    const pdfs = await TyPdf.find({
        title: { $regex: title, $options: "i" }
    });

    return res
        .status(200)
        .json(new ApiResponse(200, pdfs, "TY PDFs fetched successfully"));
});