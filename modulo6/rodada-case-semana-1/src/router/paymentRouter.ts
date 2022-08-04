import { Router } from "express";
import paymentController from "../controller/PaymentController";

export const paymentRouter = Router()

paymentRouter.post('/paymentCreditCard', paymentController.registerPaymentCard)
paymentRouter.post('/paymentSlip', paymentController.registerPaymentSlip)

paymentRouter.get('/getPaymentCreditCard/:id', paymentController.getPaymentCreditCard)
paymentRouter.get('/getPaymentSlip/:id', paymentController.getPaymentSlip)
