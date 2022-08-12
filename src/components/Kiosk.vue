<template>
  <div class="flex w-screen h-screen pt-4 bg-gray-100">
    <div class="mx-auto flex flex-col gap-6 lg:items-center">
      <div class=" flex md:w-3/4 md:mx-auto">
        <div class="w-1/3">
          <img
            src="../assets/pureCHIRONotesLogo.png"
            height="200px"
            width="200px"
            class="mx-auto object-fit"
          />
        </div>

        <div class="bg-white border-1 border-gray-200 rounded-md w-2/3">
          <h1 class="text-center font-semibold">Office Message</h1>
          <p class="text-sm text-slate-400 px-2 md:px-4 md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            voluptatum consectetur similique repellat nesciunt illum quidem.
            Soluta minus deserunt dolor?
          </p>
        </div>

        <!--check in goes here-->
      </div>

      <div class="md:w-3/4 md:mx-auto lg:mt-5">
        <div class="bg-white w-full p-5 mx-auto">
          <div class="flex flex-col gap-4">
            <div class="flex justify-between">
              <h5 class="text-center font-semibold">Please Check in</h5>
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton
                    class="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-cyan-400 text-sm text-white font-semibold hover:bg-purple-500"
                  >
                    I'm New Here
                    <ChevronDownIcon
                      class="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>

                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          ]"
                          >New Client</a
                        >
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          ]"
                          >New Family</a
                        >
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
            <div class="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Last name"
                class="p-3 w-full border border-slate-300 rounded-xl "
              />
              <input
                type="text"
                placeholder="Last 4 phone"
                class="p-3 w-full border border-slate-300 rounded-xl"
              />
            </div >
            <div class="flex justify-end">
            <button @click="data.open = true"
              class="py-2 px-6 text-white bg-cyan-400 rounded-md mb-5 hover:bg-purple-500" 
            >
              Check In
            </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { useFormStore } from "../store/formStore.js";
const data = useFormStore();


</script>
