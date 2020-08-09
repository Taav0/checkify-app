import { Product } from './product';

export class Category {
    id: string;
    name: string;
    products: Product[];

    constructor(theId: string, theName: string) {
        this.id = theId;
        this.name = theName;
    }

    getId(): string {
        return this.id;
    }

    setId(newId: string) {
         this.id = newId;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string) {
         this.name = newName;
    }
}
