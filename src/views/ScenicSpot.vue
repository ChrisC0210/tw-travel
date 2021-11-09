<template>
<div class="scenicSpot">
  <!-- <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <h6 class="card-subtitle mb-2 text-muted">ScenicSpot subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div> -->
    <div class="container text-center" style="z-index:9;position: absolute;left: 0;right: 0;top:250px;">
    <h3 class="text-center text-shadow white" >找景點</h3>
    <!-- <router-link to="ScenicSpot" class="btn btn-primary white">推薦景點</router-link> -->
    <!-- <a href="../views/ScenicSpot.vue" class="btn btn-primary pink white">推薦景點</a> -->
    </div>
  <Carousel :items-to-show="1" :autoplay="5000" :wrap-around="true">
    <Slide v-for="slide in 1" :key="slide">
      <!-- <div class="carousel__item">{{ slide }}</div> -->
      <div class="carousel__item">
        <img src="../assets/img/img-CarouselHome.png" alt="">
      </div>
    </Slide>
    <template #addons>
      <!-- <Pagination /> -->
    </template>
  </Carousel>

</div>
</template>
<style>
.carousel__item {
  min-height: 450px;
  width: 100%;
  background-color: #EFEFEF;
  /* background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white); */
  color:  #4A4A4A;
  font-size: 20px;
  /* border-radius: 8px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  margin: 0;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { defineComponent } from 'vue'
// { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { Carousel, Slide } from 'vue3-carousel';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide
  }
});
// export default {
//   // data () {
//   //   return {
//   //     title: 'tests ccccc'
//   //   }
//   // }
// };
</script>
