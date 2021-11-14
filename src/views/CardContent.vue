
<template>
<div class="cardContent">

    <div class="container text-center" style="height: 80px;">
    </div>
<div class="container mt-4">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">找景點</a></li>
    <li class="breadcrumb-item active" aria-current="page">景點內容</li>
  </ol>
</nav>
      <h4 class="pink">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
      </svg>
    景點名稱 Name (String, optional) </h4>
    <div class="row row-cols-1 row-cols-lg-12 align-items-stretch g-6 mb-4">
      <div class="col mb-2">
        <div class="card-2 card card-cover overflow-hidden text-white rounded-5 " style="background-image: url('../assets/img/img-food-1.png');">
          <a href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-views-1.png" alt="">
        <div class="gray-800" style="font-size: 16px;">所屬縣市</div>
        <div class="gray-800" style="font-size: 24px;">景點名稱</div>
          </a>
          <button class="btn white" style=";position: absolute; right: 10px;top:10px;">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
          </button>
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
