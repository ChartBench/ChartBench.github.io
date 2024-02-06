<template>
  <h2>ChartBench Overview</h2>
  <br><br>
  <div class="swiperBox">
    <swiper
      :spaceBetween="5"
      :loop="true"
      :slidesPerView="5"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="/images/contents/samples/line/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/line/2.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/line/3.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/line/4.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/line/5.png"></swiper-slide>

      <swiper-slide><img src="/images/contents/samples/horizontal_bar/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/horizontal_bar/2.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/horizontal_bar/3.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/horizontal_bar/4.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/horizontal_bar/5.png"></swiper-slide>

      <swiper-slide><img src="/images/contents/samples/vertical_bar/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/vertical_bar/2.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/vertical_bar/3.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/vertical_bar/4.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/vertical_bar/5.png"></swiper-slide>

      <swiper-slide><img src="/images/contents/samples/threeD_bar/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/threeD_bar/2.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/threeD_bar/3.png"></swiper-slide>

      <swiper-slide><img src="/images/contents/samples/pie/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/pie/2.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/pie/3.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/pie/4.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/pie/5.png"></swiper-slide>
    </swiper>
  </div>
  <div class="swiperBox">
    <swiper
      :spaceBetween="5"
      :loop="true"
      :slidesPerView="5"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="/images/contents/samples/node/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/node/2.png"></swiper-slide>

      <swiper-slide><img src="/images/contents/samples/radar/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/radar/2.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/radar/3.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/radar/4.png"></swiper-slide>

      <swiper-slide><img src="/images/contents/samples/box/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/box/2.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/box/3.png"></swiper-slide>

      <swiper-slide><img src="/images/contents/samples/area/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/area/2.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/area/3.png"></swiper-slide>

      <swiper-slide><img src="/images/contents/samples/scatter/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/scatter/2.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/scatter/3.png"></swiper-slide>

      <swiper-slide><img src="/images/contents/samples/combination/1.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/combination/2.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/combination/3.png"></swiper-slide>
      <swiper-slide><img src="/images/contents/samples/combination/4.png"></swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style lang="postcss" scoped>
  .swiperBox {
    width: 100%;
  }
  .swiper-slide img{
    width: 100%;
  }
</style>