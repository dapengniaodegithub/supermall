<template>
<div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
</div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 15px 0 30px;
  border-bottom: #eeeeee solid 1px;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 75px;
  height: 75px;
  margin-bottom: 20px;
}
</style>
