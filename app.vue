<template>
  <div class="container md:container max-w-screen-md mx-auto p-4">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
      <div class="">
        <section class="rounded-lg overflow-hidden bg-white shadow-lg">
          <LeftBioUserUpper></LeftBioUserUpper>
          <LeftBioUserLower class="p-1.5"></LeftBioUserLower>
        </section>

        <section class="rounded-lg overflow-hidden mt-4 bg-white shadow-lg">
          <LeftInformation class="p-1.5"></LeftInformation>
        </section>
        <section class="rounded-lg overflow-hidden mt-4 bg-white shadow-lg">
          <LeftEducation class="p-1.5"></LeftEducation>
        </section>
      </div>
      <div class="col-span-2 rounded-lg text-center">
        <section class="rounded-lg overflow-hidden bg-white shadow-lg">
          <RightExperience class="p-1.5"></RightExperience>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
useServerSeoMeta({
  description: () =>
    "Peter Mamrukov is hands-on Technology Executive with 15 years of experience in managing R&D, maintaining reliable infrastructure and deliverying complex projects for Global Insurance, MedTech, and Tech companies. ",
  image: () => "https://www.mamrukov.com/PeterMamrukov.webp",
  ogTitle: () => "Peter Mamrukov CIO | CTO | Tech lead",
  ogDescription: () =>
    "Peter Mamrukov is hands-on Technology Executive with 15 years of experience in managing R&D, maintaining reliable infrastructure and deliverying complex projects for Global Insurance, MedTech, and Tech companies. ",
  ogImage: () => "https://www.mamrukov.com/PeterMamrukov.webp",
  twitterCard: () => "https://www.mamrukov.com/PeterMamrukov.webp",
});
</script>
