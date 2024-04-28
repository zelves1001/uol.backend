import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './product.dto';
import { UpdateProductDto } from './product.dto';
import { Category } from 'src/categories/category.entity';
export declare class ProductService {
    private readonly productRepository;
    private readonly categoryRepository;
    constructor(productRepository: Repository<Product>, categoryRepository: Repository<Category>);
    findAll(page: number, pageSize: number, sort: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    create(productData: CreateProductDto): Promise<Product>;
    update(id: number, productData: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<void>;
    findByCategory(categoryId: number, page: number, pageSize: number, sort: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByHasDiscount(hasDiscount: boolean, page: number, pageSize: number, sort: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByIsNew(isNew: boolean, page: number, pageSize: number, sort: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByFilter(isNew: boolean, hasDiscount: boolean, page: number, pageSize: number, sort: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByIsNewAndHasDiscount(isNew: boolean, hasDiscount: boolean, page: number, pageSize: number, sort: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByCategoryAndHasDiscount(categoryId: number, hasDiscount: boolean, page: number, pageSize: number, sort: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByCategoryAndIsNew(categoryId: number, isNew: boolean, page: number, pageSize: number, sort: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByCategoryAndIsNewAndHasDiscount(categoryId: number, isNew: boolean, hasDiscount: boolean, page: number, pageSize: number, sort: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByCategoryAndIsNewOrHasDiscount(categoryId: number, isNew: boolean, hasDiscount: boolean, page: number, pageSize: number, sort: 'asc' | 'desc' | 'none'): Promise<Product[]>;
}
