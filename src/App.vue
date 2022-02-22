<template>
  <div id="app">
    <div id="nav">
      <!--
      <router-link to="/">Dashboard</router-link>|
      <router-link to="/about">About</router-link>
      -->
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Nunito Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #e7ecf0;
}

::-webkit-scrollbar {
  background: #e7ecf0;

  width: 26px;
}
::-webkit-scrollbar-track {
  background-color: #cdcfd6;
  border-radius: 17px;
  border: 10px solid transparent;
  background-clip: content-box;
  box-shadow: inset 2px 2px 2px white, inset -2px -2px 2px #cbced1;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 17px;
  border: 10px solid transparent;
  background-clip: content-box;

  /* change border color to blue to match the background */
}
</style>
