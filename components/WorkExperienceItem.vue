<template>
  <div
    class="flex flex-row gap-4 p-4 items-start mt-4 bg-background hover:bg-slate-100 rounded-lg"
  >
    <NuxtImg :src="data.companylogo" height="48px" width="48px" quality="100"></NuxtImg>
    <div class="w-full">
      <div class="flex justify-between mt-1">
        <h3 class="font-semibold text-sm">{{ data.jobname }}</h3>
        <span class="p-1.5 bg-accent text-xs rounded-md max-h-7">{{
          data.industry
        }}</span>
      </div>
      <div class="flex flex-row flex-wrap gap-x-6 lg:gap-x-3">
        <div class="flex">
          <NuxtImg src="work.svg" height="14px" width="14px"></NuxtImg>
          <span class="p-0.5 text-xs">{{ data.companyname }}</span>
        </div>
        <div class="flex">
          <NuxtImg src="location.svg" height="14px" width="14px"></NuxtImg>
          <span class="p-0.5 text-xs">{{ data.location }}</span>
        </div>
        <div class="flex">
          <NuxtImg src="calendar.svg" height="14px" width="14px"></NuxtImg>
          <span class="p-0.5 text-xs">{{ data.duration }}</span>
        </div>
      </div>
      <p class="mt-4 text-sm">
        {{ data.description }}
      </p>
      <ul class="list-disc text-sm ml-4 mt-1">
        <li v-for="el in data.achievements">{{ el }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ExperienceType } from "../utils/type";
interface PropData {
  data: ExperienceType;
}
const props = defineProps<PropData>();
</script>

<style></style>
