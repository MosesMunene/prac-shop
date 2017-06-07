export class User {
    firstName: string;
    lastName: string;
    email: string;
    token: string;
    role: string;
}

export class Category {
    id: string;
    name: string;
    url: string;
}

export class Product {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
    imageUrl: string;
    image: File;
}