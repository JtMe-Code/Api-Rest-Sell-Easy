"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controllers_1 = require("../controllers/login.controllers");
const router = express_1.Router();
router.post('/signup', login_controllers_1.LoginControllers.signup);
router.post('/signin', login_controllers_1.LoginControllers.signin);
exports.default = router;
