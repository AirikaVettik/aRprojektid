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
     <!-- Projektinimi, staatus, projektijuht, töö teostaja -->
                          <div class="px-4 py-5 sm:px-6">
                                                  <h3 class="text-lg leading-6 font-medium text-gray-900">{{offer.title}}</h3>
                                                  <p class="mt-1 mb-5 max-w-2xl text-sm text-gray-500">{{offer.status}}</p>
                                                  
                                                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                    <div class="sm:col-span-1">
                                                      <dt class="text-sm font-medium text-gray-500">Projektijuht</dt>
                                                      <dd class="mt-1 text-sm text-gray-900">{{ offer.manager }}</dd>
                                                    </div>
                                                    <div class="sm:col-span-1">
                                                      <dt class="text-sm font-medium text-gray-500">Tööd teostab</dt>
                                                      <dd class="mt-1 text-sm text-gray-900"> {{ offer.developer}} </dd>
                                                    </div>
                                                    </dl>
                                                </div>
                                                

                                                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                    
                                                    
                            <!-- Projektilogi-->            
                             <h1 class="text-xl mt-5 font-semibold text-gray-900 uppercase"> Projekti logi </h1>

                                 <div class="sm:col-span-2">
                                                        <dt class="text-sm font-medium text-gray-500">
                                                            <div class="bg-white shadow overflow-hidden sm:rounded-md overflow-y-auto h-64">
                                                              <ul role="list" class="divide-y divide-gray-200 overscroll-contain">
                                                              <li v-for="log in offer.logs" :key="log.id" class="overscroll-contain">
                                                                  
                                                                  <div class="px-3 py-3 sm:px-2">

                                                                   <div class="mt-2 sm:flex sm:justify-between">
                                                                      <div class="flex items-center justify-between">
                                                                        <p class="text-sm font-medium text-teal-900 truncate">{{ log.title }}</p>
                                                                      </div>

                                                                      <div class="mt-2 flex items-center text-xs text-gray-500 sm:mt-0">
                                                                        <CalendarIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-500"/>
                                                                          <p>Sissekanne <time>{{ log.date }}</time></p>
                                                                        </div>
                                                                      </div>
                                                                        <div class="sm:flex">
                                                                            <p class="mt-2 flex text-left text-xs text-gray-900">{{ log.info }}</p>
                                                                       </div>
                                                                  </div>
                                                              </li>
                                                              </ul>
                                                              
                                                            </div>
                                                            
                                                          </dt>
                               </div>
                          
                           <!-- Ajagraafik-->
                           <h1 class="text-xl font-semibold text-gray-900 uppercase"> Ajagraafik </h1>
                            <div class="sm:col-span-2">
                            <div >
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">Projekti etapp</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Planeeritud algus</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Planeeritud lõpp</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="timetable in offer.timetable" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input id="done" name="done" type="checkbox" v-model="timetable.checkbox" class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
                                        
                                        </td>
                                        
                                        <td class=" py-2 px-2 text-left text-sm text-gray-500 sm:table-cell"> {{ timetable.name }} </td>
                                        <td class="py-3 px-3 text-right text-sm text-gray-500 sm:table-cell"> {{ timetable.start}} </td>
                                        <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{timetable.finish}} </td>
                                        </tr>

                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                          <!-- Eelarve -->
                          <h1 class="text-xl font-semibold text-gray-900 uppercase"> Eelarve</h1>
                                                    
                                  <div class="sm:col-span-2">
                                  <div class=" shadow ring-1 ring-black ring-opacity-5 md:rounded-lg overflow-x-auto">
                                  <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">Projekti etapp</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Planeeritud töötunnid (h)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Müümishind (€)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 ">Tegelikud töötunnid (h)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Omahind (€)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Kasum (€)</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="budget in offer.budget" class="divide-x divide-gray-200">
                                        
                                        <td class="w-1/6 py-2 px-2 text-left text-sm text-gray-500 sm:table-cell">
                                        {{ budget.name }}
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        {{ budget.hours }}
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        {{ budget.price }}
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        {{ budget.realhours }}
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                         {{ budget.realprice }}
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right font-semibold text-sm text-gray-700 sm:table-cell">
                                          {{ budget.profit }}
                                        </td>

                                        </tr>
                                    </tbody>
                                    
                                  </table>  
                                  </div>
                                  <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                   
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                          <table class="min-w-full divide-y divide-gray-300">
                                      
                                              <div class=" ml-auto w-full sm:w-full lg:w-2/4">
                                                  <div class="flex justify-between mb-3 place-items-end">
                                                      <div class="text-gray-900 text-right flex-1">Müügihind </div>
                                                      <div class="text-right w-40">
                                                          <div class="text-md text-gray-800">{{offer.total}} €</div>
                                                      </div>
                                                  </div>
                                                  <div class="flex justify-between mb-3 place-items-end">
                                                      <div class="text-gray-900 text-right flex-1">Omahind</div>
                                                      <div class="text-right w-40">
                                                          <div class="text-mdtext-gray-800">{{offer.cost}} €</div>
                                                      </div>
                                                  </div>
                                                  <div class="flex justify-between mb-3 place-items-end">
                                                      <div class="text-gray-900 text-right flex-1">Pluginad</div>
                                                      <div class="text-right w-40">
                                                          <div class="text-mdtext-gray-800">{{offer.pluginstotal}} €</div>
                                                      </div>
                                                  </div>
                                              
                                                  <div class="py-2 border-t border-b">
                                                      <div class="flex justify-between place-items-end ">
                                                          <div class="text-md text-gray-900 text-right flex-1 uppercase ">Kasum</div>
                                                          <div class="text-right w-40">
                                                              <div class="text-md text-gray-800 font-bold">{{offer.profit}}€</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                            </table>
                                          </dd>
                                    </div>
                                    </div>
                          <!-- Pluginad/moodulid -->
                          <h1 class="text-xl font-semibold text-gray-900 uppercase"> Ostetud pluginad </h1>
                            <div class="sm:col-span-2">

                             <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 overflow-x-auto">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pl-4">Kuupäev</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Plugin</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-2 text-right text-sm font-semibold text-gray-900 sm:pr-6">Summa(€)</th>
                                      
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="plugin in offer.plugins" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{ plugin.start }} </td>
                                        <td class="py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{ plugin.name}} </td>
                                        <td class="py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{ plugin.sum}} </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                    
                                </div>
                                 <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                   
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                          <table class="min-w-full divide-y divide-gray-300">
                                      
                                              <div class=" ml-auto w-full sm:w-full lg:w-2/4">
                                                  <div class="flex justify-between mb-3 place-items-end">
                                                      <div class="text-gray-900 text-right flex-1"> Kokku </div>
                                                      <div class="text-right w-40">
                                                          <div class="text-md text-gray-800">{{offer.pluginstotal}} €</div>
                                                      </div>
                                                  </div>
                                                  
                                              
                                                  
                                              </div>
                                            </table>
                                          </dd>
                                    </div>
                                </div>
                                
                            </div>
                         </div>
                          <!-- Maksegraafik -->
                            <h1 class="text-xl font-semibold text-gray-900 uppercase"> Maksegraafik </h1>
                            <div class="sm:col-span-2">
                              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pl-4">Kuupäev</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Maksenimi</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Summa</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="payment in offer.payment" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input id="done" name="done" type="checkbox" v-model="payment.checkbox" class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
                                        </td>

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell"> {{ payment.date }} </td>

                                        <td class=" py-2 px-2 text-right  text-sm text-gray-500 sm:table-cell"> {{ payment.name }} </td>

                                        <td class="w-1/6 py-3 px-3 text-right text-sm text-gray-500 sm:table-cell"> {{ payment.sum }}€ </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                    
                                </div>
                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                   
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                          <table class="min-w-full divide-y divide-gray-300">
                                      
                                              <div class=" ml-auto w-full sm:w-full lg:w-2/4">
                                                  <div class="flex justify-between mb-3 place-items-end">
                                                      <div class="text-gray-900 text-right flex-1"> Kokku </div>
                                                      <div class="text-right w-40">
                                                          <div class="text-md text-gray-800">{{offer.paymenttotal}} €</div>
                                                      </div>
                                                  </div>   
                                              </div>
                                            </table>
                                          </dd>
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


    return {
        offer,
        loading,
        open,
    }
  },
}
</script>