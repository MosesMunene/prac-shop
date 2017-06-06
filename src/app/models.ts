export class User {
    firstName: string;
    lastName: string;
    email: string;
    token: string;
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
<<<<<<< HEAD
    price: string;
=======
    category: string;
    price: string;
    imageUrl: string;
    image: File;
>>>>>>> 4df2f36f168df3e1a36c217e7beb07d7b9944f53
}