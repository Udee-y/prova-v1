<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="fixed w-full " v-slot="{ open }" :class="{'scrolled' : !view.atTopPage}" >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="block h-8 w-auto" :src="logo" alt="Workflow" />
          </div>
        </div>
        <div class="hidden justify-center md:flex md:space-x-8">
          <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
          <a
            href="#"
            class="text-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium"
          >
            About us
          </a>
          <a
            href="#"
            class="border-transparent text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
          >
            Contact Us
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Open main menu</span>
                <MenuIcon
                  v-if="!open"
                  class="block h-6 w-6"
                  aria-hidden="true"
                />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <button
              type="button"
              class="relative hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white color shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <span>Get Started</span>
            </button>
          </div>
          <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
            <!-- Profile dropdown -->
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden text-center justify-center ">
      <div class="pt-2 pb-3 space-y-1 bg-white text-center justify-center">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <DisclosureButton
          as="a"
          href="#"
          class="bg-white  text-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base  font-medium sm:pl-5 sm:pr-6"
          >About us</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="bg-white  text-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 "
          >Contact us</DisclosureButton
        >

        <button
          type="button"
          class="relative inline-flex items-center mx-auto  px-4 mt-20 py-2 border border-transparent text-sm font-medium rounded-md text-white color shadow-sm"
        >
          <span>Get Started</span>
        </button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  data() {
    return {
      logo: require("../assets/prova.png"),
      view:{
        atTopPage: true
      }
    };
  },
  beforeMount(){
    window.addEventListener("scroll", this.handleScroll)
  },

  methods:{
    handleScroll(){
      if(window.pageYOffset > 0){
        if(this.view.atTopPage) this.view.atTopPage = false;
      }
      else{
        if(!this.view.atTopPage) this.view.atTopPage = true;
      }
    }
  },
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,

    MenuIcon,
    XIcon,
  },
 
}
</script>

<style scoped>
.color {
  background-color: #f7921ef5;
}

</style>
