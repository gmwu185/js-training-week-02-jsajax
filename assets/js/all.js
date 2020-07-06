"use strict";

var obj = {
  data: {
    uuid: 'a70f537b-d0f1-4553-81bb-1767acf549d1',
    products: []
  },
  getData: function getData() {
    var vm = this;
    var url = "https://course-ec-api.hexschool.io/api/".concat(this.data.uuid, "/ec/products");
    axios.get(url).then(function (response) {
      vm.data.products = response.data.data;
      vm.render();
    });
  },
  render: function render() {
    var app = document.getElementById('serviceItems');
    var products = this.data.products;
    var str = '';
    console.log('products', products);
    products.forEach(function (item) {
      str += "\n        <div class=\"col-xl-6 col-xxl-4 mb-12 px-6\">\n          <div class=\"card c-card c-card--hoverShadow border-0\">\n            <div class=\"c-pseudoPhoto c-card__photo--hoverZoomIn\" style=\"background-image: url(".concat(item.imageUrl[0], ");\"></div>\n            <div class=\"card-body p-8\">\n              <h5 class=\"card-title\">").concat(item.title, "</h5>\n              <p class=\"card-text\">").concat(item.content, "</p>\n            </div>\n          </div>\n        </div>\n      ");
    });
    app.innerHTML = str;
  }
};
obj.getData();
//# sourceMappingURL=all.js.map
