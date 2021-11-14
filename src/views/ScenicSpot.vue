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
<div class="container mt-4">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">找景點</li>
  </ol>
</nav>
      <h4 class="pink"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-tree" viewBox="0 0 16 16">
  <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"/>
</svg>
      熱門景點</h4>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-6 mb-4">
      <div class="col mb-2">
        <div class="card-2 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <router-link to="../cardContent" class="d-flex flex-column text-white">
          <img src="../assets/img/img-views-1.png" alt="">
        <div class="gray-800" style="font-size: 16px;">所屬縣市</div>
        <div class="gray-800" style="font-size: 24px;">景點名稱</div>
          </router-link>
          <a style="position: absolute; right: 10px;top:10px;">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
          </a>
        </div>
      </div>
      <div class="col mb-2">
        <div class="card-2 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <router-link to="../cardContent" class="d-flex flex-column text-white">
          <img src="../assets/img/img-views-2.png" alt="">
        <div class="gray-800" style="font-size: 16px;">所屬縣市</div>
        <div class="gray-800" style="font-size: 24px;">景點名稱</div>
          </router-link>
          <a style="position: absolute; right: 10px;top:10px;">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
          </a>
        </div>
      </div>
      <div class="col mb-2">
        <div class="card-2 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <router-link to="../cardContent" class="d-flex flex-column text-white">
          <img src="../assets/img/img-views-3.png" alt="">
        <div class="gray-800" style="font-size: 16px;">所屬縣市</div>
        <div class="gray-800" style="font-size: 24px;">景點名稱</div>
          </router-link>
          <a style="position: absolute; right: 10px;top:10px;">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
          </a>
        </div>
      </div>

    </div>
</div>

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
