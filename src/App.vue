<template>
  <div id="app">
<!--    <keep-alive exclude="Details">-->
    <router-view></router-view>
<!--    </keep-alive>-->
    <maintabbar></maintabbar>
  </div>
</template>


<script>
import maintabbar from "components/content/mainTabBar/maintabbar";

export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>


<style>
@import 'assets/css/base.css';
</style>
