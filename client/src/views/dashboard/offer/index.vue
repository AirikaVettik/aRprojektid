<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-4 sm:mt-5 text-right sm:flex-none">
        <button @click="btnClick" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Koosta uus</button>
      </div>

   <div class="sm:flex sm:items-center pt-4">
      <div class="sm:flex-auto">
        <h1 class=" pt-1 text-xl text-center font-semibold text-gray-900 uppercase">Hinnapakkumised</h1>
      </div>
    </div>
      <div>

  <div class="sm:hidden pt-10">
    <label for="tabs" class="sr-only">Valik</label>
    <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
    <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md pt-2">
      <option>Kõik</option>

      <option>Koostamisel</option>

      <option>Väljasaadetud</option>
    </select>
  </div>
  <div class="hidden sm:block">
    <div class="border-b border-gray-200">
      <nav class="-mb-px-3 flex pt-10 uppercase" aria-label="Tabs">
        <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        <a href="#" class="border-teal-500 text-teal-600 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm" aria-current="page"> Kõik </a>

        <a href="#" class="border-transparent text-gray-500 hover:text-teal-700 hover:border-gray-300 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm"> Koostamisel</a>

        <a href="#" class="border-transparent text-gray-500 hover:text-teal-700 hover:border-gray-300 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm"> Väljasaadetud</a>

      </nav>
    </div>
  </div>
</div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6">Müügijuht</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6">Klient</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Projekt</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Staatus</th>
                  <th scope="col" class="relative py-3 sm:pr-6"><span class="sr-only">Vaata</span></th>
                  <th scope="col" class="relative py-3 sm:pr-6"><span class="sr-only">Edit</span></th>
                  <th scope="col" class="relative py-3 sm:pr-6"><span class="sr-only">Download</span></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(offer, offerIndex) in offers" :key="offerIndex">

                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{{ offer.object }}</span>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ offer.sellmanager }}</div>
                  </td>

                  <td class="whitespace-nowrap py-4 pl-2 pr-2 text-sm sm:pl-2">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{ offer.partner }}</div>
                        <div class="text-gray-500">{{ offer.contact }}</div>
                      </div>
                    </div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ offer.project }}</div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ offer.status }}</td>

                  <td class="relative whitespace-nowrap text-center px-2">
                    <button @click="showOffer">
                    <EyeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    </button>
                  </td>

                  <td class="relative whitespace-nowrap text-center">
                    <button><PencilIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" /></button>
                  </td>

                  <td class="relative whitespace-nowrap text-center px-2">
                  <button><DocumentDownloadIcon class="flex-shrink-0 h-7 w-7 text-gray-400" aria-hidden="true" /></button>
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Viewo v-if="displayoffer"  @close="closeOffer"/>
  </div>
</template>


<script>
import router from '../../../router'
import { ref } from 'vue'
import { PencilIcon, DocumentDownloadIcon, EyeIcon } from '@heroicons/vue/solid'
import { getOffers } from '../../../api/offers.js'
import Viewo from '../../../components/viewo.vue'

const people = [
  {
    client: 'aRfoto OÜ',
    title: 'Uus koduleht domeenile www.airikavettik.ee',
    contact: 'Airika Vettik',
    status: 'Koostamisel',
  },
    {
    client: 'Estonian Business OÜ',
    title: 'Uus e-pood domeenile www.eb.com',
    contact: 'Mihkel Tõrva',
    status: 'Väljasaadetud'
  },
    {
    client: 'Raindesign OÜ',
    title: 'Uus e-pood domeenile www.raindesign.ee',
    contact: 'Rain Tõrva',
    status: 'Kinnitatud'
  },
    {
    client: 'Janika OÜ',
    title: 'Uus koduleht domeenile www.raindesign.ee',
    contact: 'Janika Valga',
    status: 'Tagasilükatud'
  },
  // More people...
]

export default {
  components: {
    PencilIcon,
    DocumentDownloadIcon,
    EyeIcon,
    Viewo
  },

    data() {
    return { 
      displayoffer: false
    }
  },

  methods: {
    btnClick: function(event) {
      router.push('new');
    },
    showOffer() {
      console.log()
      this.displayoffer = true
    },
    closeOffer() {
      this.displayoffer = false
    }
  },
  setup() {
    const loading = ref(false)

    const offers = ref ([])
    async function allOffers() {
      loading.value = true
      offers.value = await getOffers()
      loading.value = false
    }
    allOffers()

    return {
      people,
      offers,
      loading
    }
  },
}
</script>