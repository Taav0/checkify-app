import { Fridge } from 'src/app/common/fridge';
import { Category } from './category';

export class Product {

    id: string;
    barcode: string;
    name: string;
    date: Date;
    description: string;
    imageUrl: string;
    category: Category;
    fridge: Fridge;
}