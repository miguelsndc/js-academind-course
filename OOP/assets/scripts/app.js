class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title
    this.imageUrl = imageUrl
    this.description = description
    this.price = price
  }
}

console.log(new Product("Pillow", "", "Lorem psim ds dsaamamdamiifm", 89.99))

const productList = {

  products: [
    new Product(
      'A Pillow',
      'https://images.unsplash.com/photo-1570786240066-c0d753711cfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      19.99,
      'A Soft Pillow'
    ),
    new Product(
      'A Carpet',
      'https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      89.99,
      'A carpet which you might like'
    ),
  ],

  render() {
    const renderHook = document.getElementById('app')
    const prodList = document.createElement('ul')
    prodList.className = 'product-list'

    this.products.forEach((product) => {
      prodEl = document.createElement('li')
      prodEl.className = 'product-item'
      prodEl.innerHTML = `
        <div>
          <img src="${product.imageUrl}" alt="${product.title}">
          <div class="product-item__content"> 
            <h2>${product.title}</h2>
            <h3>$${product.price}</h3>
            <p>${product.description}</p>
            <button>Add to Cart</button>
          </div>  
        </div>
      `
      prodList.append(prodEl)
    })

    renderHook.append(prodList)
  }
};

productList.render()
