<template>
<div id="home">
  <nav-bar>
    <div slot="left" class="left"></div>
    <div slot="center" class="home-nav">购物街</div>
    <div slot="right" class="right"></div>
  </nav-bar>
  <home-swiper :banners="banners" @swipperImageLoad = "swipperImageLoad"></home-swiper>
  <recommend-view v-bind:recommends="recommends"/>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childenComps/HomeSwiper";
import RecommendView from "@/views/home/childenComps/RecommendView";
import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  data(){
    return {
      banners: [],
      recommends:[],
      tabOffsetTop:0,
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    getHomeMultidata().then(res=>{
      console.log(res.data.banner.list)
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
  },
  methods:{
    swipperImageLoad(){
      console.log(this.$refs)
      // this.tabOffsetTop = this.$refs
    }
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
}
.right,.left{
  background-color: var(--color-tint);
}

</style>
