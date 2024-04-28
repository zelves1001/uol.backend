"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_dto_1 = require("./product.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async findAll(page = 1, pageSize = 16, sort = 'asc') {
        return this.productService.findAll(page, pageSize, sort);
    }
    async findById(id) {
        return this.productService.findById(id);
    }
    async create(productData) {
        return this.productService.create(productData);
    }
    async update(id, productData) {
        return this.productService.update(id, productData);
    }
    async remove(id) {
        await this.productService.remove(id);
    }
    async findByCategory(categoryId, page = 1, pageSize = 16, sort = 'asc') {
        return this.productService.findByCategory(categoryId, page, pageSize, sort);
    }
    async findProductsByHasDiscount(hasDiscount, page = 1, pageSize = 16, sort = 'asc') {
        return this.productService.findProductsByHasDiscount(hasDiscount, page, pageSize, sort);
    }
    async findProductsByIsNew(isNew, page = 1, pageSize = 16, sort = 'asc') {
        return this.productService.findProductsByIsNew(isNew, page, pageSize, sort);
    }
    async findProductsByFilter(isNew, hasDiscount, page = 1, pageSize = 16, sort = 'asc') {
        return this.productService.findProductsByFilter(isNew, hasDiscount, page, pageSize, sort);
    }
    async findProductsByIsNewAndHasDiscount(isNew, hasDiscount, page = 1, pageSize = 16, sort = 'asc') {
        return this.productService.findProductsByIsNewAndHasDiscount(isNew, hasDiscount, page, pageSize, sort);
    }
    async findByCategoryAndHasDiscount(categoryId, hasDiscount, page = 1, pageSize = 16, sort = 'asc') {
        return this.productService.findProductsByCategoryAndHasDiscount(categoryId, hasDiscount, page, pageSize, sort);
    }
    async findByCategoryAndIsNew(categoryId, isNew, page = 1, pageSize = 16, sort = 'asc') {
        return this.productService.findProductsByCategoryAndIsNew(categoryId, isNew, page, pageSize, sort);
    }
    async findByCategoryAndIsNewAndHasDiscount(categoryId, isNew, hasDiscount, page = 1, pageSize = 16, sort = 'asc') {
        return this.productService.findProductsByCategoryAndIsNewAndHasDiscount(categoryId, isNew, hasDiscount, page, pageSize, sort);
    }
    async findByCategoryAndIsNewOrHasDiscount(categoryId, isNew, hasDiscount, page = 1, pageSize = 16, sort = 'asc') {
        return this.productService.findProductsByCategoryAndIsNewOrHasDiscount(categoryId, isNew, hasDiscount, page, pageSize, sort);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('category/:categoryId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findByCategory", null);
__decorate([
    (0, common_1.Get)('hasDiscount/:hasDiscount'),
    __param(0, (0, common_1.Param)('hasDiscount')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findProductsByHasDiscount", null);
__decorate([
    (0, common_1.Get)('isNew/:isNew'),
    __param(0, (0, common_1.Param)('isNew')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findProductsByIsNew", null);
__decorate([
    (0, common_1.Get)('isNewOrHasDiscount/:isNew/:hasDiscount'),
    __param(0, (0, common_1.Param)('isNew')),
    __param(1, (0, common_1.Param)('hasDiscount')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('pageSize')),
    __param(4, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, Boolean, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findProductsByFilter", null);
__decorate([
    (0, common_1.Get)('isNewAndHasDiscount/:isNew/:hasDiscount'),
    __param(0, (0, common_1.Param)('isNew')),
    __param(1, (0, common_1.Param)('hasDiscount')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('pageSize')),
    __param(4, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, Boolean, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findProductsByIsNewAndHasDiscount", null);
__decorate([
    (0, common_1.Get)('category/:categoryId/hasDiscount/:hasDiscount'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Param)('hasDiscount')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('pageSize')),
    __param(4, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findByCategoryAndHasDiscount", null);
__decorate([
    (0, common_1.Get)('category/:categoryId/isNew/:isNew'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Param)('isNew')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('pageSize')),
    __param(4, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findByCategoryAndIsNew", null);
__decorate([
    (0, common_1.Get)('category/:categoryId/isNew/:isNew/hasDiscount/:hasDiscount'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Param)('isNew')),
    __param(2, (0, common_1.Param)('hasDiscount')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('pageSize')),
    __param(5, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean, Boolean, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findByCategoryAndIsNewAndHasDiscount", null);
__decorate([
    (0, common_1.Get)('categoryOr/:categoryId/isNew/:isNew/hasDiscount/:hasDiscount'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Param)('isNew')),
    __param(2, (0, common_1.Param)('hasDiscount')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('pageSize')),
    __param(5, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean, Boolean, Number, Number, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findByCategoryAndIsNewOrHasDiscount", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map