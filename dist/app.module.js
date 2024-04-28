"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./products/product.entity");
const category_entity_1 = require("./categories/category.entity");
const product_module_1 = require("./products/product.module");
const category_module_1 = require("./categories/category.module");
const dotenv_1 = require("dotenv");
const cross_1 = require("./middlewares/cross");
(0, dotenv_1.config)();
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(cross_1.CorsMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                url: "postgres://cmhignih:IW5E8LuKWvyTNAK59CMMPyaoPf_6Ev2h@isabelle.db.elephantsql.com/cmhignih",
                entities: [product_entity_1.Product, category_entity_1.Category],
                database: "cmhignih",
                synchronize: true
            }),
            product_module_1.ProductModule,
            category_module_1.CategoryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map