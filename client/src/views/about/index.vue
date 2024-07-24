<template>
  <div>About</div>
</template>

<script lang="ts">
export default {
  name: "About",
};
</script>

<script lang="ts" setup>
import { onMounted } from "vue";
import { getAboutDataApi } from "../../api/index";

const getAboutData = async () => {
  const res = await getAboutDataApi();
  console.log(res);
};

onMounted(getAboutData);
</script>

<style scoped></style>
