import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductDto, UpdateProductDto } from './product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(page?: number, pageSize?: number, sort?: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    create(productData: CreateProductDto): Promise<Product>;
    update(id: number, productData: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<void>;
    findByCategory(categoryId: number, page?: number, pageSize?: number, sort?: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByHasDiscount(hasDiscount: boolean, page?: number, pageSize?: number, sort?: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByIsNew(isNew: boolean, page?: number, pageSize?: number, sort?: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByFilter(isNew: boolean, hasDiscount: boolean, page?: number, pageSize?: number, sort?: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findProductsByIsNewAndHasDiscount(isNew: boolean, hasDiscount: boolean, page?: number, pageSize?: number, sort?: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findByCategoryAndHasDiscount(categoryId: number, hasDiscount: boolean, page?: number, pageSize?: number, sort?: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findByCategoryAndIsNew(categoryId: number, isNew: boolean, page?: number, pageSize?: number, sort?: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findByCategoryAndIsNewAndHasDiscount(categoryId: number, isNew: boolean, hasDiscount: boolean, page?: number, pageSize?: number, sort?: 'asc' | 'desc' | 'none'): Promise<Product[]>;
    findByCategoryAndIsNewOrHasDiscount(categoryId: number, isNew: boolean, hasDiscount: boolean, page?: number, pageSize?: number, sort?: 'asc' | 'desc' | 'none'): Promise<Product[]>;
}
