<template>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Date</th>
          <th>Montant</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in transactions" :key="index">
          <td>{{ transaction.id }}</td>
          <td>{{ transaction.description }}</td>
          <td>{{ ConverDate(transaction.date)  }}</td>
          <td>{{ CoverAmount(transaction.amount) }}</td>

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