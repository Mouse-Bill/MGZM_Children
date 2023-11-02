<template>
  <h1>Here is a task component!</h1>
  <h2>hhhhhhh</h2>
  <counter />
  <button @click="count++">count is: {{ count }}</button>
</template>

<script setup>
import counter from '../../components/counter.vue'
import { ref } from 'vue'
</script>