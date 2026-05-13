import { Router } from "express";
//routers

import authRouter from "./auth.route";
import adminRouter from "./admin.auth.route";
import userRouter from "./user.route";
import hotelRouter from "./hotel.route";
import roomRouter from "./room.route";
import receiptRouter from "./receipt.route";
import reviewRouter from "./review.route";
import bookingRouter from "./booking.route";
import analysisRouter from "./analytic.route";
import imageRouter from "./image.route";
import paymentRouter from "./payment.route";
import cleanupRouter from "./cleanup.route";

const router: Router = Router();

router.use("/analysis", analysisRouter);
router.use("/auth", authRouter);
router.use("/admin", adminRouter);
router.use("/users", userRouter);
router.use("/hotels", hotelRouter);
router.use("/rooms", roomRouter);
router.use("/reviewa", reviewRouter);
router.use("/receipts", receiptRouter);
router.use("/bookings", bookingRouter);
router.use("/images", imageRouter);
router.use("/payment", paymentRouter);
router.use("/cleanup", cleanupRouter);

export default router;
