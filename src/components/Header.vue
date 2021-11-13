<template>
  <div class="header">
    <!-- <div class="shadow-sm">
  <nav id="nav" class="navbar navbar-expand container" aria-label="Second navbar example">
    <div class="container-fluid">
      <router-link to="/" class="me-4">
      <img src="../assets/tw-travel-logo.svg" alt="">
    </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="../scenicSpot" class="me-4">找景點</router-link>
          </li>
          <li class="nav-item">
            <router-link to="../restaurant" class="me-4">找餐廳</router-link>
          </li>
          <li class="nav-item">
            <router-link to="../hotelTour" class="me-4">找住宿</router-link>
          </li>
          <li class="nav-item">
            <router-link to="../activityTour" class="me-4">找活動</router-link>
          </li>
        </ul>
        <span class="me-2">
          <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
          </a>
        </span>
        <span class="me-2">
          <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
      </svg>
          </a>
        </span>

      </div>
    </div>
  </nav>
</div> -->
<header class="fixed-top">
  <div class="shadow-sm mb-2" style="background-color: #fff;">
      <nav class="navbar navbar-expand-md container">
    <div class="container-fluid">
            <router-link to="/" class="me-4">
      <img src="../assets/tw-travel-logo.svg" alt="">
    </router-link>
      <button class="navbar-toggler gray-800" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse show" id="navbarCollapse" style="">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="../scenicSpot" class="me-4">找景點</router-link>
          </li>
          <li class="nav-item">
            <router-link to="../restaurant" class="me-4">找餐廳</router-link>
          </li>
          <li class="nav-item">
            <router-link to="../hotelTour" class="me-4">找住宿</router-link>
          </li>
          <li class="nav-item">
            <router-link to="../activityTour" class="me-4">找活動</router-link>
          </li>
        </ul>
                <span class="me-2">
          <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
          </a>
        </span>
        <span class="me-2">
            <router-link to="../myList" class="me-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
      </svg></router-link>
        </span>
      </div>
    </div>
  </nav>
  </div>
  <div class="d-flex justify-content-center mb-4">
    <form class=" col-lg-6 col-sm-12 shadow-lg p-3 bg-body" style="border-radius: 50px;">
      <div class="d-flex grid" style="--bs-columns: 12;">
        <select class="g-col-2 " aria-label=".form-select-lg example" style="font-weight: 300;font-size:20px;border: 0px;">
          <option value="1">找景點</option>
          <option value="2">找餐廳</option>
          <option value="3">找住宿</option>
          <option value="4">找活動</option>
        </select>
        <select class="g-col-2 " aria-label=".form-select-lg example" style="font-weight: 300;font-size:20px;border: 0px;">
          <option selected>選擇縣市</option>
          <option value="1">台北市</option>
          <option value="2">新北市</option>
          <option value="3">宜蘭市</option>
        </select>
        <!-- <span class="" style="font-size: 26px;color:#333333;">｜</span> -->
        <input class="g-col-6 form-control" type="search" placeholder="｜輸入搜尋內容" aria-label="Search" style="font-weight: 300;font-size:20px;border: 0px;">
        <!-- <button class="g-col-2 btn pink" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
        </button> -->
        <router-link to="../searchPage" class="me-4 mt-2 g-col-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      </router-link>
      </div>
      </form>
  </div>

</header>
  </div>
</template>
