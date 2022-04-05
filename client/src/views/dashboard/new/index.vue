
<template>

<div class="px-4 sm:px-6 lg:px-8 mt-10">
    <div class="sm:flex sm:items-center pt-4 pb-4">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900 uppercase">Koosta uus projekt</h1>
        <div>
        <p class="mt-2 text-sl text-gray-500">...</p>
        </div>
      </div>
    </div>
   <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-teal-600 bg-white': openTab !== 1, 'text-white bg-teal-600': openTab === 1}">
            Hinnapakkumine
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-teal-600 bg-white': openTab !== 2, 'text-white bg-teal-600': openTab === 2}">
            Projekti kava
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-teal-600 bg-white': openTab !== 3, 'text-white bg-teal-600': openTab === 3}">
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
import { CheckIcon } from '@heroicons/vue/solid'

const tabs = [
  { name: 'Hinnapakkumine', href: '#', current: '' },
  { name: 'Projekti kava', href: '#', current: '' },
  { name: 'Projekti lõpetamine', href: '#', current: '' },
]

export default {
    
    components: {
    CheckIcon,
    Offer,
    Project,
    Finish
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
}
</script>