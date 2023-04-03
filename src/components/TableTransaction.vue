<template>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Date</th>
          <th>Montant</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in transactions" :key="index">
          <td>{{ transaction.id }}</td>
          <td>{{ transaction.description }}</td>
          <td>{{ ConverDate(transaction.date)  }}</td>
          <td>{{ CoverAmount(transaction.amount) }}</td>
          <td>
            <button @click="clickDelete(transaction)">Delete</button>
            <button @click="clickModify(transaction)">Modify</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total:{{ total}} </td>
        </tr>
      </tfoot>
    </table>
</template>

<script lang="ts">
import { def } from '@vue/shared';
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface transaction{
    id: number,
    description: string,
    date: Date,
    amount: bigint
}
export default defineComponent ({
    props: {
    transactions:{
        type: Array as PropType<transaction[]>,
        required: true
    }
    },
    methods:{
        ConverDate(date: number | Date | undefined){
        return Intl.DateTimeFormat("fr-FR").format(date);
        },

        CoverAmount(amount){
        return Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(BigInt(amount));
        },
        clickDelete(itemDelete: any){
        //console.log(itemDelete.id)
      
            for(let i = 0; i < this.transactions.length; i++){
                if(this.transactions[i].id == itemDelete.id){    
                    this.transactions.splice(i,1)
                }
            }
        },
        clickModify(itemModify){
            
            this.item = itemModify
            console.log(this.item)
            // for(let i =0; i<this.transactions.length ; i++){
            //     if(this.transactions[i].id == itemModify.id){
            //         this.transactions[i] = itemModify
            //     }
            // }
            this.$emit("modify", this.item)
        }
    },  
    computed: { // var a = stateA + stateB <div>{a}</div>
        total() {
        //return this.transactions.reduce((acc, transaction) => acc + transaction.amount, BigInt(0));
        let totalSpending = 0n;
        for(let i = 0; i< this.transactions.length; i++){
            totalSpending += BigInt(this.transactions[i].amount);
        }
        return BigInt(totalSpending)
        }
    },
    data() {
        return{
            item: {}
        }
    }
}
)
</script>