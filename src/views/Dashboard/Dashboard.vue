<template>
  <div class="main-frame">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="dashboard">
      <h1 class="heading">Dashboard</h1>
      <div class="input-box">
        <input
          class="input-field"
          placeholder="Search employee data..."
          v-model="searchQuery"
        />
        <i class="fa fa-search"></i>
      </div>
      <div class="notification-bell">
        <svg
          width="20"
          height="20"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.1718 10.4223C23.1718 8.43315 22.3816 6.5255 20.9751 5.11898C19.5686 3.71245 17.6609 2.92228 15.6718 2.92228C13.6827 2.92228 11.775 3.71245 10.3685 5.11898C8.96197 6.5255 8.17179 8.43315 8.17179 10.4223C8.17179 19.1723 4.42179 21.6723 4.42179 21.6723H26.9218C26.9218 21.6723 23.1718 19.1723 23.1718 10.4223Z"
            stroke="rgba(0, 0, 0, 0.4)"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.8343 26.6723C17.6145 27.0511 17.2991 27.3656 16.9196 27.5842C16.5401 27.8028 16.1098 27.9178 15.6718 27.9178C15.2338 27.9178 14.8035 27.8028 14.424 27.5842C14.0445 27.3656 13.7291 27.0511 13.5093 26.6723"
            stroke="rgba(0, 0, 0, 0.4)"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="indicator"></div>
      </div>
      <div class="user-image">
        <!-- <img src="../../assets/images.png" /> -->
      </div>
    </div>
    <div v-for="employee of resultQuery" :key="employee.id">
      <p>{{ employee.name }} || {{ employee.description }}</p>
    </div>
  </div>
</template>

<script>
import dashboard from "./dashboard";

export default dashboard;
</script>


<style src="./dashboard.css"></style>


