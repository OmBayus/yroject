import express from "express";

const router = express.Router();

import { findAll, findOne, create, update, remove } from "./example.controller";

router.get("/findAll", findAll);
router.get("/findOne/:id", findOne);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

export default router;
