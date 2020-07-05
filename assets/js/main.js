var obj = {
  data: {
    uuid: 'a70f537b-d0f1-4553-81bb-1767acf549d1',
    products: [],
  },
  getData: function() {
    var vm = this;
    var url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;

    axios.get(url)
      .then(function (response) {
        vm.data.products = response.data.data;
        vm.render();
      })
  },
  render: function() {
    var app = document.getElementById('app');
    var products = this.data.products;
    var str = '';
    console.log('products', products);
    products.forEach(function(item) {
      str += `
        <div class="card">
          <img src="${ item.imageUrl[0] }" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${ item.title }</h5>
            <p class="card-text">${ item.content }</p>
          </div>
        </div>
      `;
    });
    app.innerHTML = str;
  }
}

obj.getData();