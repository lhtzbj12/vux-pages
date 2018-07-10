<template>
  <div style="width: 100%;height: 100%">
    <view-box  ref="viewBox">
      <x-header>历年真题</x-header>
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" @on-item-click="index=0">材料</tab-item>
        <tab-item class="vux-center"  @on-item-click="index=1">题干</tab-item>
      </tab>
      <swiper height="100px" :show-dots="false" v-model="index" >
        <swiper-item>
          <div class="tab-swiper vux-center" >这是材料内容</div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center" >这是题干题干内容</div>
        </swiper-item>
      </swiper>
    </view-box>

  </div>
</template>

<script>
  import {XHeader, ViewBox, Tab, TabItem, Swiper, SwiperItem} from 'vux'
  export default {
    name: 'question',
    components: {TabItem, ViewBox, XHeader, Tab, Swiper, SwiperItem},
    data () {
      return {
        index: 0
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }
</style>
