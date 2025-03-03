<script setup lang="ts">
import "primeicons/primeicons.css";
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import { nodes } from '@/mocks/table';
import { onMounted } from 'vue';
import { updateStockPrices } from "@/composable/useStock";

onMounted(async () => {
  await updateStockPrices();
});
</script>

<template>
  <div class="card border-2 border-solid border-[#d7d7d7] rounded-lg p-5">
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
        field="logoUrlStock"
        header=""
        style="width: 150px"
        headerStyle="background-color: white; color: black;">
        <template #body="{ node }">
          <img
            v-if="node.data.logoUrlStock"
            :src="node.data.logoUrlStock"
            alt="Logo"
            class="h-8 w-8 object-contain" />
          <div v-else class="h-8 w-8 bg-gray-200"></div>
        </template>
      </Column>

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
        field="quantity"
        header="Quantity"
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
            <Button type="button" icon="pi pi-trash" rounded />
          </div>
        </template>
      </Column>

      <template #footer>
        <div class="flex justify-start">
          <Button icon="pi pi-refresh" label="Reload" class="border-none" />
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
  color: white !important;
}

.p-treetable-footer .p-button:hover {
  background-color: #112458 !important;
}

.p-button {
  background-color: #0B1739 !important;
  border-color: transparent !important;
  color: white !important;
}
</style>
