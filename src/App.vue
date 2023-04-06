<template>
  <div>
    <!-- <Spending @save="clickAdd" /> -->
    <!-- <TableTransaction :transactions="transactions" /> -->
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts"></script>

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
