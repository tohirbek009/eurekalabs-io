<template>
  <div class="sidebar">
    <div class="sidebar__title">Filter Results</div>
    <div class="sidebar__item">
      <div class="item__title">Product Type</div>

      <div 
        class="item__content" 
        v-for='filterType in filterTypes' 
        :key='filterType'
      >
        <input type="checkbox" :id='filterType' :value="filterType" v-model='selectedFilters'>
        <label :for='filterType'>{{filterType}}</label>
      </div>
    </div>
    <div class="sidebar__item-slider">
      <div class="item__title">Price Range</div>
      <div class='min-max'>
        <span>Min</span>
        <span>Max</span>
      </div>
      <input type="range" min="1" max="100" value="20" id="myRange">
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {

  methods: {
    ...mapMutations('products', ['setSelectedFilterTypes'])
  },

  computed: {
    ...mapState('products', ['filterTypes', 'selectedFilterTypes']),
  
    selectedFilters: {
      get(){
        return this.selectedFilterTypes;
      },

      set(val){
        this.setSelectedFilterTypes(val);
      },
    },
    
  },
}
</script>

<style>
  .sidebar{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 10px;
    box-sizing: border-box;
    width: 100%;
  }
  .sidebar .sidebar__title{
    text-align: center;
    padding-bottom: 15px;
  }
  .sidebar .sidebar__item .item__content{
    display: flex;
    align-items: center;
    margin-top: 7px;
    margin-left: 8px;
  }
  .sidebar .sidebar__item .item__content input{
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  .sidebar .sidebar__item .item__content label{
    margin-left: 5px;
    cursor: pointer;
    color: gray;
  }
  .sidebar .sidebar__item-slider{
    margin-top: 15px;
  }
  .sidebar .sidebar__item-slider .item__title{
    margin-bottom: 10px;
  }
  .sidebar .sidebar__item-slider .min-max{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .sidebar .sidebar__item-slider input{
    width: 100%;
  }
  .sidebar .sidebar__item-slider input {
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    border: 2px solid gray;
    background: white;
    outline: none;
    opacity: 1;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }

  .sidebar .sidebar__item-slider input:hover {
    opacity: 1;
  }

  .sidebar .sidebar__item-slider input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 30px;
    border-radius: 5px;
    background: #048c5a;
    cursor: pointer;
  }
</style>