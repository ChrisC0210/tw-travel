<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <CarouselHome></CarouselHome>
    <div class="container">
    <h4 class="pink">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-egg-fried" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
</svg>
      各地美食</h4>
    <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-6 mb-4">
      <div class="col mb-2">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-food-1.png" alt="">
            <p class="text-center gray-800" style="font-size: 26px;">台南美食</p>
          </a>
        </div>
      </div>
      <div class="col mb-2">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-food-2.png" alt="">
            <p class="text-center gray-800" style="font-size: 26px;">台北美食</p>
          </a>
        </div>
      </div>
      <div class="col mb-2">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-food-3.png" alt="">
            <p class="text-center gray-800" style="font-size: 26px;">高雄美食</p>
          </a>
        </div>
      </div>
      <div class="col mb-2">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-food-4.png" alt="">
            <p class="text-center gray-800" style="font-size: 26px;">基隆美食</p>
          </a>
        </div>
      </div>

    </div>
    <h4 class="pink"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-tree" viewBox="0 0 16 16">
  <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"/>
</svg>
      熱門景點</h4>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-6 mb-4">
      <div class="col mb-2">
        <div class="card-2 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-views-1.png" alt="">
        <div class="gray-800" style="font-size: 16px;">所屬縣市</div>
        <div class="gray-800" style="font-size: 24px;">景點名稱</div>
          </a>
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
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-views-2.png" alt="">
        <div class="gray-800" style="font-size: 16px;">所屬縣市</div>
        <div class="gray-800" style="font-size: 24px;">景點名稱</div>
          </a>
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
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-views-3.png" alt="">
        <div class="gray-800" style="font-size: 16px;">所屬縣市</div>
        <div class="gray-800" style="font-size: 24px;">景點名稱</div>
          </a>
          <a style="position: absolute; right: 10px;top:10px;">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
          </a>
        </div>
      </div>

    </div>

    <h4 class="pink pt-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
</svg>
      住宿精選</h4>
    <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-6 mb-4">
      <div class="col mb-2">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-live-1.png" alt="">
            <p class="text-center gray-800" style="font-size: 26px;">台南住宿</p>
          </a>
        </div>
      </div>
      <div class="col mb-2">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-live-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-live-2.png" alt="">
            <p class="text-center gray-800" style="font-size: 26px;">台北住宿</p>
          </a>
        </div>
      </div>
      <div class="col mb-2">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-live-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-live-3.png" alt="">
            <p class="text-center gray-800" style="font-size: 26px;">高雄住宿</p>
          </a>
        </div>
      </div>
      <div class="col mb-2">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-live-4.png" alt="">
            <p class="text-center gray-800" style="font-size: 26px;">基隆住宿</p>
          </a>
        </div>
      </div>

    </div>
      <h4 class="pink">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
      最近活動</h4>
      <div class="row">
      <div class="col-md-10 order-md-2">
        <h2 class="gray-800" style="font-size: 24px;">活動名稱</h2>
        <div class="gray-800" style="font-size: 16px;">地點：縣市名稱</div>
        <div class="gray-800" style="font-size: 16px;">發佈日期：2021-10-29</div>
        <div class="gray-800" style="font-size: 16px;">活動簡述 Description (String, optional): Description (String, optional)</div>
        <!-- <div class="gray-800" style="font-size: 24px;">景點名稱</div> -->
      </div>
      <div class="col-md-2 order-md-1">
              <div class="col">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="min-height: 150px;background-image: url('../assets/img/img-live-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-live-2.png" alt="">
          </a>
        </div>
      </div>
        <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->

      </div>
    </div>
    <div class="row">
      <div class="col-md-10 order-md-2">
        <h2 class="gray-800" style="font-size: 24px;">活動名稱</h2>
        <div class="gray-800" style="font-size: 16px;">地點：縣市名稱</div>
        <div class="gray-800" style="font-size: 16px;">發佈日期：2021-10-29</div>
        <div class="gray-800" style="font-size: 16px;">活動簡述 Description (String, optional): Description (String, optional)</div>
        <!-- <div class="gray-800" style="font-size: 24px;">景點名稱</div> -->
      </div>
      <div class="col-md-2 order-md-1">
              <div class="col">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="min-height: 150px;background-image: url('../assets/img/img-live-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-live-2.png" alt="">
          </a>
        </div>
      </div>
        <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->

      </div>
    <hr class="">
    </div>
    </div>
  </div>
</template>

<style>
.card-1{
  min-height: 190px;
  /* max-width: 250px; */
  border-radius: 10px;
  border: solid 0px;
}
.card-1 img{
  width: 100%;
  /* height: 190px; */
  object-fit: cover;
}
.card-1 img:hover{
  transform: scale(1.1);
}
.card-2{
  min-height: 350px;
  /* max-width: 350px; */
  border-radius: 10px;
  border: solid 0px;
}
.card-2 img{
  width: 100%;
  /* height: 190px; */
  object-fit: cover;
}
.card-2 img:hover{
  transform: scale(1.02);
}
</style>

<script>
// @ is an alias to /src
import CarouselHome from '@/components/CarouselHome.vue';

export default {
  name: 'Home',
  components: {
    CarouselHome
  }
}
</script>
