<script setup lang="ts">
import { LayoutDashboard, HandCoins, ChartCandlestick, LogOut } from 'lucide-vue-next';

const route = useRoute();
</script>

<template>
  <div class="min-h-screen min-w-[190px] py-6 px-6 inline-block bg-[#000000]">
    <nav class="flex justify-between flex-col h-[95%] w-full !text-white">
      <ul class="flex flex-col gap-2.5">
        <nuxt-link to="/dashboard">
          <li
            class="flex text-lg items-center gap-3 rounded-md p-2"
            :class="route.path === '/dashboard' ? 'bg-[#FF4C00] text-white' : ''">
            <LayoutDashboard />
            <p>Overview</p>
          </li>
        </nuxt-link>

        <nuxt-link to="/dashboard/investment">
          <li
            class="flex text-lg items-center gap-3 rounded-md p-2"
            :class="route.path === '/dashboard/investment' ? 'bg-[#FF4C00] text-white' : ''">
            <HandCoins />
            <p>Cripto</p>
          </li>
        </nuxt-link>

        <nuxt-link to="/dashboard/agentInvestment">
          <li
            class="flex text-lg items-center gap-3 rounded-md p-2"
            :class="route.path === '/dashboard/agentInvestment' ? 'bg-[#FF4C00] text-white' : ''">
            <ChartCandlestick />
            <p>IA Advisor</p>
          </li>
        </nuxt-link>
      </ul>
      <div class="flex flex-col bg-gray-700 rounded-lg ">
        <nuxt-link to="/" class="flex justify-center items-center gap-2">
          <ul>
            <li class="flex p-2 justify-center items-center">
              <LogOut />
            </li>
          </ul>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>
