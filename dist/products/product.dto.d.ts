export declare class CreateProductDto {
    name: string;
    sku: string;
    description: string;
    large_description: string;
    price: number;
    discount_price: number;
    discount_percent: number;
    is_new: boolean;
    has_discount: boolean;
    image_link: string;
    other_images_link: string[];
    categoryId: number;
}
export declare class UpdateProductDto {
    name?: string;
    sku?: string;
    description?: string;
    large_description?: string;
    price?: number;
    discount_price?: number;
    discount_percent?: number;
    is_new?: boolean;
    has_discount?: boolean;
    image_link?: string;
    other_images_link?: string[];
    categoryId: number;
}
export declare class ProductFilterDto {
    minPrice?: number;
    maxPrice?: number;
    categoryId?: number;
    hasDiscount?: boolean;
}
