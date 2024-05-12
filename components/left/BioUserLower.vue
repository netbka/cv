<template>
  <div>
    <div class="bg-white">
      <div>
        <h2
          class="flex gap-2 font-bold text-base text-left before:rounded-full before:bg-secondary before:w-1"
        >
          Peter Mamrukov
        </h2>
      </div>
      <div class="flex mt-1 w-full font-light text-sm text-left">
        <div class="px-4">
          <p class="font-light text-sm text-left">CIO | IT Director | Tech leader</p>
        </div>
        <!-- <div class="w-2 px-3 content-center">
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true">
            <circle cx="1" cy="1" r="1"></circle>
          </svg>
        </div>
        <div class="">Israel</div> -->
      </div>
    </div>
    <div class="mt-4 rounded-lg bg-background p-4 text-left">
      <p class="text-sm">
        Hands-on Technology Executive with 15 years of experience in managing R&D,
        maintaining reliable infrastructure and deliverying complex projects for Global
        Insurance, MedTech, and Tech companies.
      </p>
      <div class="flex flex-wrap mt-2 text-xs gap-2 text-center">
        <div
          v-for="el in skills"
          :key="el"
          class="p-1 bg-accent basis-1/3-gap-2 rounded-md"
        >
          {{ el }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = skillArray();
</script>

<style></style>
