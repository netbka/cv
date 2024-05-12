<template>
  <Section :heading="'Information'">
    <ul class="divide-y p-4">
      <li
        v-for="el in contacts"
        :key="el.value"
        class="text-sm py-1.5 flex justify-between"
      >
        <span class="float-left">{{ el.label }}</span>
        <span v-if="el.value !== 'peter@mamrukov.com'" class="">{{ el.value }}</span>
        <a v-else :href="`mailto:${el.value}`" class="text-blue-500">{{ el.value }}</a>
      </li>
    </ul>
  </Section>
</template>

<script lang="ts" setup>
const contacts = contactsArray();
</script>

<style></style>
