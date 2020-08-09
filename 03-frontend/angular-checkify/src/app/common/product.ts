import { Category } from './category';

export class Product {

    id: string;
    barcode: string;
    name: string;
    date: Date;
    description: string;
    imageUrl: string;
    category: Category;
    
}