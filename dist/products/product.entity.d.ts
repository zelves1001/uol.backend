import { Category } from '../categories/category.entity';
export declare class Product {
    id: number;
    name: string;
    sku: string;
    category: Category;
    categoryId: number;
    description: string;
    large_description: string;
    price: number;
    discount_price: number;
    discount_percent: number;
    is_new: boolean;
    has_discount: boolean;
    image_link: string;
    other_images_link: string[];
    created_date: Date;
    updatedAt: Date;
}
