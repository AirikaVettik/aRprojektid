
<template>
<div class="px-4 sm:px-6 lg:px-8 mt-10">
    <div class="sm:flex sm:items-center pt-4 pb-4">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900 uppercase">Koosta uus</h1>
        <div>
        <p class="mt-2 text-sl text-gray-500">...</p>
        </div>
      </div>
   <!-- Staatuse nupp -->
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Listbox as="div" v-model="selected">
                <ListboxLabel class="sr-only"> Change project status </ListboxLabel>
                    <div class="relative">
                    <div class="inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative inline-flex items-center bg-teal-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" /> <!-- Staatuse ikoon -->
                            <p class="ml-2.5 text-l font-medium">{{ selected.title }}</p> <!-- Staatuse pealkiri-->
                        </div>
                            <ListboxButton class="relative inline-flex items-center bg-teal-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500">
                                <span class="sr-only">Change project status</span>
                                <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" /> <!-- Staatuse rippmenüüvaliku ikoon -->
                            </ListboxButton>
                        </div>
                    </div>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="origin-top-right absolute z-10 right-0 mt-2 w-96 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <ListboxOption as="template" v-for="option in publishingOptions" :key="option.title" :value="option" v-slot="{ active, selected }">
                        <li :class="[active ? 'text-white bg-teal-500' : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm']">
                        <div class="flex flex-col">
                            <div class="flex justify-between">
                            <p :class="selected ? 'font-semibold' : 'font-normal'">
                                {{ option.title }}
                            </p>
                            <span v-if="selected" :class="active ? 'text-white' : 'text-teal-500'">
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                            </div>
                            <p :class="[active ? 'text-teal-200' : 'text-gray-500', 'mt-2']">
                            {{ option.description }}
                            </p>
                        </div>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox>
        </div>  
    </div>

   <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" @click="toggleTabs(1)" v-bind:class="{'text-teal-600 bg-white': openTab !== 1, 'text-white bg-teal-600': openTab === 1}">
            Hinnapakkumine
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" @click="toggleTabs(2)" v-bind:class="{'text-teal-600 bg-white': openTab !== 2, 'text-white bg-teal-600': openTab === 2}">
            Projekti kava
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" @click="toggleTabs(3)" v-bind:class="{'text-teal-600 bg-white': openTab !== 3, 'text-white bg-teal-600': openTab === 3}">
            Projekti lõpetamine
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <Offer />
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <Project />
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <Finish />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 

  </div>
</template>

<script>
import router from '../../../router'
import Offer from '../../../components/offer.vue'
import Project from '../../../components/project.vue'
import Finish from '../../../components/finish.vue'
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/solid'

const tabs = [
  { name: 'Hinnapakkumine', href: '#', current: '' },
  { name: 'Projekti kava', href: '#', current: '' },
  { name: 'Projekti lõpetamine', href: '#', current: '' },
]
const publishingOptions = [
  { title: 'Koostamisel', description: '', current: true , color: 'amber-200'},
  { title: 'Väljasaadetud', description: '', current: false, color: 'yellow'  },
  { title: 'Tagasilükatud', description: '', current: false },
  { title: 'Uus projekt', description: '', current: false },
  { title: 'Töösse võetud', description: '', current: false },
  { title: 'Kujundustööd', description: '', current: true },
  { title: 'Arendustööd', description: '', current: false },
  { title: 'Testimine', description: '', current: false },
  { title: 'Ootel', description: '', current: false },
  { title: 'Pausil', description: '', current: false },
  { title: 'Lõpetatud', description: '', current: false },
  { title: 'Parandustööd', description: '', current: false },
  { title: 'Hooldustööd', description: '', current: false },
]
  

export default {
    components: {
    CheckIcon,
    Offer,
    Project,
    Finish,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronDownIcon,
  },
  data() {
    return {
      openTab: 1
    }
  },

    methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
        
  },
  
  setup() {
    const selected = ref(publishingOptions[0])

    return {
      publishingOptions,
      selected,
    }
  },
}
</script>