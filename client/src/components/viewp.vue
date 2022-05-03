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
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" 
          v-on:click="toggleTabs(1)" v-bind:class="{'text-teal-600 bg-white': openTab !== 1, 'text-white bg-teal-600': openTab === 1}">
            Hinnapakkumine
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" 
          v-on:click="toggleTabs(2)" v-bind:class="{'text-teal-600 bg-white': openTab !== 2, 'text-white bg-teal-600': openTab === 2}">
            Projekti kava
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" 
          v-on:click="toggleTabs(3)" v-bind:class="{'text-teal-600 bg-white': openTab !== 3, 'text-white bg-teal-600': openTab === 3}">
            Projekti lõpetamine
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
<div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div class="flex flex-wrap">
                        <div class="w-full">
                          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded">
                            <div class="px-2 py-2 flex-auto">
                              <div class="tab-content tab-space">
                                
                        <div>
                      <div class="mt-1 l-2 text-left sm:mt-0">
                        <div>
                            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div class="border-t border-gray-200 px-2 py-2 sm:p-0">
                                  <dl class="sm:divide-y sm:divide-gray-200">
                                  <!-- Pakkumise nimi, staatus,  müügijuht, projekti kestvus, projekti algus, domeen, klient, kontaktisik, ettevõttest -->
                                          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                                                        <div class="px-4 py-5 sm:px-6">
                                                        <DialogTitle as="h3" class="text-xl text-center mb-5 leading-6 font-bold text-gray-900">{{project.title}}  </DialogTitle>
                                                          <p class="mt-1 text-center text-sm text-gray-800">{{}}</p>
                                                        </div>
                                                        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                                                          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                            <div class="sm:col-span-1">
                                                              <dt class="text-sm font-medium text-gray-500">Müügijuht</dt>
                                                              <dd class="mt-1 text-sm text-gray-900">{{ project.sellmanager }}</dd>
                                                            </div>
                                                            <div class="sm:col-span-1">
                                                              <dt class="text-sm font-medium text-gray-500">Projekti kestvus</dt>
                                                              <dd class="mt-1 text-sm text-gray-900"> {{ project.period }} </dd>
                                                            </div>
                                                            <div class="sm:col-span-1">
                                                              <dt class="text-sm font-medium text-gray-500">Projektiga saab alustada</dt>
                                                              <dd class="mt-1 text-sm text-gray-900"> {{ project.start }} </dd>
                                                            </div>
                                                            <div class="sm:col-span-1">
                                                              <dt class="text-sm font-medium text-gray-500">Domeen</dt>
                                                              <dd class="mt-1 text-sm text-gray-900"> {{ project.domain }} </dd>
                                                            </div>
                                                            <div class="sm:col-span-1">
                                                              <dt class="text-sm font-medium text-gray-500">Klient</dt>
                                                              <dd class="mt-1 text-sm text-gray-900"> {{ project.partner }} </dd>
                                                            </div>
                                                            <div class="sm:col-span-1">
                                                              <dt class="text-sm font-medium text-gray-500">Kontaktisik</dt>
                                                              <dd class="mt-1 text-sm text-gray-900"> {{ project.contact}} </dd>
                                                            </div>
                                                            <div class="sm:col-span-2">
                                                              <dt class="text-sm font-medium text-gray-500">Ettevõttest</dt>
                                                              <dd class="mt-1 text-sm text-gray-900">{{ project.description }}</dd>
                                                            </div>


                                                      <!-- Hinnapakkumise sisu -->
                                                            <h1 class="mt-5 text-xm font-semibold text-gray-900 uppercase"> Hinnapakkumise sisu </h1>
                                                            <div v-for="project in project.offer" class="sm:col-span-2">
                                                              <dt class="mt-5 text-sm font-medium text-gray-500"> {{ project.name }} </dt>
                                                              <dd class="mt-1 text-sm text-gray-900">{{ project.description }}</dd>

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
                                                                                        <td class=" py- px-2 text-right text-sm text-gray-500 sm:table-cell"> {{project.hours}} </td>
                                                                                        <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{project.price}} </td>
                                                                                        <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell"> {{project.total}} </td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                        </table>
                                                                    </div>

                                                            </div> 

                                              <!-- Tingimused -->
                                                            <div class="sm:col-span-2">
                                                              <dt class="text-sm font-medium text-gray-500">Tingimused</dt>
                                                              <dd class="mt-1 text-sm text-gray-900">{{ project.conditions }}</dd>
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
                                                    <div class="text-lg text-gray-800">{{project.totalhours}}h</div>
                                                </div>
                                            </div>
                                            <div class="flex justify-between mb-5 place-items-end">
                                                <div class="text-gray-900 text-right flex-1">Projekti ettemaks</div>
                                                <div class="text-right w-40">
                                                    <div class="text-lg text-gray-800">{{project.prepayment}}</div>
                                                </div>
                                            </div>
                                        
                                            <div class="py-2 border-t border-b">
                                                <div class="flex justify-between place-items-end ">
                                                    <div class="text-xl text-gray-900 text-right flex-1 uppercase ">Projekti hind</div>
                                                    <div class="text-right w-40">
                                                        <div class="text-xl text-gray-800 font-bold">{{project.total}}€</div>
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
<div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
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
                                                                                            <h3 class="text-lg leading-6 font-medium text-gray-900">{{project.title}}</h3>
                                                                                            <p class="mt-1 mb-5 max-w-2xl text-sm text-gray-500">{{project.status}}</p>
                                                                                            
                                                                                            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                                                              <div class="sm:col-span-1">
                                                                                                <dt class="text-sm font-medium text-gray-500">Projektijuht</dt>
                                                                                                <dd class="mt-1 text-sm text-gray-900">{{ project.manager }}</dd>
                                                                                              </div>
                                                                                              <div class="sm:col-span-1">
                                                                                                <dt class="text-sm font-medium text-gray-500">Tööd teostab</dt>
                                                                                                <dd class="mt-1 text-sm text-gray-900"> {{ project.developer}} </dd>
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
                                                                                                        <li v-for="log in project.logs" :key="log.id" class="overscroll-contain">
                                                                                                            
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

                                                                                  <tr v-for="timetable in project.timetable" class="divide-x divide-gray-200">

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

                                                                                  <tr v-for="budget in project.budget" class="divide-x divide-gray-200">
                                                                                  
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
                                                                                                    <div class="text-md text-gray-800">{{project.total}} €</div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="flex justify-between mb-3 place-items-end">
                                                                                                <div class="text-gray-900 text-right flex-1">Omahind</div>
                                                                                                <div class="text-right w-40">
                                                                                                    <div class="text-mdtext-gray-800">{{project.cost}} €</div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="flex justify-between mb-3 place-items-end">
                                                                                                <div class="text-gray-900 text-right flex-1">Pluginad</div>
                                                                                                <div class="text-right w-40">
                                                                                                    <div class="text-mdtext-gray-800">{{project.pluginstotal}} €</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        
                                                                                            <div class="py-2 border-t border-b">
                                                                                                <div class="flex justify-between place-items-end ">
                                                                                                    <div class="text-md text-gray-900 text-right flex-1 uppercase ">Kasum</div>
                                                                                                    <div class="text-right w-40">
                                                                                                        <div class="text-md text-gray-800 font-bold">{{project.profit}}€</div>
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

                                                                                  <tr v-for="plugin in project.plugins" class="divide-x divide-gray-200">

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
                                                                                                    <div class="text-md text-gray-800">{{project.pluginstotal}} €</div>
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

                                                                                  <tr v-for="payment in project.payment" class="divide-x divide-gray-200">

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
                                                                                                    <div class="text-md text-gray-800">{{project.paymenttotal}} €</div>
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
 
            </div>
<div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
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
                                                                                                <h3 class="text-lg mb-10 leading-6 font-medium text-gray-900">{{project.title}}</h3>
                                                                                                
                                                                                                
                                                                                                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                                                                  <div class="sm:col-span-1">
                                                                                                    <dt class="text-sm font-medium text-gray-500">Projektijuht</dt>
                                                                                                    <dd class="mt-1 text-sm text-gray-900">{{ project.manager }}</dd>
                                                                                                  </div>
                                                                                                  <div class="sm:col-span-1">
                                                                                                    <dt class="text-sm font-medium text-gray-500">Müügijuht</dt>
                                                                                                    <dd class="mt-1 text-sm text-gray-900"> {{ project.sellmanager}} </dd>
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

                                                                                      <tr v-for="plugin in project.plugins" class="divide-x divide-gray-200">

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

                                                                                      <tr v-for="guaranty in project.guaranty" class="divide-x divide-gray-200">

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

                                                                                      <tr v-for="projectend in project.projectend" class="divide-x divide-gray-200">

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
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div> 

<div class="mt-5 sm:mt-6 text-center">
              <button type="button" 
              class="w-1/3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium 
              text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:col-start-2 sm:text-sm" 
              @click="close">Sulge</button>
            </div>

              </div>
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
  props: ['project'],

  setup(props, { emit }) {
    const openTab = ref(2)

    const { project } = toRefs(props)

    const open = ref(true)

    const toggleTabs = async(tabNumber) =>{
      openTab.value = tabNumber
    }
    
    function close() {
      emit('close')
  }

    return {
      open,
      close,
      project,
      openTab,
      toggleTabs
    }
  },
}
</script>