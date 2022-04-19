<template>

    <!-- Pluginad -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Ostetud moodulite/pluginate kehtivus</h1>
                                <p class="mt-2 text-sm text-gray-700">...</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa uus rida</button>
                            </div>
                            </div>
                            <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4"></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Algus</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Lõpp</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="person in people" :key="person.name" class="divide-x divide-gray-200">
                                        
                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="text" name="step" id="step" class="w-full text-left focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="Plugin"/>
                                        </td>

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="e"/>
                                        </td>

                                        <td class="py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-price" id="plan-price" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="60.00"/>
                                        </td>

                                        <td class="relative whitespace-nowrap text-center">
                                        <button><XIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /></button>
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
            </div>
            </form>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>

 
    <!-- Garantii -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Garantii</h1>
                                <p class="mt-2 text-sm text-gray-700">...</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa uus rida</button>
                            </div>
                            </div>
                            <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4"></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Algus</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Lõpp</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="guarantee in guarantees" :key="guarantee.name" class="divide-x divide-gray-200">
                                        
                                        <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="text" name="step" id="step" class="w-full text-left focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="Garantii"/>
                                        </td>

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="e"/>
                                        </td>

                                        <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-price" id="plan-price" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="60.00"/>
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
            </div>
            </form>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>

    <!-- Maksegraafik -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Projekti lõpetamine</h1>
                                <p class="mt-2 text-sm text-gray-700">...</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa uus rida</button>
                            </div>
                            </div>
                            <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pl-4">Kuupäev</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Maksenimi</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="finishtask in finishtasks" :key="finishtask.name" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder=""/>
                                        </td>

                                        <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        {{finishtask.name}}
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
            </div>
            </form>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>
    

  

</template>

<script>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon, CalendarIcon, XIcon } from '@heroicons/vue/solid'


const people = [
  { name: 'Kujundus'},
]

const guarantees = [
  { name: 'Kujundus'},
]

const finishtasks = [
  { name: 'Projekt lõpetati'},
  { name: 'Hooldustööd tehtud'}
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
    CalendarIcon,
    XIcon
  },
  setup() {

    return {
      people,
      guarantees,
      finishtasks
    }
  },
}
</script>