import { Product } from '../products/product.entity';
export declare class Category {
    id: number;
    name: string;
    products: Product[];
    image_link: string;
    created_date: Date;
    updatedAt: Date;
}
