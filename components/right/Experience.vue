<template>
  <Section heading="Work Summary" :showbg="false">
    <WorkExperienceItem v-for="el in experienceArray" :data="el"></WorkExperienceItem>
  </Section>
</template>

<script lang="ts" setup></script>

<style></style>
