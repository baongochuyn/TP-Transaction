<template>
  <div class="spending">
    <div>
        <label for="">Description :</label>
        <input v-model="spending.description" type="text"/>
    </div>
    <div>
        <label for="">Date :</label>
        <input v-model="spending.date" type="date">
    </div>
    <div>
        <label for="">Montant :</label>
        <input v-model="spending.amount" type="number">
    </div>
    <button @click="clickAdd" id="btnValider">Add</button>
  </div>
</template>

<script lang="ts">

export default {
    methods:{
        clickAdd(){
            if (/\d{4}-\d{2}-\d{2}/.test(this.spending.date) === false) {
				return false;
			}

			if (typeof this.spending.amount !== "number") {
				return false;
			}

			if (this.spending.description.length === 0) {
				return false;
			}

            //send object "spending" to parents
            this.$emit("save", this.spending)
            //reset input = 0
            this.spending={
                id:Math.floor(Math.random()*100),
                description: "",
                date: "",
                amount: ""
            }
        }
    },
    data(){
        return{
            spending:{
                id:Math.floor(Math.random()*100),
                description: "",
                date: "",
                amount: ""
            }
        }
    }
}
</script>

<style scoped>
#btnValider{
    background-color: #4CAF50;
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