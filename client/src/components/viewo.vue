<template>
  <TransitionRoot as="template" :show="open">

    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
  
      <div class="flex items-end justify-center min-h-screen pt-4 px-10 pb-20 text-center sm:block sm:p-10 ">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-60 transition-opacity" /> 
        </TransitionChild>

        <!-- Modal -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-4xl sm:w-full sm:p-5">
            <div>
              <div class="mt-1 text-center sm:mt-5">
                <DialogTitle as="h3" class="text-xl leading-6 font-bold text-gray-900"> </DialogTitle>
                <p class="mt-1 text-xl text-gray-500">  </p>

                      <div class="flex flex-wrap">
                        <div class="w-full">
                          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded">
                            <div class="px-2 py-2 flex-auto">
                              <div class="tab-content tab-space">
                                
                                              <div>
              <div class="mt-1 l-2 text-left sm:mt-0">
                <DialogTitle as="h3" class="text-xl leading-6 font-bold text-gray-900">  </DialogTitle>
                <p class="mt-1 text-xl text-gray-500"> </p>

                <div>
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div class="border-t border-gray-200 px-2 py-2 sm:p-0">
                          <dl class="sm:divide-y sm:divide-gray-200">
                          <!-- Pakkumise nimi, staatus,  müügijuht, projekti kestvus, projekti algus, domeen, klient, kontaktisik, ettevõttest -->
                                  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                                  

                                                <div class="px-4 py-5 sm:px-6">
                                                  <h3 class="text-lg leading-6 font-medium text-gray-900">{{offer.title}}</h3>
                                                  <p class="mt-1 max-w-2xl text-sm text-gray-500">{{offer.status}}</p>
                                                </div>
                                                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                                                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                    <div class="sm:col-span-1">
                                                      <dt class="text-sm font-medium text-gray-500">Müügijuht</dt>
                                                      <dd class="mt-1 text-sm text-gray-900">{{ offer.sellmanager }}</dd>
                                                    </div>
                                                    <div class="sm:col-span-1">
                                                      <dt class="text-sm font-medium text-gray-500">Projekti kestvus</dt>
                                                      <dd class="mt-1 text-sm text-gray-900"> {{ offer.period }} </dd>
                                                    </div>
                                                    <div class="sm:col-span-1">
                                                      <dt class="text-sm font-medium text-gray-500">Projektiga saab alustada</dt>
                                                      <dd class="mt-1 text-sm text-gray-900"> {{ offer.start }} </dd>
                                                    </div>
                                                    <div class="sm:col-span-1">
                                                      <dt class="text-sm font-medium text-gray-500">Domeen</dt>
                                                      <dd class="mt-1 text-sm text-gray-900"> {{ offer.domain }} </dd>
                                                    </div>
                                                    <div class="sm:col-span-1">
                                                      <dt class="text-sm font-medium text-gray-500">Klient</dt>
                                                      <dd class="mt-1 text-sm text-gray-900"> {{ offer.partner }} </dd>
                                                    </div>
                                                    <div class="sm:col-span-1">
                                                      <dt class="text-sm font-medium text-gray-500">Kontaktisik</dt>
                                                      <dd class="mt-1 text-sm text-gray-900"> {{ offer.contact}} </dd>
                                                    </div>
                                                    <div class="sm:col-span-2">
                                                      <dt class="text-sm font-medium text-gray-500">Ettevõttest</dt>
                                                      <dd class="mt-1 text-sm text-gray-900">{{ offer.description }}</dd>
                                                    </div>


                                               <!-- Hinnapakkumise sisu -->
                                                    <h1 class="mt-5 text-xm font-semibold text-gray-900 uppercase"> Hinnapakkumise sisu </h1>
                                                    <div v-for="offer in offer.offer" class="sm:col-span-2">
                                                      <dt class="mt-5 text-sm font-medium text-gray-500"> {{ offer.name }} </dt>
                                                      <dd class="mt-1 text-sm text-gray-900">{{ offer.description }}</dd>

                                                          <div class="py-4 sm:py-5 grid justify-items-end ">
                                                                <table class="divide-y divide-gray-500 sm:col-span-1 ">
                                                                            <thead>
                                                                            <tr>
                                                                                <th class=" w-1/6 px-1 text-right text-sm font-semibold text-gray-900 sm:table-cell">Tunnid (h) </th>
                                                                                <th class=" w-1/6 px-1 text-right text-sm font-semibold text-gray-900 sm:table-cell">Hind (€/h)</th>
                                                                                <th class=" w-1/6 py-1 text-right text-sm font-semibold text-gray-900 sm:table-cell">Kokku (€)</th>
                                                                            </tr>
                                                                            </thead>
                                                                            
                                                                            <tbody>
                                                                            <tr>
                                                                                <td class=" py- px-2 text-right text-sm text-gray-500 sm:table-cell"> {{offer.hours}} </td>
                                                                                <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{offer.price}} </td>
                                                                                <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{offer.total}} </td>
                                                                            </tr>
                                                                            </tbody>
                                                                </table>
                                                            </div>

                                                    </div> 

                                       <!-- Tingimused -->
                                                    <div class="sm:col-span-2">
                                                      <dt class="text-sm font-medium text-gray-500">Tingimused</dt>
                                                      <dd class="mt-1 text-sm text-gray-900">{{ offer.conditions }}</dd>
                                                    </div>
                                                    </dl>
                                                    </div>
                                                      </div>
    
                          
                          <!-- Arvutused - töötunnid, ettemaks ja lõpphind -->
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500"></dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <table class="min-w-full divide-y divide-gray-300">
                                
                                <div class="py-2 ml-auto w-full sm:w-full lg:w-2/4">
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

             <!-- Lae alla hinnapakkumine-->
            <div class="mt-2 sm:mt-6 grid sm:grid-cols-1 text-center px-10 ">
                <div class="pb-3 pt-3"><button type="button" class="w-1/2 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:col-start-2 sm:text-sm">Lae alla .pdf</button></div>
            </div>
                           
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> 

              </div>
            </div>
               <div class="mt-5 sm:mt-6 text-center">
              <button type="button" class="w-1/3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:col-start-2 sm:text-sm" @click="close">Sulge</button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, toRefs } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PencilIcon, DocumentDownloadIcon, EyeIcon } from '@heroicons/vue/solid'



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
  props: ['offer'],

  setup(props, { emit }) {

    const { offer } = toRefs(props)

    const open = ref(true)
    
    function close() {
      emit('close')
  }

    return {
      open,
      close,
      offer,
    }
  },
}
</script>