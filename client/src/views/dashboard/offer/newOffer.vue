
<template>

<div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center pt-4 pb-4">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Uus hinnapakkumine</h1>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button @click="btnClick" type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto">Tagasi</button>
      </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
            <div class="border-t border-gray-200" />
            </div>
    </div>

    <div class="sm:flex sm:items-center pt-4 pb-4">
        <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Projekti nimi:</h1>
        <div class="mt-1">
            <input type="text" name="offer-title" id="offer-title" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-xl border-gray-300" placeholder="Uus e-pood domeenile www.raindesign.ee.">
        </div></div>
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Listbox as="div" v-model="selected">
        <ListboxLabel class="sr-only"> Change published status </ListboxLabel>
        <div class="relative">
        <div class="inline-flex shadow-sm rounded-md divide-x divide-teal-600">
            <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-teal-600">
            <div class="relative inline-flex items-center bg-teal-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                <p class="ml-2.5 text-sm font-medium">{{ selected.title }}</p>
            </div>
            <ListboxButton class="relative inline-flex items-center bg-teal-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500">
                <span class="sr-only">Change published status</span>
                <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
            </ListboxButton>
            </div>
        </div>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <ListboxOptions class="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                <div class="border-t border-gray-200" />
                </div>
    </div>


    <div>
        <div class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Kliendi andmed</h3>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-2 gap-6">
                            <div>
                                <label for="client" class="block text-sm font-medium text-gray-700">Klient</label>
                                <select id="client" name="client" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                <option>Janika OÜ</option>
                                <option>aRprojektid OÜ</option>
                                <option selected="">Raindesign OÜ</option>
                                <option>aRfoto OÜ</option>
                                </select>
                            </div>
                            <div>
                                <label for="location" class="block text-sm font-medium text-gray-700">Kontaktisik</label>
                                <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                <option>Janika Valga</option>
                                <option>Airika Vettik</option>
                                <option selected="">Rain Tõrva</option>
                                <option>Mihkel Tõrva</option>
                                </select>
                            </div> 
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                    <label for="company-website" class="block text-sm font-medium text-gray-700"> Domeen </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                        <input type="text" name="company-website" id="company-website" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.raindesign.ee" />
                    </div>
                        <div>
                        <p class="mt-2 text-xs text-gray-500">Projektiga seotud domeen.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <label for="about" class="block text-sm font-medium text-gray-700"> Ettevõttest </label>
                    <div class="mt-1">
                    <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Ettevõtte peamine tegevusala on mööbli tootmine. Meie klient, kes samuti tegeleb mööbli tootmisega, teostab osa oma tellimustest meie juures. " />
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Lühike ülevaade, millega ettevõtte tegeleb.</p>
                </div>
                </div>
            </div>
            </form>
        </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>
  

    <div>
        <div class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Kujundus</h3>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <div class="mt-1">
                    <textarea id="about" name="about" rows="10" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="... " />
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Kujundustöö kirjeldus.</p>
                </div>
                </div>

                <div class="px-4 sm:px-6 lg:px-8">
                <div class=" flex flex-col sm:-mx-6 md:mx-0">
                <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Tunnid</th>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Hind</th>
                                <th class=" w-1/6 py-3 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">Kokku</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                            <tr>
                                <td class="py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <input type="price" name="price" id="price" class="w-12 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="25"/>h
                                </td>
                                <td class="py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <input type="price" name="price" id="price" class=" w-20 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="40.00"/>€
                                </td>
                                <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                <input type="price" name="price" id="price" class=" w-20 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="40.00"/>€
                                </td>
                            </tr>
                            </tbody>
                </table>
            </div>
            </div>
            </div>
            </form>
        </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    
    </div>


    <div>
        <div class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Arendustööd</h3>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <div class="mt-1">
                    <textarea id="about" name="about" rows="10" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="... " />
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Arendustöö kirjeldus.</p>
                </div>
                </div>

                <div class="px-4 sm:px-6 lg:px-8">
                <div class=" flex flex-col sm:-mx-6 md:mx-0">
                <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Tunnid</th>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Hind</th>
                                <th class=" w-1/6 py-3 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">Kokku</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                            <tr>
                                <td class="py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <input type="price" name="price" id="price" class="w-12 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="100"/>h
                                </td>
                                <td class="py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <input type="price" name="price" id="price" class=" w-20 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="60.00"/>€
                                </td>
                                <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                <input type="price" name="price" id="price" class=" w-20 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="6000.00"/>€
                                </td>
                            </tr>
                            </tbody>
                </table>
            </div>
            </div>
            </div>
            </form>
        </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>

    <div>
        <div class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Testimine</h3>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <div class="mt-1">
                    <textarea id="about" name="about" rows="10" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="... " />
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Testimistöö kirjeldus.</p>
                </div>
                </div>

                <div class="px-4 sm:px-6 lg:px-8">
                <div class=" flex flex-col sm:-mx-6 md:mx-0">
                <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Tunnid</th>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Hind</th>
                                <th class=" w-1/6 py-3 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">Kokku</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                            <tr>
                                <td class="py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <input type="price" name="price" id="price" class="w-12 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="40"/>h
                                </td>
                                <td class="py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <input type="price" name="price" id="price" class=" w-20 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="40.00"/>€
                                </td>
                                <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                <input type="price" name="price" id="price" class=" w-20 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="1600.00"/>€
                                </td>
                            </tr>
                            </tbody>
                </table>
            </div>
            </div>
            </div>
            </form>
        </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>

    <div>
        <div class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Projektijuhtimine</h3>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <div class="mt-1">
                    <textarea id="about" name="about" rows="10" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="... " />
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Projektijuhtimistöö kirjeldus.</p>
                </div>
                </div>

                <div class="px-4 sm:px-6 lg:px-8">
                <div class=" flex flex-col sm:-mx-6 md:mx-0">
                <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Tunnid</th>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Hind</th>
                                <th class=" w-1/6 py-3 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">Kokku</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                            <tr>
                                <td class="py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <input type="price" name="price" id="price" class="w-12 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="30"/>h
                                </td>
                                <td class="py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                                <input type="price" name="price" id="price" class=" w-20 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="30.00"/>€
                                </td>
                                <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                <input type="price" name="price" id="price" class=" w-20 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="900.00"/>€
                                </td>
                            </tr>
                            </tbody>
                </table>
            </div>
            </div>
            </div>
            </form>
        </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>
  
  
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="-mx-5 mt-8 flex flex-col sm:-mx-6 md:mx-0">
    
      <table class="min-w-full divide-y divide-gray-300">
        <tfoot>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">Töötunde kokku</th>
            <th scope="row" class="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">Hours</th>
            <td class="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">160h</td>
          </tr>
           <tr>
            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">Ettemaks</th>
            <th scope="row" class="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">Hours</th>
            <td class="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0"><input type="price" name="price" id="price" class=" w-12 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="50"/>%</td>
          </tr>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0">Projekti maksumus</th>
            <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">Total</th>
            <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">3500€</td>
          </tr>
        </tfoot>
      </table>
        <div class="sm:flex sm:items-center py-10">
            <div class="sm:flex-auto">
                <p class="mt-2 text-sm text-gray-700">Projekti kestvus 
                <input type="price" name="price" id="price" class=" w-12 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="12"/>-
                <input type="price" name="price" id="price" class=" w-12 text-left shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="16"/>töönädalat.</p>
                <p class="mt-2 text-sm text-gray-700">Projektiga saab alustada
                <input type="price" name="price" id="price" class=" w-12 text-right shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-300 rounded-md" placeholder="16"/> töönädalal.</p>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto">Salvesta</button>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto">Lae alla</button>
            </div>
        </div>
        </div>
    </div>


  </div>
</template>

<script>
import router from '../../../router'
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/solid'

const publishingOptions = [
  { title: 'Koostamisel', description: 'Hinnapakkumine on koostamisel', current: true },
  { title: 'Väljasaadetud', description: 'Hinnapakkumine on väljasaadetud, ootab kliendilt vastust', current: false },
  { title: 'Tagasilükatud', description: 'Hinnapakkumine on tagasilükatud.', current: false },
  { title: 'Kinnitatud', description: 'Hinnapakkumine on heakskiidetud ja võetakse töösse', current: false }
]

export default {
    components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronDownIcon,
  },
  setup() {
    const selected = ref(publishingOptions[0])

    return {
      publishingOptions,
      selected,
    }
  },

    methods: {
    btnClick: function(event) {
      router.push('offer');
    },
  },
}
</script>