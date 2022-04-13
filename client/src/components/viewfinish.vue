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

                          <div class="px-4 py-5 sm:px-6">
                                                  <h3 class="text-lg mb-10 leading-6 font-medium text-gray-900">{{offer.title}}</h3>
                                                  
                                                  
                                                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                    <div class="sm:col-span-1">
                                                      <dt class="text-sm font-medium text-gray-500">Projektijuht</dt>
                                                      <dd class="mt-1 text-sm text-gray-900">{{ offer.manager }}</dd>
                                                    </div>
                                                    <div class="sm:col-span-1">
                                                      <dt class="text-sm font-medium text-gray-500">Müügijuht</dt>
                                                      <dd class="mt-1 text-sm text-gray-900"> {{ offer.sellmanager}} </dd>
                                                    </div>
                                                    </dl>
                                                </div>
                                                

                                                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                                                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                    
                        <!-- Ostetud moodulite/pluginate kehtivus -->                         
                                                  
                          <h1 class="text-xl mt-10 font-semibold text-gray-900 uppercase sm:col-span-2"> Ostetud moodulite/pluginate kehtivus </h1>
                            <div class="sm:col-span-2">
                            <div>
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4"></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Ostmise kuupäev</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Lõppkuupäev</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="plugin in offer.plugins" class="divide-x divide-gray-200">

                                        <td class=" py-2 px-2 text-left text-sm text-gray-500 sm:table-cell"> {{ plugin.name }} </td>

                                        <td class="py-3 px-3 text-right text-sm text-gray-500 sm:table-cell"> {{ plugin.start}} </td>

                                        <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{plugin.end}} </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>

                       <!-- Garantii -->      
                            <h1 class="text-xl font-semibold text-gray-900 uppercase sm:col-span-2"> Garantii </h1>
                            <div class="sm:col-span-2">
                            <div>
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4"></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Algus</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Lõpp</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="guaranty in offer.guaranty" class="divide-x divide-gray-200">

                                        <td class=" py-2 px-2 text-left text-sm text-gray-500 sm:table-cell"> {{ guaranty.name }} </td>

                                        <td class="py-3 px-3 text-right text-sm text-gray-500 sm:table-cell"> {{ guaranty.start }} </td>

                                        <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{ guaranty.end }} </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
 


                          <!-- Projekti lõpetamine -->
                            <h1 class="text-xl font-semibold text-gray-900 uppercase"> Projekti lõpetamine </h1>
                            <div class="sm:col-span-2">
                              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pl-4">Kuupäev</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="projectend in offer.projectend" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{ projectend.date }} </td>

                                        <td class=" py-2 px-2 text-right  text-sm text-gray-500 sm:table-cell"> {{ projectend.name }} </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                    
                                </div>

                                </div>
                            </div>
                            </div>
                      </dl> 
                      </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PencilIcon, DocumentDownloadIcon, EyeIcon, CalendarIcon } from '@heroicons/vue/solid'
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
    EyeIcon,
    CalendarIcon
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