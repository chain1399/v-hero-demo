<script setup lang="ts">
// import foodData from "@/food-data.json";
import { onServerPrefetch, ref, onMounted } from "vue";
const foodData = ref();

const getData = async () => {
  const data = (await import("@/food-data.json")).default;
  if(data){
    foodData.value = data
  }
};
onServerPrefetch(getData);
onMounted(()=>{
  getData()
})


</script>

<template>
  <div class="header-background" v-hero="{ id: 'banner' }"></div>
  <header class="container">
    <router-link
      to="/"
      class="home-link"
      v-hero="{
        enter: {
          x: -200,
          opacity: 0,
        },
      }"
    >
      Food Hero
    </router-link>
  </header>
  <div class="main-wrapper">
    <main>
      <div class="container">
        <RouterLink
          class="food-list"
          v-for="food in foodData"
          :to="`/food/${food.id}`"
          :key="food.id"
        >
          <div class="img">
            <img
              :src="food.image"
              v-hero="{
                id: food.id,
                duration: 250,
              }"
            />
          </div>
          <div class="text">
            {{ food.desc.slice(0, 150) + " ..." }}
          </div>
        </RouterLink>
      </div>
    </main>
  </div>
  <router-link
    to="./gallery"
    class="btn-gallery"
    v-hero="{
      id: 'btn',
      enter: {
        rotate: 360,
      },
    }"
    >Gallery</router-link
  >
  <router-link
    to="./gallery2"
    v-hero="{
      id: 'gallery2',
      enter: {
        scale: 0,
        delay: 300,
      },
    }"
    class="btn-gal2"
    ><span
      v-hero="{
        enter: {
          opacity: 0,
          delay: 200,
          duration: 200,
        },
      }"
    >
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M11,2V22C5.9,21.5 2,17.2 2,12C2,6.8 5.9,2.5 11,2M13,2V11H22C21.5,6.2 17.8,2.5 13,2M13,13V22C17.7,21.5 21.5,17.8 22,13H13Z"
        />
      </svg>
    </span>
  </router-link>
</template>

<style>
.food-list {
  margin: 10px auto;
  padding: 20px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: white;
  z-index: 20;
}
.food-list:hover {
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
}
.text {
  color: grey;
}
.food-list .img {
  margin-right: 30px;
}
.food-list img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  z-index: 10;
  display: flex;
  align-items: center;
}
.header-background {
  position: absolute;
  background-color: #6e85b7;
  height: 200px;
  width: 100%;
  z-index: -1;
}

.btn-gal2 {
  text-decoration: none;
  color: white;
  background-color: #6e85b7;
  border-radius: 90% 0 0 0;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.btn-gal2 svg {
  transform: scale(1.2);
  margin: 10px 14px;
}
</style>
