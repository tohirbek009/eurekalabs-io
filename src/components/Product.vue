<template>
  <div :class="`product_${this.layout}`">
    <div class="image">
      <img :src='product.image.src' />
    </div>
    <div class="product-info">
      <div class="title">{{product.title}}</div>
      <div class="price">{{product.quantitySold}}</div>
      <div class="type">{{product.product_type}}</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Product',
  props: {
    product: Object
  },
  computed: {
    ...mapState('products', ['layout'])
  }
}
</script>

<style>
  .product_grid{
    width: 26%;
    border: 2px solid lightblue;
    border-radius: 10px;
    margin-top: 20px;
  }
  .product_grid .image{
    width: 100%;
    height: 300px;
    padding: 10px;
    border-bottom: 1px solid lightblue;
    box-sizing: border-box;
  }
  .product_grid .image img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .product_grid .product-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .product_grid .product-info .title{
    font-size: 22px;
    color: rgb(157, 109, 37);
    text-align: center;
  }
   .product_grid .product-info .price{
     color: crimson;
     margin: 7px 0;
   }
  .product_grid .product-info .type{
    color: gray;
    font-weight: bold;
    font-size: 18px;
  }

  .product_layout{
    display: flex;
    width: 100%;
    border-bottom: 2px solid lightblue;
  }
  .product_layout .image{
    width: 700px;
    height: 300px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    /* margin-right: 10px; */
  }
  .product_layout .image img{
    height: 100%;
    object-fit: contain;
  }
  .product_layout .product-info .title{
    font-size: 22px;
    color: rgb(157, 109, 37);
    text-align: center;
  }
   .product_layout .product-info .price{
     color: crimson;
     margin: 7px 0;
   }
  .product_layout .product-info .type{
    color: gray;
    font-weight: bold;
    font-size: 18px;
  }
</style>