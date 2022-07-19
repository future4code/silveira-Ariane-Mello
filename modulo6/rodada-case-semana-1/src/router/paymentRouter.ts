import { Router } from "express";
import PaymentController from "../controller/paymentController";

export const paymentRouter = Router()

paymentRouter.post('/register', PaymentController.registerPayment)
// paymentRouter.get('/status', .status)