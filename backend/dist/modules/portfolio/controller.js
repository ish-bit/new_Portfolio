"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutController = void 0;
const service_1 = require("./service");
const index_1 = require("../../common/respHandler/index");
const logger_1 = require("../../common/logger");
class AboutController {
    constructor() {
        this.aboutService = new service_1.AboutService();
    }
    readAboutMe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.logger.info("code is here");
                const result = yield this.aboutService.readAboutMe();
                logger_1.logger.info(result);
                index_1.respHndlr.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS);
            }
            catch (e) {
            }
        });
    }
}
exports.AboutController = AboutController;