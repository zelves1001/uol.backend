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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./product.entity");
const category_entity_1 = require("../categories/category.entity");
let ProductService = class ProductService {
    constructor(productRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }
    async findAll(page, pageSize, sort) {
        const skip = (page - 1) * pageSize;
        let options = {
            take: pageSize,
            skip,
        };
        if (sort !== 'none') {
            options.order = { price: sort === 'asc' ? 'ASC' : 'DESC' };
        }
        return this.productRepository.find(options);
    }
    async findById(id) {
        const product = await this.productRepository.findOne({ where: { id } });
        if (!product) {
            throw new common_1.NotFoundException('Produto não encontrado');
        }
        return product;
    }
    async create(productData) {
        const product = new product_entity_1.Product();
        product.name = productData.name;
        product.sku = productData.sku;
        product.description = productData.description;
        product.large_description = productData.large_description;
        product.price = productData.price;
        product.discount_price = productData.discount_price;
        product.discount_percent = productData.discount_percent;
        product.is_new = productData.is_new;
        product.has_discount = productData.has_discount;
        product.image_link = productData.image_link;
        product.other_images_link = productData.other_images_link;
        product.categoryId = productData.categoryId;
        return this.productRepository.save(product);
    }
    async update(id, productData) {
        const product = await this.findById(id);
        for (const key in productData) {
            if (productData.hasOwnProperty(key)) {
                product[key] = productData[key];
            }
        }
        if (productData.categoryId !== undefined) {
            product.categoryId = productData.categoryId;
        }
        return this.productRepository.save(product);
    }
    async remove(id) {
        const productToRemove = await this.findById(id);
        await this.productRepository.remove(productToRemove);
    }
    async findByCategory(categoryId, page, pageSize, sort) {
        const skip = (page - 1) * pageSize;
        let options = {
            where: { categoryId },
            take: pageSize,
            skip,
        };
        if (sort !== 'none') {
            options.order = { price: sort === 'asc' ? 'ASC' : 'DESC' };
        }
        return this.productRepository.find(options);
    }
    async findProductsByHasDiscount(hasDiscount, page, pageSize, sort) {
        const skip = (page - 1) * pageSize;
        let options = {
            where: { has_discount: hasDiscount },
            take: pageSize,
            skip,
        };
        if (sort !== 'none') {
            options.order = { price: sort === 'asc' ? 'ASC' : 'DESC' };
        }
        return this.productRepository.find(options);
    }
    async findProductsByIsNew(isNew, page, pageSize, sort) {
        const skip = (page - 1) * pageSize;
        let options = {
            where: { is_new: isNew },
            take: pageSize,
            skip,
        };
        if (sort !== 'none') {
            options.order = { price: sort === 'asc' ? 'ASC' : 'DESC' };
        }
        return this.productRepository.find(options);
    }
    async findProductsByFilter(isNew, hasDiscount, page, pageSize, sort) {
        const skip = (page - 1) * pageSize;
        const queryBuilder = this.productRepository.createQueryBuilder('product');
        queryBuilder.where('product.is_new = :isNew OR product.has_discount = :hasDiscount', { isNew, hasDiscount });
        queryBuilder.take(pageSize);
        queryBuilder.skip(skip);
        if (sort !== 'none') {
            queryBuilder.orderBy('product.price', sort === 'asc' ? 'ASC' : 'DESC');
        }
        return queryBuilder.getMany();
    }
    async findProductsByIsNewAndHasDiscount(isNew, hasDiscount, page, pageSize, sort) {
        const skip = (page - 1) * pageSize;
        let options = {
            where: { is_new: isNew, has_discount: hasDiscount },
            take: pageSize,
            skip,
        };
        if (sort !== 'none') {
            options.order = { price: sort === 'asc' ? 'ASC' : 'DESC' };
        }
        return this.productRepository.find(options);
    }
    async findProductsByCategoryAndHasDiscount(categoryId, hasDiscount, page, pageSize, sort) {
        const skip = (page - 1) * pageSize;
        let options = {
            where: { categoryId, has_discount: hasDiscount },
            take: pageSize,
            skip,
        };
        if (sort !== 'none') {
            options.order = { price: sort === 'asc' ? 'ASC' : 'DESC' };
        }
        return this.productRepository.find(options);
    }
    async findProductsByCategoryAndIsNew(categoryId, isNew, page, pageSize, sort) {
        const skip = (page - 1) * pageSize;
        let options = {
            where: { categoryId, is_new: isNew },
            take: pageSize,
            skip,
        };
        if (sort !== 'none') {
            options.order = { price: sort === 'asc' ? 'ASC' : 'DESC' };
        }
        return this.productRepository.find(options);
    }
    async findProductsByCategoryAndIsNewAndHasDiscount(categoryId, isNew, hasDiscount, page, pageSize, sort) {
        const skip = (page - 1) * pageSize;
        const query = this.productRepository.createQueryBuilder('product');
        if (isNew && hasDiscount) {
            query.where('product.categoryId = :categoryId AND product.is_new = :isNew AND product.has_discount = :hasDiscount')
                .setParameters({ categoryId, isNew, hasDiscount });
        }
        else if (isNew) {
            query.where('product.categoryId = :categoryId AND product.is_new = :isNew')
                .setParameters({ categoryId, isNew });
        }
        else if (hasDiscount) {
            query.where('product.categoryId = :categoryId AND product.has_discount = :hasDiscount')
                .setParameters({ categoryId, hasDiscount });
        }
        else {
            query.where('product.categoryId = :categoryId')
                .setParameter('categoryId', categoryId);
        }
        if (sort !== 'none') {
            query.orderBy('product.price', sort === 'asc' ? 'ASC' : 'DESC');
        }
        const products = await query.skip(skip).take(pageSize).getMany();
        return products;
    }
    async findProductsByCategoryAndIsNewOrHasDiscount(categoryId, isNew, hasDiscount, page, pageSize, sort) {
        const skip = (page - 1) * pageSize;
        const query = this.productRepository.createQueryBuilder('product');
        if (isNew && hasDiscount) {
            query.where('product.categoryId = :categoryId AND (product.is_new = :isNew OR product.has_discount = :hasDiscount)')
                .setParameters({ categoryId, isNew, hasDiscount });
        }
        else if (isNew) {
            query.where('product.categoryId = :categoryId AND product.is_new = :isNew')
                .setParameters({ categoryId, isNew });
        }
        else if (hasDiscount) {
            query.where('product.categoryId = :categoryId AND product.has_discount = :hasDiscount')
                .setParameters({ categoryId, hasDiscount });
        }
        else {
            query.where('product.categoryId = :categoryId')
                .setParameter('categoryId', categoryId);
        }
        if (sort !== 'none') {
            query.orderBy('product.price', sort === 'asc' ? 'ASC' : 'DESC');
        }
        const products = await query.skip(skip).take(pageSize).getMany();
        return products;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map