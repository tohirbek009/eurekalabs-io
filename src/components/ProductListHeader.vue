<template>
  <div class="product-list-header">
    <div class="left">
      <div class="reslut">Available Deals: </div>
    </div>
    <div class="right">
      <div class="icons">
        <box-icon v-if="layout!=='grid'" name='grid-alt' @click='changeLayoutType("grid")'></box-icon> 
        <box-icon v-if="layout==='grid'" name='grid-alt' type='solid' @click='changeLayoutType("grid")'></box-icon> 
        <box-icon class='list-icon' name='list-ul'  @click='changeLayoutType("layout")'></box-icon>
      </div>
      <div class="sort">
        <label for='products'>Sort result</label>
        <select id='products' @click="sortProducts($event)">
          <option value="alphabit">A-Z</option>
          <option value="toLow">High to Low</option>
          <option value="toHigh">Low to High</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
    methods: {
      ...mapActions('products',['sortProducts']),
      ...mapMutations('products',['changeLayoutType'])
    },
    computed: {
      ...mapState('products', ['layout'])
    }
}
</script>

<style>
  .product-list-header{
    width: 100%;
    border-bottom: 3px solid lightgray; 
    padding: 6px 10px 6px 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .product-list-header .right{
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .product-list-header .right .icons{
    margin-right: 40px;
  }
  .product-list-header .right .icons box-icon{
    margin-left: 20px;
    cursor: pointer;
  }
  .product-list-header .right .sort label{
    margin-right: 5px;
  }
</style>