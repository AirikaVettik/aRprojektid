
<template>

<div class="px-4 sm:px-6 lg:px-8 mt-10">
    <div class="sm:flex sm:items-center pt-4 pb-4">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Hinnapakkumine</h1>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button @click="btnClick" type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto">Tagasi</button>
      </div>
        </div>

  <div class="lg:border-t lg:border-b lg:border-gray-200 mt-10"> 
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0" aria-label="Progress">
      <ol role="list" class="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none">
        <li v-for="(step, stepIdx) in steps" :key="step.id" class="relative overflow-hidden lg:flex-1">
          <div :class="[stepIdx === 0 ? 'border-b-0 rounded-t-md' : '', stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '', 'border border-gray-200 overflow-hidden lg:border-0']">
            <a v-if="step.status === 'complete'" :href="step.href" class="group">
              <span class="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true" />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center bg-teal-600 rounded-full">
                    <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
                  </span>
                </span>
                <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                  <span class="text-xs font-semibold tracking-wide uppercase">{{ step.name }}</span>
                  <span class="text-sm font-medium text-gray-500">{{ step.description }}</span>
                </span>
              </span>
            </a>
            <a v-else-if="step.status === 'current'" :href="step.href" aria-current="step">
              <span class="absolute top-0 left-0 w-1 h-full bg-teal-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true" />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center border-2 border-teal-600 rounded-full">
                    <span class="text-teal-600">{{ step.id }}</span>
                  </span>
                </span>
                <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                  <span class="text-xs font-semibold text-teal-600 tracking-wide uppercase">{{ step.name }}</span>
                  <span class="text-sm font-medium text-gray-500">{{ step.description }}</span>
                </span>
              </span>
            </a>
            <a v-else :href="step.href" class="group">
              <span class="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true" />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                    <span class="text-gray-500">{{ step.id }}</span>
                  </span>
                </span>
                <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                  <span class="text-xs font-semibold text-gray-500 tracking-wide uppercase">{{ step.name }}</span>
                  <span class="text-sm font-medium text-gray-500">{{ step.description }}</span>
                </span>
              </span>
            </a>
            <template v-if="stepIdx !== 0">
              <!-- Separator -->
              <div class="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                <svg class="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
                  <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke" />
                </svg>
              </div>
            </template>
          </div>
        </li>
      </ol>
    </nav>
  </div>
 
    <Offer />


  </div>
</template>

<script>
import router from '../../../router'
import Offer from '../../../components/offer.vue'
import { ref } from 'vue'
import { CheckIcon } from '@heroicons/vue/solid'

const steps = [
  { id: 'H', name: 'Hinnapakkumine', description: 'Kliendi andmed, pakkumise kirjeldus', href: '#', status: 'current' },
  { id: 'P', name: 'Projekt', description: 'Cursus semper viverra.', href: '#', status: 'upcoming' },
  { id: 'L', name: 'Lõpetatud', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
]

export default {
    components: {
    CheckIcon,
    Offer
  },
  setup() {
    return {
      steps,
    }
  },

    methods: {
    btnClick: function(event) {
      router.push('offer');
    },
  },
}
</script>