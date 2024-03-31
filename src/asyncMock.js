const products = [
    {
        id: "1",
        name: "JB4",
        price: "1500usd",
        category: "Performance",
        img: "https://burgertuning.com/cdn/shop/products/N54-JB4-tuner-335-135-z4-335is-335i-135i-1m_580x.jpg?v=1664090902",
        stock: 10,
        description: "Potenciación BMW" 
    },
    {
        id: "2",
        name: "Escape Armytrix",
        price: "7000usd",
        category: "Performance",
        img: "https://www.armytrix.com/cdn/800_530_80_ff_cdn/product-bmw-330i-430i-w-gold-tips/bmw-330i-430i-b48-armytrix-exhaust-01.jpg",
        stock: 5,
        description: "Potenciación Exhaust"
    },
    {
        id: "3",
        name: "BodyKit BMW M4",
        price: "3500usd",
        category: "BodyKits",
        img: "https://jbcustoms.es/public/images/cache/494x372/productos/3469/photo-output-24-1671107475.jpg",
        stock: 2,
        description: "BodyKit BMW"
    },
    {
        id: "4",
        name: "BodyKit Mercedes Benz C63 AMG",
        price: "4000usd",
        category: "BodyKits",
        img: "https://image.made-in-china.com/2f0j00aophABsRHfGj/High-Quality-Auto-Parts-Body-Kit-for-Mercedes-Benz-W205-2016-Modified-to-C63-Amg-Style-Bumper-with-Grille-Hood-Fenders.webp",
        stock: 3,
        description: "BodyKit MB (AMG)"
    },
    {
        id: "5",
        name: "Giros dinámicos AUDI RS",
        price: "180usd",
        category: "Accesorios",
        img: "https://i.ebayimg.com/thumbs/images/g/qRMAAOSw-2Jh3Ujx/s-l640.jpg",
        stock: 6,
        description: "Accesorios-Iluminación"
    },
    {
        id: "6",
        name: "Volante Fibra de carbono + Led's",
        price: "2800usd",
        category: "Accesorios",
        img: "https://m.media-amazon.com/images/I/71IStmIhSxL._AC_UF894,1000_QL80_.jpg",
        stock: 2,
        description: "Volantes"
    },
    {
        id: "7",
        name: "Llantas HRE rodado 19",
        price: "4000usd",
        category: "Llantas",
        img: "https://gtrautoparts.com/wp-content/uploads/2015/10/26641-Llantas-HRE-P101-Forged.jpg",
        stock: 4,
        description: "Llantas"
    },
    {
        id: "8",
        name: "Llantas OZ rodado18",
        price: "2000usd",
        category: "Llantas",
        img: "https://m.media-amazon.com/images/I/61h6MvqM5ZL.jpg",
        stock: 4,
        description: "Llantas"
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productoId));
        }, 1000);
    });
};