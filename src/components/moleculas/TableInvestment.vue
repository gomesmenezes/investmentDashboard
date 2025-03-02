<script setup lang="ts">
import { ref } from 'vue';
import "primeicons/primeicons.css";
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import { nodes } from '@/mocks/table';
</script>

<template>
  <div class="card">
    <TreeTable
      :value="nodes"
      tableStyle="min-width: 50rem"
      class="bg-white text-black"
      headerClass="bg-white text-black"
      footerClass="bg-white text-black">
      <template #header>
        <div class="text-xl font-bold">List of your investments</div>
      </template>

      <Column
        field="stockName"
        header="Stock"
        expander
        style="width: 250px"
        headerStyle="background-color: white; color: black; "></Column>

      <Column
        field="type"
        header="Type"
        style="width: 150px"
        headerStyle="background-color: white; color: black;"></Column>

      <Column
        field="amount"
        header="Amount"
        style="width: 150px"
        headerStyle="background-color: white; color: black;"></Column>

      <Column
        field="currentValue"
        header="Current Value"
        style="width: 150px"
        headerStyle="background-color: white; color: black;"></Column>

      <Column
        field="purchasePrice"
        header="Purchase Price"
        style="width: 150px"
        headerStyle="background-color: white; color: black;"></Column>

      <Column
        field="date"
        header="Date"
        style="width: 150px"
        headerStyle="background-color: white; color: black;"></Column>

      <Column style="width: 10rem">
        <template #body>
          <div class="flex flex-wrap gap-2">
            <Button type="button" icon="pi pi-search" rounded />
            <Button
              type="button"
              icon="pi pi-pencil"
              rounded
              severity="success" />
          </div>
        </template>
      </Column>

      <template #footer>
        <div class="flex justify-start">
          <Button
            icon="pi pi-refresh"
            label="Reload"
            class="bg-red-600 hover:bg-red-700 text-white" />
        </div>
      </template>
    </TreeTable>
  </div>
</template>

<style>
/* Estilos globais da tabela */
.p-treetable {
  background: white !important;
  color: black !important;
}

/* Header */
.p-treetable .p-treetable-header {
  background: white !important;
  color: black !important;
  border-bottom: 1px solid #e5e7eb !important;
}

/* Footer */
.p-treetable .p-treetable-footer {
  background: white !important;
  color: black !important;
  border-top: 1px solid #e5e7eb !important;
}

/* Cabeçalho das colunas */
.p-treetable-thead > tr > th {
  background: white !important;
  color: black !important;
  border-color: #e5e7eb !important;
}

/* Linhas e células */
.p-treetable-tbody > tr > td {
  background: white !important;
  color: black !important;
  border-color: #e5e7eb !important;
}

/* Botão de reload no footer */
.p-treetable-footer .p-button {
  background-color: #dc2626 !important; /* Vermelho escuro */
  border-color: #dc2626 !important;
}

.p-treetable-footer .p-button:hover {
  background-color: #b91c1c !important; /* Vermelho mais escuro no hover */
}
</style>
