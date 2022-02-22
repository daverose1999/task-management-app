<template>
  <div class="sidebar">
    <div class="logo">
      <div class="line"></div>
      <img class="text" src="../../assets/iniLogo.svg" />
      <div class="line2"></div>
    </div>
    <div class="links-container">
      <router-link class="link" to="/">
        <i id="icon" class="fas fa-user-friends"></i>
        <p class="link-text">Employees</p>
      </router-link>
      <router-link class="link" to="/progress">
        <i id="icon" class="fas fa-stopwatch"></i>
        <p class="link-text">Employee Progress</p>
      </router-link>

      <router-link class="link" to="/completed-tasks">
        <i id="icon" class="fas fa-tasks"></i>
        <p class="link-text">Completed Tasks</p>
      </router-link>

      <router-link class="link" to="/support">
        <i id="icon" class="fas fa-question-circle"></i>
        <p class="link-text">Support</p>
      </router-link>
    </div>

    <router-link class="logout-link" to="/logout">
      <i class="fa fa-sign-out"></i>
      <p class="link-text">Log Out</p>
    </router-link>
  </div>
</template>

<style src="./sidebar.css"></style>
