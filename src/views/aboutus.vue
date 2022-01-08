<template>
  <div class="header-image">
    <div class="text-white text-center justify-center p-8">
      <h1 class="text-4xl font-bold mt-36">
        Your Progress Becomes
        <span class="text">Priority</span>
      </h1>
      <p class="my-4 mb-2">
        Developing a sense of self discipline and self-value
      </p>
    </div>
    <div class="mt-6 text-center justify-center">
      <a
        href="#"
        class="border border-none box px-8 py-4 rounded color shadow-sm text-white"
        >Get Started</a
      >
    </div>
  </div>
  <div class="mt-20 text-center justify-center">
    <h2
      class="text-4xl font-bold max-w-xl mx-auto  tracking-normal leading-none"
    >
      Achieve, Advance and Become The Best Version Of You!
    </h2>
  </div>

  <div class="grid lg:gap-8 lg:grid-cols-2 mt-24 px-10 py-5">
    <div class="text-left px-8">
      <h1 class="text-lg font-medium tracking-tight sm:text-3xl text-black">
        Track your productivity progress in a single platform
      </h1>
      <p class="mt-8 text-xl text-left text-black">
        Whether it's completing a task, or connecting with others
      </p>
      <p class="mt-8 text-xl mb-10 text-black">
        prova provides different motivation strategies, to keep you engaged and
        focused with your goals
      </p>
    </div>
    <div aria-hidden="true" class="mt-10 lg:mt-0">
      <img
        src="../assets/hero1.jpg"
        alt=""
        class="mx-auto rounded-lg shadow-lg bg-coolGray-500"
      />
    </div>
  </div>

  <div class="flex flex-col mx-auto lg:flex-row bg-gray-100 p-10 mt-8 px-20">
    <div
      class="w-full lg:w-1/3"
      style="
        background-image: url('https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=formatfit=cropw=870q=80');
        background-position: center center;
        background-size: cover;
      "
    ></div>
    <div
      class="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12 justify-items-center"
    >
      <h2
        class="text-2xl font-bold text-black leading-none text-center justify-center mt-5 sm:leading-tight"
      >
        Cloud Driven Fully Intelligent Productivity App
      </h2>
      <p class="mt-8 text-xl text-black text-left lg:pl-20">
        Technology doesn't have to be a distraction. With Prova you can enhance
        productivity at the very comfort of your device
      </p>
    </div>
  </div>

  <div>
    <h1 class="text-2xl font-bold text-center justify-center mt-8">contact us</h1>
  </div>

  <section class="py-6 bg-coolGray-100 text-black mt-4">
    <div
      class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x"
    >
      <div class="py-6 md:py-0 md:px-6">
        <div class="mt-4 space-y-4">
          <p class="flex items-center">
            <img src="../assets/instagram.png" alt="instagram" class="mr-4" />
            <span>@_officialProva</span>
          </p>
          <p class="flex items-center">
            <img src="../assets/twitter.png" alt="twitter" class="mr-4" />
            <span>@_officialProva</span>
          </p>
          <p class="flex items-center mt-4">
            <button
              class="border text-left inline-flex items-center px-6 py-3 rounded-lg bg-black text-white"
            >
              <img src="../assets/googleplay.png" alt="googleplay" />
              <span class="flex flex-col items-start leading-none">
                <span class="mb-1 text-xs">Coming soon</span>
                <span class="font-semibold title-font">Google Play</span>
              </span>
            </button>
            <span>
              <button
                class="border inline-flex items-center px-6 py-3 rounded-lg bg-black text-white"
              >
                <img src="../assets/googleplay.png" alt="googleplay" />
                <span class="flex flex-col items-start leading-none">
                  <span class="mb-1 text-xs">Coming soon</span>
                  <span class="font-semibold title-font">Apple Store</span>
                </span>
              </button>
            </span>
          </p>
        </div>
      </div>
      <form
        novalidate=""
        class="flex text-left flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
      >
        <label class="block">
          <span class="mb-1"></span>
          <input
            type="text"
            placeholder="Full name"
            class="border block p-4 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-black"
          />
        </label>
        <label class="block">
          <span class="mb-1"></span>
          <input
            type="email"
            placeholder="Email address"
            class="border p-4 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-black"
          />
        </label>
        <label class="block">
          <span class="mb-1"></span>
          <textarea
            rows="3"
            placeholder="Message"
            class="border px-4 py-2 block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-black"
          ></textarea>
        </label>
        <button
          type="button"
          class="color text-white border self-end px-8 py-3 text-lg rounded"
        >
          Send
        </button>
      </form>
    </div>
  </section>

  <!-- footer -->
  <footer class="mt-12 text-center justify-center end">
    <p class="py-4 pt-12 text-xl font-semibold">
      Prova Technologies Incorporated.
    </p>
    <p class="pt-4 text-xl font-semibold">@2021 Developed by the Prova Team</p>
  </footer>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {};
</script>

<style>
.header-image {
  background-image: url(../assets/image.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 95vh;
  width: 100%;
}

#wrapper {
  position: relative;
  width: fit-content;
  height: fit-content;
}

#overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: black;
  opacity: 0.5;
}
.text {
  color: #f7931e;
}
.color {
  background-color: #f7921ef5;
}
.end {
  background-color: #f8f8f8;
}
</style>
