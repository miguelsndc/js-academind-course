class Product { // Primeiro caractere Maiúsculo -> Convenção. ( Pascal Case )
  constructor(title, img, desc, price) {
    this.title = title;
    this.imageUrl = img;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  Items = [];

  addProduct(product) {
    this.Items.push(product)
    this.totalOutput.innerHTML = `<h2>Total: $${1}</h2>`;
  };

  renderShoppingCart() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: $${0}</h2>
      <button>Order Now !</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  };

  renderProductItem() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl} alt="${this.product.title}" ">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  };

}

class ProductList {
  products = [
    new Product(
      'Pillow',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQuV4dSqu_QRdWh-BxEOezYovvEu6NhffYQA&usqp=CAU',
      'A Soft Pillow',
      19.99,
    ),
    new Product(
      'Carpet',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8A2DX6uhbXA3QqVQ-CKSSXt0v83zzltVJpQ&usqp=CAU',
      'A Carpet which you might like',
      89.99,
    ),
  ];

  constructor() { };

  renderProductList() {
    const prodList = document.createElement('ul');

    prodList.className = 'product-list';

    this.products.forEach((prod) => {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.renderProductItem();
      prodList.append(prodEl);
    });

    return prodList;
  };
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    const productList = new ProductList();
    this.cart = new ShoppingCart();
    const cartEl = this.cart.renderShoppingCart();
    const productListEl = productList.renderProductList();

    renderHook.append(cartEl)
    renderHook.append(productListEl)
  };
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  };

  static addProductToCart(product) {
    this.cart.addProduct(product);
  };
}

App.init();




