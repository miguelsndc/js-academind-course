const productList = {
  products: [
    {
      title: 'Pillow',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQuV4dSqu_QRdWh-BxEOezYovvEu6NhffYQA&usqp=CAU',
      price: 19.99,
      description: 'A Soft Pillow',
    },
    {
      title: 'Carpet',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8A2DX6uhbXA3QqVQ-CKSSXt0v83zzltVJpQ&usqp=CAU',
      price: 89.99,
      description: 'A Carpet which you might like',
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');

    prodList.className = 'product-list';

    this.products.forEach((prod) => {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl} alt="${prod.title}" ">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    });

    renderHook.append(prodList);
  },
};

productList.render();
