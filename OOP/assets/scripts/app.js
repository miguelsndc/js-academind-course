class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title
    this.imageUrl = imageUrl
    this.description = description
    this.price = price
  }
}

class ProductItem {
  constructor(product) {
    this.product = product
  }

  render() {
    const prodEl = document.createElement('li')
    prodEl.className = 'product-item'
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content"> 
            <h2>${this.product.title}</h2>
            <h3>$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>  
        </div>
      `
    return prodEl
  }
}

class ProductList {
  products = [
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
  ];

  constructor() { }

  render() {
    const renderHook = document.getElementById('app')
    const prodList = document.createElement('ul')
    prodList.className = 'product-list'

    this.products.forEach(product => {
      const productItem = new ProductItem(product)
      const prodEl = productItem.render()
      prodList.append(prodEl)
    })

    renderHook.append(prodList)
  }
}


const productList = new ProductList()
productList.render()
