<template>
  <div>
    <p>Solde du compte : {{}}</p>
    <!-- <Spending @save="clickAdd" /> -->
    <!-- <TableTransaction :transactions="transactions" /> -->
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import { reactive, ref, computed } from 'vue'
import Spending from './components/Spending.vue'
import TableTransaction from './components/TableTransaction.vue'
import { provide } from 'vue'

//console.log(transactions);
export default {
  components: {
    Spending,
    TableTransaction
  },
  setup() {}
}
</script>

<style>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
table td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}
table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
