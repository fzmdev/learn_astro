<template>
  <div class="Hello">
    <div>Hello vue</div>
    <div>{{ counter }}</div>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0)

const increment = () => {
  counter.value++
}
</script>

<style lang="less" scoped>
</style>
