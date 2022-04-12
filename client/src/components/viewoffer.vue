<template>

          <div>
            <div>
              <div class="mt-1 l-2 text-left sm:mt-0">
                <DialogTitle as="h3" class="text-xl leading-6 font-bold text-gray-900">  </DialogTitle>
                <p class="mt-1 text-xl text-gray-500"> </p>

                <div>
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div class="border-t border-gray-200 px-2 py-2 sm:p-0">
                          <dl class="sm:divide-y sm:divide-gray-200">

                          <div class="sm:flex sm:items-center pt-4 pb-4">
                                <div class="sm:flex-auto">
                                    <h1 class="text-xl pl-2 font-semibold text-gray-900 uppercase"> {{offer.title}}</h1>
                                    <div>
                                    <p class="mt-2 pl-2 text-sl text-gray-500">{{offer.objectoffer}}: {{offer.offerstatus}}</p>
                                    </div>
                                </div>
                                </div>
                            
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Müügijuht</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"> {{ offer.sellmanager }} </dd>
                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Projekti kestvus</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"> {{ offer.period }} </dd>
                              </div>

                               <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Projektiga saab alustada</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"> {{ offer.start }} </dd>
                            </div>
                            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Projektiga saab alustada</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"> {{ offer.start }} </dd>
                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Kliendi andmed</dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                    <ul v-for="client in offer.partner" role="list">
                                      <div> {{ client.name }} </div>
                                      <div> {{ client.domain }} </div>
                                      <div> Kontaktisik: {{ client.contact }} </div>
                                      <div> - </div>
                                      <div> {{ client.description }} </div>
                                    </ul>
                                  </dd>
                              </div>

                          <div class="sm:flex sm:items-center pt-4 pb-4">
                                <div class="sm:flex-auto">
                                    <h1 class="text-xl pl-2 font-semibold text-gray-900 uppercase"> Hinnapakkumise sisu </h1>
                                </div>
                                </div>

                            <div v-for="offer in offer.offer" class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">{{ offer.name }}</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">{{ offer.description }}</dd>

                                    <div class="py-4 sm:py-5 col-start-2 sm:grid-cols-1">
                                    <table class="min-w-full divide-y divide-gray-300 sm:col-span-1">
                                                <thead>
                                                <tr>
                                                    <th class=" w-1/6 px-1 text-right text-sm font-semibold text-gray-900 sm:table-cell">Tunnid (h) </th>
                                                    <th class=" w-1/6 px-1 text-right text-sm font-semibold text-gray-900 sm:table-cell">Hind (€/h)</th>
                                                    <th class=" w-1/6 py-1 text-right text-sm font-semibold text-gray-900 sm:table-cell">Kokku (€)</th>
                                                </tr>
                                                </thead>
                                                
                                                <tbody>
                                                <tr>
                                                    <td class=" py- px-2 text-center text-sm text-gray-500 sm:table-cell">
                                                    {{offer.hours}}
                                                </td>
                                                <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                                    {{offer.price}}
                                                </td>
                                                <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                                    <a name="total" id="total" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200"/>
                                                    <p class="text-right" > {{offer.total}}</p> 
                                                </td>
                                                </tr>
                                                </tbody>
                                    </table>
                                    </div>

                            </div>

                             <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500"> Tingimused </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">{{ offer.conditions }}</dd>
                            </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500"></dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <table class="min-w-full divide-y divide-gray-300">
                                
                                <div class="py-2 ml-auto w-full pr-10sm:w-full lg:w-2/4">
                                    <div class="flex justify-between mb-5 place-items-end">
                                        <div class="text-gray-900 text-right flex-1">Töötunnid </div>
                                        <div class="text-right w-40">
                                            <div class="text-lg text-gray-800">{{offer.totalhours}}h</div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between mb-5 place-items-end">
                                        <div class="text-gray-900 text-right flex-1">Projekti ettemaks</div>
                                        <div class="text-right w-40">
                                            <div class="text-lg text-gray-800">{{offer.prepayment}}</div>
                                        </div>
                                    </div>
                                
                                    <div class="py-2 border-t border-b">
                                        <div class="flex justify-between place-items-end ">
                                            <div class="text-xl text-gray-900 text-right flex-1 uppercase ">Projekti hind</div>
                                            <div class="text-right w-40">
                                                <div class="text-xl text-gray-800 font-bold">{{offer.total}}€</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                              
                                </table>
                                    </dd>
                                </div>

                              
                            </dl>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="mt-2 sm:mt-6 grid sm:grid-cols-2 text-center px-10 ">
                <div class="pb-3 pt-3"><button type="button" class="w-2/4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:col-start-2 sm:text-sm">Lae alla .pdf</button></div>
                <div class="pb-3 pt-3"><button type="button" class="w-2/4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:col-start-2 sm:text-sm" @click="close">Sulge</button></div>
            </div>
          </div>
 
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PencilIcon, DocumentDownloadIcon, EyeIcon } from '@heroicons/vue/solid'
import { getOffer } from '../api/offers.js'


export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    PencilIcon,
    DocumentDownloadIcon,
    EyeIcon
  },

  methods: {
    close() {
      this.$emit('close')
    }
  },

  setup() {
    const open = ref(true)
    const loading = ref(false)

    const offer = ref([])
    async function oneOffer() {
        loading.value = true
        offer.value = await getOffer()
        loading.value = false
    }
    oneOffer()

    return {
        offer,
        loading,
        open,
    }
  },
}
</script>