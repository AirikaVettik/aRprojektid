<template>
      <header class="w-full">
        <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
          <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="mobileMenuOpen = true">
            <span class="sr-only">Open sidebar</span>
            <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
          </button>
          
          <div class="flex-1 flex justify-between px-4 sm:px-6">
          
            <div class="flex-1 flex">
              <form class="w-full flex md:ml-0" action="#" method="GET">
                <label for="search-field" class="sr-only">Otsing</label>
                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <SearchIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  </div>
                  <input name="search-field" id="search-field" class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400" placeholder="Otsing" type="search" />
                </div>
              </form>
            </div>
            <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                          <Menu as="div" class="relative flex-shrink-0">
                <div>
                  <MenuButton class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          
                    
                   <h1 class="text-center text-xl font-semibold text-gray-900">Tere, Airika!</h1>
                  </MenuButton>
                </div>
              </Menu>
                       <div>
                       <button @click="btnClick" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Koosta uus</button>
                       </div>
              <!-- Profile dropdown -->
            </div>
          </div>
        </div>
      </header>
</template>

<script>
import { ref } from 'vue'
import router from '../../../router'

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

import {
  MenuAlt2Icon,
  PlusSmIcon,
} from '@heroicons/vue/outline'

import { SearchIcon } from '@heroicons/vue/solid'

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuAlt2Icon,
    PlusSmIcon,
    SearchIcon,

  },
  methods: {
    btnClick: function(event) {
      router.push('new');
    },
  },
  setup() {
    const mobileMenuOpen = ref(false)

    return {
      userNavigation,
      mobileMenuOpen,
    }
  },
}
</script>