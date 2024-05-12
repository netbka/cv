<template>
  <Section heading="Education" :showbg="false">
    <EducationItem v-for="el in educationArr" :data="el"></EducationItem>
  </Section>
</template>

<script lang="ts" setup></script>

<style></style>
