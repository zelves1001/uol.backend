import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    findAll(): Promise<Category[]>;
    create(categoryData: CreateCategoryDto): Promise<Category>;
    remove(id: number): Promise<void>;
}
