<template>
  <div>
    <!-- <Spending @save="clickAdd" /> -->
    <!-- <TableTransaction :transactions="transactions" /> -->
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts"></script>

<style>
#app {
  margin: auto;
  align-content: center;
  padding: 10px;
}
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
#total {
  color: red;
}
.btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 7px;
  margin: 10px;
}
</style>
