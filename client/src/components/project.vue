<template>
    <!-- Projektinimi ja staatuse nupp -->
    <div class="sm:flex sm:place-items-end pt-4 pb-4">
            <!-- Projektinimi -->
            <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900 mt-5">kosihheuehu</h1>
                <div class="mt-1">
                <input type="text" name="offer-title" id="offer-title" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Uus e-pood domeenile www.raindesign.ee.">
                </div>
            </div>

    <!-- Staatuse nupp -->
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Listbox as="div" v-model="selected">
                <ListboxLabel class="sr-only"> Change project status </ListboxLabel>
                    <div class="relative">
                    <div class="inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative inline-flex items-center bg-teal-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" /> <!-- Staatuse ikoon -->
                            <p class="ml-2.5 text-l font-medium">{{ selected.title }}</p> <!-- Staatuse pealkiri-->
                        </div>
                            <ListboxButton class="relative inline-flex items-center bg-teal-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500">
                                <span class="sr-only">Change project status</span>
                                <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" /> <!-- Staatuse rippmenüüvaliku ikoon -->
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

    
    <!-- Kliendi andmed -->
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
                                <!-- Klient ehk ettevõttenimi -->
                                <label for="client" class="block text-sm font-medium text-gray-700">Klient</label>
                                <select id="client" name="client" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                    <option>Janika OÜ</option>
                                    <option>aRprojektid OÜ</option>
                                    <option selected="">Raindesign OÜ</option>
                                    <option>aRfoto OÜ</option>
                                </select>
                            </div>
                            <div>
                                <!-- Ettevõtte kontaktisik -->
                                <label for="contact" class="block text-sm font-medium text-gray-700">Kontaktisik</label>
                                <select id="contact" name="contact" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                    <option>Janika Valga</option>
                                    <option>Airika Vettik</option>
                                    <option selected="">Rain Tõrva</option>
                                    <option>Mihkel Tõrva</option>
                                </select>
                            </div> 
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                        <!-- Projektiga seotud domeen -->
                        <label for="domain" class="block text-sm font-medium text-gray-700"> Domeen </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                            <input type="text" name="domain" id="domain" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.raindesign.ee" />
                        </div>
                            <div>
                            <p class="mt-2 text-xs text-gray-500">Projektiga seotud domeen.</p>
                            </div>
                    </div>
                </div>

                <div>
                    <!-- Ettevõttest ülevaade -->
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
  

</template>

<script>
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
}
</script>