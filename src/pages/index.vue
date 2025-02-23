<script setup lang="ts">
import { ref } from 'vue';
import { Form } from '@primevue/forms';

const initialValues = ref({
  username: '',
  firstName: '',
  lastName: '',
});

const onFormSubmit = ({ valid }: { valid: boolean }) => {
  if (valid) {
    console.log('Form is submitted.');
  }
};

const formGoToDashboard = () => {
  navigateTo('/dashboard');
};

const user = ref('José Gomes de Menezes');
</script>

<template>
  <div class="box flex justify-center items-center mx-auto h-screen">
    <div class="title">
      <h1 class="text-3xl font-bold">Welcome!</h1>
      <h2 class="opacity-50 pb-5">Suas financas em um clique</h2>
      <div class="form">
        <Form
          v-slot="$form"
          :initialValues="initialValues"
          :validateOnValueUpdate="false"
          :validateOnBlur="true"
          :validateOnMount="['firstName']"
          @submit="onFormSubmit"
          class="flex flex-col gap-4 w-full sm:w-56"
        >
          <div class="flex flex-col gap-1">
            <InputText name="username" type="text" placeholder="Username ou Email" fluid />
            <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">
              {{ $form.username?.error?.message }}
            </Message>
          </div>
          <div class="flex flex-col gap-1">
            <InputText name="password" type="password" placeholder="Password" fluid />
            <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
              {{ $form.password?.error?.message }}
            </Message>
          </div>
          <Button type="submit" @click="formGoToDashboard" severity="secondary" label="Submit" />
        </Form>
      </div>
    </div>
  </div>
</template>
