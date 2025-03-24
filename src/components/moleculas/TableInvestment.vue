<script setup lang="ts">
import "primeicons/primeicons.css";
import TreeTable from "primevue/treetable";
import Column from "primevue/column";
import { ref, onMounted } from "vue";
import { mockStocks } from "@/mocks/stocks"; // Importa os dados das ações
import { updateStockPrices } from "@/service/useStock";
import { tagInvestmentOptions } from "@/types/stock";
import { nodes } from "@/mocks/table";

const visible = ref(false);
const selectedTag = ref<{ name: string } | null>(null);

onMounted(async () => {
  await updateStockPrices();
});
</script>

<template>
  <div>
    <TreeTable
      :value="nodes"
      tableStyle="min-width: 50rem; border-radius: 10px;"
      class="text-white rounded-lg p-2"
      headerClass="!bg-transparent text-black"
      footerClass="bg-white text-black">
      <template #header>
        <div class="flex items-center justify-between">
          <div class="text-xl font-bold">List of your investments</div>
          <Button
            id="btn"
            class="h-[44px] !bg-[#FF4C00] !text-white"
            label="Add Investment"
            @click="visible = true" />
        </div>
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
          <div class="flex flex-wrap gap-2 mx-auto">
            <Button
              type="button"
              icon="pi pi-trash"
              class="!bg-[#FF4C00]"
              rounded />
          </div>
        </template>
      </Column>

      <template #footer>
        <div class="flex justify-start">
          <Button
            icon="pi pi-refresh"
            label="Reload"
            class="border-none !bg-[#FF4C00]" />
        </div>
      </template>
    </TreeTable>
  </div>

  <!-- Dialog -->
  <Dialog
    v-model:visible="visible"
    modal
    header="Add Investment"
    :style="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">
      Add your investment
    </span>

    <div class="flex items-center gap-4 mb-4">
      <label for="stockId" class="font-semibold w-24">Stock ID</label>
      <InputText
        id="stockId"
        class="flex-auto"
        autocomplete="off"
        placeholder="Ex: PETR4" />
    </div>

    <div class="flex items-center gap-4 mb-4">
      <label for="quantityStock" class="font-semibold w-24">Quantity</label>
      <InputNumber
        id="quantityStock"
        class="flex-auto"
        autocomplete="off"
        placeholder="100" />
    </div>

    <div class="flex items-center gap-4 mb-4">
      <label for="purchasePrice" class="font-semibold w-24">
        Purchase Price
      </label>
      <InputNumber
        id="purchasePrice"
        class="flex-auto"
        autocomplete="off"
        placeholder="37.57" />
    </div>

    <div class="flex items-center gap-4 mb-4">
      <label for="ms_tagInvestment" class="font-semibold min-w-24!">
        Category
      </label>
      <Select
        v-model="selectedTag"
        :options="tagInvestmentOptions"
        optionLabel="name"
        placeholder="Select a Tag"
        class="w-full" />
    </div>

    <div class="flex justify-end gap-2 mt-4">
      <Button
        type="button"
        label="Cancelar"
        severity="secondary"
        @click="visible = false" />
      <Button type="button" label="Adicionar" @click="visible = false" />
    </div>
  </Dialog>
</template>

<style>
/* Estilos globais da tabela */
.p-treetable {
  background: black !important;
  color: white !important;
}

/* Header */
.p-treetable .p-treetable-header {
  background: black !important;
  color: white !important;
  border-bottom: 1px solid #e5e7eb !important;
}

/* Footer */
.p-treetable .p-treetable-footer {
  background: black !important;
  color: white !important;
  border-top: 1px solid #e5e7eb !important;
}

/* Cabeçalho das colunas */
.p-treetable-thead > tr > th {
  background: black !important;
  color: white !important;
  border-color: #e5e7eb !important;
}

/* Linhas e células */
.p-treetable-tbody > tr > td {
  background: black !important;
  color: white !important;
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
