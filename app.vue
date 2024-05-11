<template>
  <div class="container md:container max-w-screen-md mx-auto p-4">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
      <div class="">
        <section class="rounded-lg overflow-hidden bg-white shadow-lg">
          <LeftBioUserUpper></LeftBioUserUpper>
          <LeftBioUserLower class="p-1.5"></LeftBioUserLower>
        </section>
        <!-- <section class="rounded-lg overflow-hidden mt-4 bg-white shadow-lg">
          <LeftAboutMe class="p-1.5"></LeftAboutMe>
        </section> -->
        <section class="rounded-lg overflow-hidden mt-4 bg-white shadow-lg">
          <LeftContactMe class="p-1.5"></LeftContactMe>
        </section>
      </div>
      <div class="col-span-2 bg-violet-700 rounded-lg shadow-lg text-center">
        right-column
      </div>
    </div>
  </div>
</template>
