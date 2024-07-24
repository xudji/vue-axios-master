<template>
  <div>Home</div>
  <router-link to="/about">About</router-link>
  <button @click="getHomeData">获取home data数据</button>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<script lang="ts" setup>
import { onMounted } from "vue";
import { getHomeDataApi } from "../../api/index";

const getHomeData = async () => {
  const res = await getHomeDataApi();
  console.log(res);
};

onMounted(getHomeData);
</script>

<style scoped></style>
