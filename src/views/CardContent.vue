
<template>
<div class="cardContent">

    <div class="container text-center" style="height: 80px;">
    </div>
<div class="container mt-4">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
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
    <div class="row col-12 g-6 mb-4">
      <div class="gray-800" style="font-size: 16px;">City (String, optional): 所屬縣市</div>
      <img src="../assets/img/img-views-1.png" style="height: 400px;object-fit:cover;" >
      <div class="gray-800" style="font-size: 16px;">景點特色精簡說明 Description (String, optional) </div>
      <div class="gray-800 mt-4" style="font-size: 24px;">景點資訊</div>
      <div class="gray-800" style="font-size: 16px;">開放時間：OpenTime (String, optional): 開放時間</div>
      <div class="gray-800" style="font-size: 16px;">服務電話 ：Phone (String, optional): 景點服務電話 </div>
      <div class="gray-800" style="font-size: 16px;">票價資訊 ：TicketInfo (String, optional): 票價資訊 </div>
      <div class="gray-800" style="font-size: 16px;">地址：Address (String, optional): 景點地址</div>
      <div class="gray-800" style="font-size: 16px;">交通資訊：TravelInfo (String, optional): 交通資訊</div>
      <div class="gray-800" style="font-size: 16px;">其他：WebsiteUrl (String, optional): 景點官方網站網址</div>
      <hr class="mb-4 mt-4">
            <div class="gray-800 mt-4" style="font-size: 24px;">景點介紹</div>
      <div class="gray-800" style="font-size: 16px;">DescriptionDetail (String, optional): 景點特色詳細說明 </div>
      <div class="gray-800" style="font-size: 16px;">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div class="row mt-4">
      <div class="col-md-6 order-md-2">
        <!-- <h2 class="gray-800" style="font-size: 24px;">活動名稱</h2> -->
        <div class="gray-800" style="font-size: 16px;">PictureDescription1 (String, optional): 照片說明</div>
      </div>
      <div class="col-md-4 order-md-1">
              <div class="col">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="min-height: 150px;background-image: url('../assets/img/img-live-1.png');">
          <div href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-live-2.png" alt="">
          </div>
        </div>
      </div>

      </div>
    <!-- <hr class=""> -->
    </div>
      <div class="row mt-4">
      <div class="col-md-6 order-md-2">
        <!-- <h2 class="gray-800" style="font-size: 24px;">活動名稱</h2> -->
        <div class="gray-800" style="font-size: 16px;">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
      <div class="col-md-4 order-md-1">
              <div class="col">
        <div class="card-1 card card-cover overflow-hidden text-white rounded-5 " style="min-height: 150px;background-image: url('../assets/img/img-live-1.png');">
          <div href="#" class="d-flex flex-column text-white">
            <img src="../assets/img/img-live-1.png" alt="">
          </div>
        </div>
      </div>

      </div>
    <!-- <hr class=""> -->
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
