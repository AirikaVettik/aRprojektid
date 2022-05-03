<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">


   <div class="sm:flex sm:items-center pt-4">
      <div class="sm:flex-auto">
        <h1 class=" pt-10 text-xl text-center font-semibold text-gray-900 uppercase">Hinnapakkumised</h1>
      </div>
    </div>
      <div>

  <div class=" sm:block">
    <div class="border-b border-gray-200">
      <nav class="-mb-px-3 flex pt-10 uppercase" aria-label="Tabs">
        
        <a v-on:click="toggleTabs(1)" v-bind:class="{'border-teal-500 text-teal-600 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab === 1, 
        'border-transparent text-gray-500 hover:text-teal-700 hover:border-gray-300 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab !== 1}"> Koostamisel </a>

        <a v-on:click="toggleTabs(2)" @click="Sendout" v-bind:class="{'border-teal-500 text-teal-600 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab === 2, 
        'border-transparent text-gray-500 hover:text-teal-700 hover:border-gray-300 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab !== 2}"> Väljasaadetud </a>

        <a v-on:click="toggleTabs(3)" @click="All" v-bind:class="{'border-teal-500 text-teal-600 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab === 3, 
        'border-transparent text-gray-500 hover:text-teal-700 hover:border-gray-300 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab !== 3}"> Kõik </a>

      </nav>
    </div>
  </div>
</div>

  <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
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
                              <th scope="col" class="relative py-3 sm:pr-6"><span class="sr-only">Copy</span></th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="(offer, offerIndex) in offersdraft" :key="offerIndex">

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
                                <div class="text-gray-900">{{ offer.title}}</div>
                              </td>

                              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ offer.subStatus }}</td>

                              <td class="relative whitespace-nowrap text-center px-2">
                                <button @click="showOffer(offer.id)">
                                <EyeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                </button>
                              </td>

                              <td class="relative whitespace-nowrap text-center">
                                <button @click="dataOffer(offer.id)">
                                <PencilIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" /></button>
                              </td>

                              <td class="relative whitespace-nowrap text-center px-2">
                              <button @click="duplicateOffer(offer.id)">
                              <DocumentDuplicateIcon class="flex-shrink-0 h-7 w-7 text-gray-400" aria-hidden="true" /></button>
                              </td>
                              
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                 </div>
            </div>
  <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
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
                              <th scope="col" class="relative py-3 sm:pr-6"><span class="sr-only">Copy</span></th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="(offer, offerIndex) in offerssendout" :key="offerIndex">

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
                                <div class="text-gray-900">{{ offer.title}}</div>
                              </td>

                              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ offer.subStatus }}</td>

                              <td class="relative whitespace-nowrap text-center px-2">
                                <button @click="showOffer(offer.id)">
                                <EyeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                </button>
                              </td>

                              <td class="relative whitespace-nowrap text-center">
                                <button @click="dataOffer(offer.id)">
                                <PencilIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" /></button>
                              </td>

                              <td class="relative whitespace-nowrap text-center px-2">
                              <button @click="duplicateOffer(offer.id)">
                              <DocumentDuplicateIcon class="flex-shrink-0 h-7 w-7 text-gray-400" aria-hidden="true" /></button>
                              </td>
                              
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                 </div>
            </div>
  <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
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
                              <th scope="col" class="relative py-3 sm:pr-6"><span class="sr-only">Copy</span></th>
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
                                <div class="text-gray-900">{{ offer.title}}</div>
                              </td>

                              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ offer.subStatus }}</td>

                              <td class="relative whitespace-nowrap text-center px-2">
                                <button @click="showOffer(offer.id)">
                                <EyeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                </button>
                              </td>

                              <td class="relative whitespace-nowrap text-center">
                                <button @click="dataOffer(offer.id)">
                                <PencilIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" /></button>
                              </td>

                              <td class="relative whitespace-nowrap text-center px-2">
                              <button @click="duplicateOffer(offer.id)">
                              <DocumentDuplicateIcon class="flex-shrink-0 h-7 w-7 text-gray-400" aria-hidden="true" /></button>
                              </td>
                              
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                 </div>
            </div>


  
</div>
<Viewo v-if="displayoffer"  @close="closeOffer" :offer="offer"/>
<Editoffer v-if="edit" @close="closeOffer" @editOffer="editOffer" :editoffer="editoffer" />
</template>


<script>
import router from '../../../router'
import { ref } from 'vue'
import { PencilIcon, EyeIcon, DocumentDuplicateIcon  } from '@heroicons/vue/solid'
import { getDocuments, getDocument, getOffers, getOffersDraft, getOffersSendout, updateDocument, duplicateDocument } from '../../../api/documents.js'
import Editoffer from "../../../components/editoffer.vue"
import Viewo from '../../../components/viewo.vue'

export default {
  components: {
    PencilIcon,
    EyeIcon, 
    Viewo,
    Editoffer,
    DocumentDuplicateIcon
  },
    
  setup() {
    const displayoffer = ref(false)
    const loading = ref(false)
    const openTab = ref(1)
    const edit = ref(false)

    const offers = ref ([])
    const offer = ref([])
    const offersdraft = ref([])
    const offerssendout = ref([])

    const editoffer = ref([])

    const duplicateoffer = ref([])

    const showOffer = async(id)  => {
      displayoffer.value = true
      offer.value = await getDocument(id)
    }
    const closeOffer = async()=> {
      displayoffer.value = false
      edit.value = false
    }

    const toggleTabs = async(tabNumber) =>{
      openTab.value = tabNumber
    }
    async function allOffersDraft() {
      loading.value = true;
      offersdraft.value = await getOffersDraft();
      loading.value = false;
    }
    allOffersDraft();

    const All = async() => {
      loading.value = true;
      offers.value = await getOffers();
      loading.value = false;
    }

   const Sendout = async() => {
      loading.value = true;
      offerssendout.value = await getOffersSendout();
      loading.value = false;
    }

    const dataOffer = async (id) => {
      edit.value = true
      editoffer.value = await getDocument(id)
      console.log(editoffer.value)
    }

    async function editOffer(newOffer) {
      edit.value = false 
      const id  = newOffer.id
      console.log(id)
      console.log(newOffer)
      newOffer.value = await updateDocument(id, newOffer)
      offersdraft.value = await getOffersDraft();
      offers.value = await getOffers();
      offerssendout.value = await getOffersSendout();
    }

    const duplicateOffer = async(id) => {
      duplicateoffer.value = await duplicateDocument(id)
      offersdraft.value = await getOffersDraft();
      offers.value = await getOffers();
      offerssendout.value = await getOffersSendout();
    }



    return {
      offers,
      offer,
      offersdraft,
      offerssendout,
      openTab,
      toggleTabs,
      displayoffer,
      showOffer,
      closeOffer,
      Sendout,
      All,
      loading,
      edit,
      editoffer,
      editOffer,
      dataOffer,
      duplicateoffer,
      duplicateOffer,
    }
  },
}
</script>