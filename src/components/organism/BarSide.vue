<script setup lang="ts">
import { LayoutDashboard, HandCoins, ChartCandlestick, LogOut } from 'lucide-vue-next';

const route = useRoute();
</script>

<template>
  <div class="h-screen p-5 inline-block bg-[#112459]">
    <nav class="flex justify-between flex-col h-[95%]">
      <ul class="flex flex-col gap-2.5">
        <nuxt-link to="/dashboard">
          <li
            class="flex text-lg items-center gap-3 rounded-md p-2"
            :class="route.path === '/dashboard' ? 'bg-white text-black' : ''"
          >
            <LayoutDashboard />
            <p>Overview</p>
          </li>
        </nuxt-link>

        <nuxt-link to="/dashboard/investment">
          <li
            class="flex text-lg items-center gap-3 rounded-md p-2"
            :class="route.path === '/dashboard/investment' ? 'bg-white text-black' : ''"
          >
            <HandCoins />
            <p>Investment</p>
          </li>
        </nuxt-link>

        <nuxt-link to="/dashboard/agentInvestment">
          <li
            class="flex text-lg items-center gap-3 rounded-md p-2"
            :class="route.path === '/dashboard/agentInvestment' ? 'bg-white text-black' : ''"
          >
            <ChartCandlestick />
            <p>Agent Investor</p>
          </li>
        </nuxt-link>
      </ul>
      <div class="flex flex-col bg-gray-700 rounded-lg">
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
