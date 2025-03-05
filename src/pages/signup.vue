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
            Join thousands of smart investors
            <span class="text-blue-200">today</span>
          </h1>
          <p class="text-lg text-gray-300">
            Create your account and start tracking your investments, analyzing
            performance, and making better financial decisions.
          </p>

          <!-- Testimonial -->
          <div class="mt-8 rounded-lg bg-white/10 p-6">
            <p class="italic text-gray-300">
              "Since I started using InvestTrack, I've gained complete
              visibility into my portfolio performance. The AI advisor has
              helped me make smarter investment decisions."
            </p>
            <div class="mt-4 flex items-center gap-3">
              <Avatar
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                class="h-10 w-10 rounded-full border-2 border-gray-700 bg-gray-800"
                size="xlarge"
                shape="circle" />
              <div>
                <p class="font-medium text-white">Sarah Johnson</p>
                <p class="text-sm text-gray-300">Investor since 2021</p>
              </div>
            </div>
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

    <!-- Right side - Sign Up Form -->
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

        <div class="mt-8 space-y-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-900">Create an account</h2>
            <p class="mt-2 text-sm text-gray-600">
              Sign up to start tracking your investments
            </p>
          </div>

          <div class="space-y-4">
            <Button
              label="Continue with Google"
              icon="pi pi-google"
              class="w-full !bg-black !border-none !text-white"
              type="button" />

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

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="space-y-2">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <InputText
                  id="name"
                  v-model="formData.name"
                  placeholder="John Doe"
                  class="w-full bg-[#D7D7D7] !border-none"
                  required />
              </div>

              <div class="space-y-2">
                <label
                  for="cpf"
                  class="block text-sm font-medium text-gray-700">
                  CPF
                </label>
                <InputText
                  id="cpf"
                  v-model="formData.cpf"
                  placeholder="000.000.000-00"
                  class="w-full bg-[#D7D7D7] !border-none"
                  :maxlength="14"
                  @input="handleInputChange"
                  required />
              </div>

              <div class="space-y-2">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <InputText
                  id="phone"
                  v-model="formData.phone"
                  placeholder="(00) 00000-0000"
                  class="w-full bg-[#D7D7D7] !border-none"
                  :maxlength="15"
                  @input="handleInputChange"
                  required />
              </div>

              <div class="space-y-2">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <InputText
                  id="email"
                  v-model="formData.email"
                  placeholder="name@example.com"
                  type="email"
                  class="w-full bg-[#D7D7D7] !border-none"
                  required />
              </div>

              <div class="space-y-2">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Password
                  id="password"
                  v-model="formData.password"
                  :feedback="false"
                  class="w-full"
                  @input="checkPasswordStrength"
                  required />

                <div v-if="formData.password" class="space-y-2">
                  <div class="flex items-center justify-between text-xs">
                    <span>Password strength:</span>
                    <span :class="strengthTextColor">
                      {{ getStrengthText() }}
                    </span>
                  </div>
                  <ProgressBar
                    :value="passwordStrength"
                    :class="strengthColor" />

                  <div class="grid grid-cols-2 gap-2 text-xs">
                    <div
                      v-for="(criteria, key) in passwordCriteria"
                      :key="key"
                      class="flex items-center gap-1">
                      <i
                        :class="criteria ? 'pi pi-check text-green-500' : 'pi pi-times text-red-500'"
                        class="text-sm" />
                      <span>{{ criteriaLabels[key] }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <label
                  for="confirmPassword"
                  class="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Password
                  id="confirmPassword"
                  v-model="formData.confirmPassword"
                  :feedback="false"
                  class="w-full"
                  required />
                <small
                  v-if="formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword"
                  class="p-error">
                  Passwords do not match
                </small>
              </div>

              <Button
                label="Create account"
                icon="pi pi-arrow-right"
                class="w-full"
                type="submit"
                :loading="isLoading" />
            </form>
          </div>

          <div class="text-center">
            <p class="text-sm text-gray-600">
              Already have an account?
              <NuxtLink
                to="/login"
                class="font-medium text-blue-600 underline-offset-4 hover:underline">
                Sign in
              </NuxtLink>
            </p>
          </div>

          <p class="px-8 text-center text-sm text-gray-600">
            By clicking create account, you agree to our
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

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import ProgressBar from 'primevue/progressbar'
import Avatar from 'primevue/avatar'
const router = useRouter()
const isLoading = ref(false)

watch(
  () => router.currentRoute.value,
  () => {
    location.reload()
  }
)

const formData = ref({
  name: '',
  email: '',
  cpf: '',
  phone: '',
  password: '',
  confirmPassword: '',
})
const passwordStrength = ref(0)
const passwordCriteria = ref({
  length: false,
  uppercase: false,
  lowercase: false,
  number: false,
  special: false,
})
const criteriaLabels = {
  length: 'At least 8 characters',
  uppercase: 'Uppercase letter',
  lowercase: 'Lowercase letter',
  number: 'Number',
  special: 'Special character',
}

const handleInputChange = (e) => {
  const { name, value } = e.target

  if (name === 'cpf') {
    formData.value.cpf = formatCPF(value)
  } else if (name === 'phone') {
    formData.value.phone = formatPhone(value)
  } else {
    formData.value[name] = value
  }

  if (name === 'password') {
    checkPasswordStrength(value)
  }
}

const checkPasswordStrength = (password) => {
  const criteria = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  }

  passwordCriteria.value = criteria

  // Calculate strength percentage
  const criteriaCount = Object.values(criteria).filter(Boolean).length
  passwordStrength.value = (criteriaCount / 5) * 100
}

const strengthColor = computed(() => {
  if (passwordStrength.value <= 20) return 'bg-red-500'
  if (passwordStrength.value <= 40) return 'bg-orange-500'
  if (passwordStrength.value <= 60) return 'bg-yellow-500'
  if (passwordStrength.value <= 80) return 'bg-blue-500'
  return 'bg-green-500'
})

const strengthTextColor = computed(() => {
  if (passwordStrength.value <= 20) return 'text-red-500'
  if (passwordStrength.value <= 40) return 'text-orange-500'
  if (passwordStrength.value <= 60) return 'text-yellow-500'
  if (passwordStrength.value <= 80) return 'text-blue-500'
  return 'text-green-500'
})

const getStrengthText = () => {
  if (passwordStrength.value <= 20) return 'Very Weak'
  if (passwordStrength.value <= 40) return 'Weak'
  if (passwordStrength.value <= 60) return 'Medium'
  if (passwordStrength.value <= 80) return 'Strong'
  return 'Very Strong'
}

const formatCPF = (value) => {
  const digits = value.replace(/\D/g, '')
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`
}

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, '')
  if (digits.length <= 2) return digits.length ? `(${digits}` : ''
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

const validateCPF = (cpf) => {
  const digits = cpf.replace(/\D/g, '')
  return digits.length === 11
}

const validatePhone = (phone) => {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 11
}

const handleSubmit = async () => {
  isLoading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push('/dashboard')
  } catch (error) {
    console.error('Registration failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style>
/* Adicione estilos personalizados aqui, se necessário */
</style>
