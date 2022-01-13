import axios from 'axios';
export default{
  namespaced: true,

  state(){
    return {
      products: [],

      layout: 'grid', // grid, list

      filterTypes: [],
      selectedFilterTypes: []
    }
  },

  getters:{
    allProducts: (state) => {
      console.log('keldi');

      if (state.selectedFilterTypes.length > 0) {
        return state.products.filter(product => state.selectedFilterTypes.includes(product.product_type));
      }

      return state.products;
    }
  },

  actions:{
    async fetchProducts ( {commit, state  } ) {
      const response = await axios.get("https://kabsa.yallababy.com/api/v1/products/best-selling-products-by-subcategory", {
        headers: {
          secretKey: "1DIPIkKeq8"
        }
      })

      commit('setProducts', response.data.sort((a, b) => a.title.localeCompare(b.title)))

      response.data.forEach(product => {
        if(!state.filterTypes.includes(product.product_type)){
          state.filterTypes.push(product.product_type)
        }
      });

    },
    
    sortProducts ( {commit, state}, e) {
      if(e.target.value==='alphabit'){
        commit('setProducts', state.products.sort((a, b) => a.title.localeCompare(b.title)))
      }
      else if(e.target.value==='toLow'){
        commit('setProducts', state.products.sort((a, b) => b.quantitySold - a.quantitySold))
      }
      else if(e.target.value==='toHigh'){
        commit('setProducts', state.products.sort((a, b) => a.quantitySold - b.quantitySold))
      }
    }
  },

  mutations:{
    setProducts(state, products){
      state.products = products
    },

    setSelectedFilterTypes(state, filters){
      state.selectedFilterTypes = filters;
    },

    changeLayoutType(state, layoutType){
      state.layout = layoutType
    },
  }
}