<template>
  <v-row align="center" class="first-view">
    <v-col cols="12" sm="8" md="6">
      <div class="top-title">
        <h5 class="my-0">The Grand</h5>
        <hr class="border" />
        <h2>Exper<span>i</span>ments</h2>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Teko:wght@500&display=swap");

.first-view {
  position: relative;
  background-image: url("~@/assets/image/akabane.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.top-title {
  line-height: 40px;
}
.top-title h5 {
  font-size: 30px;
  font-family: "Anton", sans-serif;
  font-family: "Teko", sans-serif;
}
.top-title h2 {
  font-size: 50px;
  margin-bottom: 5px;
  font-family: "Anton", sans-serif;
  font-family: "Teko", sans-serif;
}
.top-title span {
  color: red;
}
.top-title hr {
  color: black;
  margin-bottom: 5px;
}
/* 右ボーダー */
.border {
  height: 100%;
  top: 0;
  right: 0;
  transform: translate3d(0, -100%, 0);
  margin-top: 5px;
  margin-bottom: 5px;
}
.border:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: solid 2px #000;
  animation: border_anim 3s linear forwards;
}

@keyframes border_anim {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
