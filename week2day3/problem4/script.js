const ProductApp = (() => {
  // State  
  const state = {
    products: [
      "iPhone 15",
      "Samsung Galaxy S23",
      "MacBook Air",
      "Dell XPS 13",
      "Sony Headphones",
      "Apple Watch",
      "iPad Pro",
      "HP Pavilion"
    ],
    filteredProducts: []
  };

  // DOM Elements
  
  const searchInput = document.getElementById("searchInput");
  const productList = document.getElementById("productList");


  // Render Products
 
  const renderProducts = (products) => {
    productList.innerHTML = "";

    if (products.length === 0) {
      productList.innerHTML = `<li class="no-results">No Results Found</li>`;
      return;
    }

    const fragment = document.createDocumentFragment();

    products.forEach(product => {
      const li = document.createElement("li");
      li.textContent = product;
      fragment.appendChild(li);
    });

    productList.appendChild(fragment);
  };

 
  // Filter Logic

  const filterProducts = (query) => {
    state.filteredProducts = state.products.filter(product =>
      product.toLowerCase().includes(query.toLowerCase())
    );

    renderProducts(state.filteredProducts);
  };

 
  // Event Handler (Delegation)
 
  const handleEvents = (e) => {

    // Real-time search
    if (e.target.id === "searchInput") {
      filterProducts(e.target.value);
    }

    // Example click delegation (future scalability)
    if (e.target.tagName === "LI") {
      alert(`You selected: ${e.target.textContent}`);
    }
  };

 
  // Initialize App
 
  const init = () => {
    state.filteredProducts = state.products;
    renderProducts(state.products);

    document.addEventListener("input", handleEvents);  // 🔥 Delegation
    productList.addEventListener("click", handleEvents); // 🔥 Delegation
  };

  return { init };

})();

ProductApp.init();
