<template>
  <Header />
  <div class="main">
    <div class="main__sidebar">
      <sidebar/>
    </div>
    <div class="main__body">
      <product-list />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    ProductList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600&family=Roboto:wght@100;300;400&display=swap');
body {
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Mulish', sans-serif;
}
.main{
  width: 100%;
  display: flex;
}
.main .main__sidebar{
  width: 240px;
  border: 3px solid lightgray;
  border-right: none;
}
.main .main__body{
  width: -webkit-calc(100% - 240px);
  border: 3px solid lightgray;
}
</style>
