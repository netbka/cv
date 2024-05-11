<template>
  <div>
    <div class="my-2 text-left">
      <h2
        class="flex gap-2 font-bold text-base text-left before:rounded-full before:bg-secondary before:w-1"
      >
        Contact me
      </h2>
    </div>
    <div class="rounded-lg bg-background p-4 text-left">
      <ul>
        <li
          v-for="el in contacts"
          :key="el.value"
          class="text-sm py-1.5 flex justify-between"
        >
          <span class="float-left">{{ el.label }}</span>
          <span class="">{{ el.value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const contacts = contactsArray();
</script>

<style></style>
