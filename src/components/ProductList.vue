<template>
  <product-list-header/>
  <div :class="`products ${this.layout}`">
    <Product v-for='product in allProducts' :key='product.id' :product='product' />
  </div>
</template>

<script>
import ProductListHeader from './ProductListHeader.vue'
import Product from './Product.vue'

import {mapGetters, mapActions, mapState} from 'vuex'

export default {
  name:'ProductList',

  components:{
    ProductListHeader,
    Product,
  },

  methods: {
    ...mapActions('products', ['fetchProducts'])
  },

  computed: {
    ...mapGetters('products', ['allProducts']),
    ...mapState('products', ['layout'])
  },

  async created(){
    await this.fetchProducts();
    console.log(this.allProducts)
  }
}
</script>

<style>
  .products{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .layout{
    display: flex;
    justify-content: flex-start;
  }
</style>