import { Router } from "express";
import paymentController from "../controller/PaymentController";

export const paymentRouter = Router()

paymentRouter.post('/paymentCreditCard', paymentController.registerPaymentCard)
