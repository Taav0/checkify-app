import { LocationChangeEvent } from '@angular/common';

export class Product {

    id: string;
    barcode: string;
    name: string;
    expireDate: Date;
    description: string;
    imageUrl: string;
    categoryId: string;
}
