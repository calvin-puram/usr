<template>
  <section class="border-b py-8">
    <div
      class="
        container
        max-w-5xl
        mx-auto
        m-8
        container
        flex flex-col
        justify-center
        h-screen
      "
    >
      <h1
        class="
          w-full
          my-2
          text-5xl
          font-bold
          text-white
          leading-tight
          text-center
        "
      >
        Title
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-1/2 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="text-center mx-auto">
        <div class="w-full sm:w-1/2 p-6">
          <h3 class="text-3xl text-white font-bold leading-none mb-3">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="text-white mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
            <br />
            <br />
            Images from:
            <a class="text-pink-500 underline" href="https://undraw.co/">
              undraw.co
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'auth',
  middleware: ['admin'],
}
</script>
