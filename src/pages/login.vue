<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { LockIcon, ArrowRight } from 'lucide-vue-next'

const router = useRouter()
const isLoading = ref(false)


const features = [
  'Real-time tracking',
  'Portfolio analytics',
  'Smart notifications',
  'Tax reporting'
]

const handleSubmit = async () => {
  isLoading.value = true

  try {
    // Aqui você faria sua chamada de autenticação real
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Após login bem sucedido, redireciona para o dashboard
    router.push('/dashboard') // Isso irá navegar para /dashboard
  } catch (error) {
    console.error('Login failed:', error)
    // Aqui você pode adicionar tratamento de erro, como mostrar uma mensagem
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Left side - Branding/Marketing Content -->
    <div
      class="hidden w-1/2 bg-gradient-to-b from-black to-gray-900 p-12 text-white lg:block">
      <div class="flex h-full flex-col justify-between">
        <div class="flex items-center gap-2 text-lg font-semibold">
          <div
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
            IT
          </div>
          InvestTrack
        </div>

        <div class="space-y-6">
          <h1 class="text-5xl font-bold leading-tight tracking-tight">
            Start tracking your investments,
            <span class="text-blue-200">all in one place</span>
          </h1>
          <p class="text-lg text-gray-300">
            Join thousands of investors who trust InvestTrack to manage their
            portfolios. Track stocks, crypto, real estate, and more with our
            powerful platform.
          </p>

          <!-- Social Proof -->
          <div class="space-y-4 pt-8">
            <div class="flex -space-x-2">
              <Avatar
                v-for="i in 5"
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                class="h-10 w-10 rounded-full border-2 border-gray-700 bg-gray-800"
                size="xlarge"
                shape="circle" />
            </div>
            <p class="text-sm text-gray-300">
              Trusted by over
              <span class="font-semibold">10,000+</span>
              investors worldwide
            </p>
          </div>

          <!-- Features List -->
          <div class="grid grid-cols-2 gap-4 pt-8">
            <div
              v-for="feature in features"
              :key="feature"
              class="flex items-center gap-2">
              <div class="h-1.5 w-1.5 rounded-full bg-blue-200" />
              <span class="text-sm font-medium text-gray-300">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>

        <p class="text-sm text-gray-300">
          © {{ new Date().getFullYear() }} InvestTrack. All rights reserved.
        </p>
      </div>
    </div>

    <!-- Right side - Login Form -->
    <div
      class="flex w-full flex-col justify-center bg-white px-4 py-12 sm:px-6 lg:w-1/2 lg:px-8">
      <div class="mx-auto w-full max-w-sm">
        <div class="lg:hidden">
          <div class="flex items-center gap-2 text-lg font-semibold">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
              IT
            </div>
            InvestTrack
          </div>
        </div>

        <div class="mt-8 space-y-6 text-black">
          <div>
            <h2 class="text-3xl font-bold">Welcome back</h2>
            <p class="mt-2 text-sm text-gray-600">
              Please enter your details to access your account
            </p>
          </div>

          <div class="space-y-4">
            <Button
              variant="outline"
              class="w-full bg-black! border-none! text-white!"
              type="button">
              <i class="pi pi-google" style="color: #fff" font-size: 2rem></i>
              Continue with Google
            </Button>

            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t" />
              </div>
              <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4 text-black">
              <div class="space-y-2 flex flex-col">
                <Label for="email">Email</Label>
                <Input
                  class="bg-[#D9D9D9]! p-2 rounded-md"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autocomplete="email"
                  required />
              </div>
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <Label for="password">Password</Label>
                  <NuxtLink
                    to="/forgot-password"
                    class="text-sm text-gray-600 underline-offset-4 hover:underline">
                    Forgot password?
                  </NuxtLink>
                </div>
                <Input
                  class="bg-[#D9D9D9]! w-full p-2 rounded-md"
                  id="password"
                  type="password"
                  required />
              </div>

              <Button
                class="w-full bg-black! text-white! border-none!"
                type="submit"
                :disabled="isLoading">
                <template v-if="isLoading">
                  <LockIcon class="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </template>
                <template v-else>
                  Sign in
                  <ArrowRight class="ml-2 h-4 w-4" />
                </template>
              </Button>
            </form>
          </div>

          <div class="text-center">
            <p class="text-sm text-gray-600">
              Don't have an account?
              <NuxtLink
                to="/signup"
                class="font-medium text-blue-600 underline-offset-4 hover:underline">
                Create an account
              </NuxtLink>
            </p>
          </div>

          <p class="px-8 text-center text-sm text-gray-600">
            By clicking continue, you agree to our
            <NuxtLink
              to="/terms"
              class="underline underline-offset-4 hover:text-blue-600">
              Terms of Service
            </NuxtLink>
            and
            <NuxtLink
              to="/privacy"
              class="underline underline-offset-4 hover:text-blue-600">
              Privacy Policy
            </NuxtLink>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>
