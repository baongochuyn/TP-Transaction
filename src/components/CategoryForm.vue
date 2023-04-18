<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <legend>Nouvelle Category</legend>
      <div>
        <label>Name :</label>
        <input type="text" v-model="name" />
      </div>
      <input class="btn" type="submit" value="Ajouter" />
    </fieldset>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const emit = defineEmits(['newCategory'])
const onSubmit = () => {
  emit('newCategory', name.value)
  name.value = ''
}
</script>

<style scoped></style>
