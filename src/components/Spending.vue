<template>
  <div class="spending">
    <div>
      <label for="">Description :</label>
      <input v-model="spending.description" type="text" />
    </div>
    <div>
      <label for="">Date :</label>
      <input v-model="spending.date" type="date" />
    </div>
    <div>
      <label for="">Montant :</label>
      <input v-model="spending.amount" type="number" />
    </div>
    <button @click="onNewTransaction" id="btnValider">Add</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const spending = ref({
  id: Math.floor(Math.random() * 100),
  description: '',
  date: '',
  amount: ''
})

const emit = defineEmits(['save'])

const onNewTransaction = () => {
  if (!/\d{4}-\d{2}-\d{2}/.test(spending.value.date)) {
    return false
  }

  if (typeof spending.value.amount !== 'number') {
    return false
  }

  if (spending.value.description.length === 0) {
    return false
  }

  // send object "spending" to parents
  emit('save', spending.value)

  // reset input = 0
  spending.value = {
    id: Math.floor(Math.random() * 100),
    description: '',
    date: '',
    amount: ''
  }
}
</script>

<style scoped>
#btnValider {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
}
</style>
