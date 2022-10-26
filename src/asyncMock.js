const productos = [
    {
        id: '1',
        name: 'Iphone 12',
        price: '1000',
        category: 'Celular',
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-white-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202752000',
        stock: 25,
        description: 'Hola soy una descripcion!! :)'
    },
    { id: '2', name: 'Iphone 13', price: '2000', category: 'Celular', img: 'https://www.macstation.com.ar/img/productos/2634-2566-1.jpg', stock: 15, description: 'Hola soy una descripcion!! :)' },
    { id: '3', name: 'Iphone 14', price: '10000', category: 'Celular', img: 'https://www.clarin.com/img/2022/02/13/como-de-costumbre-se-espera___qWevBwe1u_2000x1500__1.jpg', stock: 5, description: 'Hola soy una descripcion!! :)' },
    { id: '4', name: 'MacBook Air 13', price: '50000', category: 'Notebook', img: 'https://www.macstation.com.ar/img/productos/small/2205-2210-1.jpg', stock: 2, description: 'Hola soy una descripcion!! :)' },
    { id: '5', name: 'Apple Watch Series 7', price: '25000', category: 'Reloj', img: 'https://www.macstation.com.ar/img/productos/2685-1.jpg', stock: 50, description: 'Hola soy una descripcion!! :)' },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtro = productos.filter(producto => {
                if (producto.id === id) {
                    return producto
                }
            })
            resolve(...filtro)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(producto => producto.category === categoryId))
        }, 500)
    })
}