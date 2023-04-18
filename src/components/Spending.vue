<template>
  <fieldset>
    <legend>Nouvelle transaction</legend>
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
      <div>
        <label for="">Category :</label>
        <select v-model="spending.category">
          <option v-for="(cate, index) in categoryStore" :key="index" v-bind:value="cate.id">
            {{ cate.name }}
          </option>
        </select>
      </div>
      <button @click="onNewTransaction" class="btn">Add</button>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore().categories
const spending = ref({
  category: '',
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

  console.log(spending.value)

  // send object "spending" to parents
  emit('save', spending.value)

  // reset input = 0
  spending.value = {
    description: '',
    category: '',
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
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  margin: 10px;
}
</style>
