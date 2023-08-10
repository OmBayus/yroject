import express from "express";

import exampleRepository from "./example.repository";

export const findAll = async (req: express.Request, res: express.Response) => {
  try {
    const examples = await exampleRepository.findAll();
    return res.status(200).json({
      examples,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const findOne = async (req: express.Request, res: express.Response) => {
  try {
    const example = await exampleRepository.findOne(req.params.id);
    return res.status(200).json({
      example,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const create = async (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).json({
      example: await exampleRepository.create(req.body),
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const update = async (req: express.Request, res: express.Response) => {
  try {
    const example = await exampleRepository.update(req.params.id, req.body);
    return res.status(200).json({
      example,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const remove = async (req: express.Request, res: express.Response) => {
  try {
    const example = await exampleRepository.remove(req.params.id);
    return res.status(200).json({
      example,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
