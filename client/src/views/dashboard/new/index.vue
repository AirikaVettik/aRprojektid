
<template>
<div class="px-4 sm:px-6 lg:px-8 mt-10">
    <div class="sm:flex sm:items-center pt-4 pb-4">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900 uppercase">Koosta uus</h1>
        <div>
        <p class="mt-2 text-sl text-gray-500">...</p>
        </div>
      </div>
<!-- Staatuse nupp -->
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Listbox as="div" v-model="selectedStatus">
                <ListboxLabel class="sr-only"> Change project status </ListboxLabel>
                    <div class="relative">
                    <div class="inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative inline-flex items-center bg-teal-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" /> <!-- Staatuse ikoon -->
                            <p class="ml-2.5 text-l font-medium">{{ selectedStatus }}</p> <!-- Staatuse pealkiri-->
                        </div>
                            <ListboxButton class="relative inline-flex items-center bg-teal-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500">
                                <span class="sr-only">Change project status</span>
                                <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" /> <!-- Staatuse rippmenüüvaliku ikoon -->
                            </ListboxButton>
                        </div>
                    </div>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="origin-top-right absolute z-10 right-0 mt-2 w-96 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <ListboxOption as="template" v-for="option in publishingStatus" :key="option.id" :value="option"  v-slot="{ active, selected }">
                        <li :class="[active ? 'text-white bg-teal-500' : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm']">
                        <div class="flex flex-col">
                            <div class="flex justify-between">
                            <p :class="selected ? 'font-semibold' : 'font-normal'">
                                {{ option }}
                            </p>
                            <span v-if="selected" :class="active ? 'text-white' : 'text-teal-500'">
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                            </div>
                          
                        </div>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox>
        </div>  
<!-- SubStaatuse nupp -->
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Listbox as="div" v-model="selectedSubStatus">
                <ListboxLabel class="sr-only"> Change project status </ListboxLabel>
                    <div class="relative">
                    <div class="inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative inline-flex items-center bg-teal-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" /> <!-- Staatuse ikoon -->
                            <p class="ml-2.5 text-l font-medium">{{ selectedSubStatus }}</p> <!-- Staatuse pealkiri-->
                        </div>
                            <ListboxButton class="relative inline-flex items-center bg-teal-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500">
                                <span class="sr-only">Change project status</span>
                                <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" /> <!-- Staatuse rippmenüüvaliku ikoon -->
                            </ListboxButton>
                        </div>
                    </div>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="origin-top-right absolute z-10 right-0 mt-2 w-96 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <ListboxOption as="template" v-for="option in publishingSubStatus" :key="option.id" :value="option" v-slot="{ active, selected }">
                        <li :class="[active ? 'text-white bg-teal-500' : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm']">
                        <div class="flex flex-col">
                            <div class="flex justify-between">
                            <p :class="selected ? 'font-semibold' : 'font-normal'">
                                {{ option }}
                            </p>
                            <span v-if="selected" :class="active ? 'text-white' : 'text-teal-500'">
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                            </div>
                           
                        </div>
                        </li>
                    </ListboxOption>
                    </ListboxOptions>
                </transition>
                </div>
            </Listbox>
        </div>  
    </div>
   
        <div class="flex flex-wrap">
            <div class="w-full">
            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" 
                @click="toggleTabs(1)" v-bind:class="{'text-teal-600 bg-white': openTab !== 1, 'text-white bg-teal-600': openTab === 1}">
                    Hinnapakkumine
                </a>
                </li>
                <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" 
                @click="toggleTabs(2)" v-bind:class="{'text-teal-600 bg-white': openTab !== 2, 'text-white bg-teal-600': openTab === 2}">
                    Projekti kava
                </a>
                </li>
                <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" 
                @click="toggleTabs(3)" v-bind:class="{'text-teal-600 bg-white': openTab !== 3, 'text-white bg-teal-600': openTab === 3}">
                    Projekti lõpetamine
                </a>
                </li>
            </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
<div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
<!-- Koostaja ja kestvus -->
        <div class="mt-2 md:mt-2 md:col-span-6">
            <form action="#" method="POST">
                <div>
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-4">
                    <div class="grid grid-cols-6 gap-2">
                
                        <div class="col-span-6 sm:col-span-2">
                            <label for="sellmanager" class="block text-sm font-medium text-gray-700"> Hinnapakkumise koostaja</label>
                             <select id="sellmanager" name="sellmanager" v-model="document.sellmanager" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                    <option disabled value="">Vali koostaja</option>
                                    <option v-for="user in users" :key="user.id">
                                    {{ user.name }} </option>   
                              </select>
                        </div>

                        <div class="col-span-6 sm:col-span-2">
                            <label for="working" class="block text-sm font-medium text-gray-700">Projekti kestvus</label>
                            <input v-model="document.period" type="text" name="working" id="working" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="12-16 töönädalat; 5 tööpäeva">
                        </div>

                        <div class="col-span-6 sm:col-span-2">
                            <label for="workstart" class="block text-sm font-medium text-gray-700">Projektiga saab alustada</label>
                            <input v-model="document.start" type="text" name="workstart" id="workstart" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="23.04.2022; 16.kalendrinädalal">
                        </div>
                        
                    </div>
                    </div>
                </div>
            </form>
        </div>

                    
<!-- Projektinimi -->
    <div class="sm:flex sm:place-items-end pt-4 pb-4">
            <!-- Projektinimi -->
            <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900 mt-5">Projekti nimi:</h1>
                <div class="mt-1">
                <input v-model="document.title" type="text" name="offer-title" id="offer-title" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Uus e-pood domeenile www.raindesign.ee.">
                </div>
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
                                <label for="partner" class="block text-sm font-medium text-gray-700">Klient</label>
                                <select id="partner" v-model="selectedPartner" @change="partnerContacts(selectedPartner)"  name="partner" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                    
                                    <option v-for="partner in partners" :key="partner.id" :value="partner.name">
                                    {{ partner.name }} </option>
                                </select>
                
                            </div>
                            <div>
                                <!-- Ettevõtte kontaktisik -->
                                <label for="contact" class="block text-sm font-medium text-gray-700">Kontaktisik</label>
                                <select id="contact" v-model="document.contact" name="contact" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"> 
                                    
                                    <option v-for="contact in partner.contacts" :key="contact.name">
                                    {{ contact.name }}</option>
                                </select>
                            </div> 
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                        <!-- Projektiga seotud domeen -->
                        <label for="domain" class="block text-sm font-medium text-gray-700"> Domeen </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                            <input v-model="document.domain" type="text" name="domain" id="domain" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.raindesign.ee" />
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
                    <textarea v-model="document.description" id="about" name="about" rows="3" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Ettevõtte peamine tegevusala on mööbli tootmine. Meie klient, kes samuti tegeleb mööbli tootmisega, teostab osa oma tellimustest meie juures. " />
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
  
<!-- Etapp -->
    <div>
        <div v-for="(offer, index) in document.offer" :key="offer.index" class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4 mr-2">
            <h3 class="pb-3 text-lg font-medium leading-6 text-gray-900 ">Etapp</h3>
            <input v-model="offer.name" type="text" name="name" id="name" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Kujundus" />
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <div class="mt-1">
                    <textarea v-model="offer.description" id="design" name="design" rows="10" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="... " />
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Etapi kirjeldus.</p>
                </div>
                </div>

                <div class="px-4 sm:px-6 lg:px-8">
                <div class=" flex flex-col sm:-mx-6 md:mx-0">
                <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Tunnid (h) </th>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Hind (€/h)</th>
                                <th class=" w-1/6 py-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Kokku (€)</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                            <tr>
                            <td class=" py- px-2 text-center text-sm text-gray-500 sm:table-cell">
                                <input v-model="offer.hours" type="number" name="hours" id="hours" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="0"/>
                            </td>
                            <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                <input v-model="offer.price" type="number" name="price" id="price" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="0"/>
                            </td>
                            <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                <input v-model="offer.total" type="number" name="price" id="price" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="0"/>
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
        <div class="mt-10 sm:mt-5 sm:flex-none text-right">
            <button type="button" @click="addPhase(index)"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm 
            font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa etapp</button>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    
    </div>

<!-- Tingimused -->
    <div>
        <div class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Tingimused</h3>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <div class="mt-1">
                    <textarea v-model="document.conditions" id="management" name="management" rows="10" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="... " />
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Ettevõtte tingimused.</p>
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


<!-- Footer -->
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="-mx-5 mt-8 flex flex-col sm:-mx-6 md:mx-0">
    
      <table class="min-w-full divide-y divide-gray-300">
                                <tfoot>
                                <div class="py-2 ml-auto w-full sm:w-full lg:w-2/4">
                                    <div class="flex justify-between mb-5 place-items-end">
                                        <div class="text-gray-900 text-right flex-1">Töötunnid </div>
                                        <div class="text-right w-40">
                                            <input v-model="document.totalhours" type="number" name="step" id="step" class="w-4/6 p-0.5 text-right focus:ring-teal-500 focus:border-teal-500 sm:text-lg border-gray-200" placeholder="0"/>
                                        </div>
                                    </div>
                                    <div class="flex justify-between mb-5 place-items-end">
                                        <div class="text-m text-gray-800 text-right flex-1">Projekti ettemaks</div>
                                        <div class="text-right w-40">
                                            <div class=" text-right text-lg text-gray-500 sm:table-cell">
                                            <input v-model="document.prepayment" type="text" name="step" id="step" class="w-4/6 p-0.5 text-right focus:ring-teal-500 focus:border-teal-500 sm:text-lg border-gray-200" placeholder="50%"/>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div class="py-2 border-t border-b">
                                        <div class="flex justify-between place-items-end ">
                                            <div class="text-xl text-gray-900 text-right flex-1 uppercase ">Projekti hind</div>
                                            <div class="text-right w-40">
                                                <input v-model="document.total" type="number" name="step" id="step" class="w-4/6 p-0.5 text-right focus:ring-teal-500 focus:border-teal-500 sm:text-lg border-gray-200" placeholder="0"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </tfoot>
        </table>
        </div>
    </div>

            </div>
<div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
          <div class="sm:flex sm:place-items-end pt-4 pb-4">
            <div class="sm:flex-auto">
                  <div>
                       <div class="grid grid-cols-2 gap-6">
                            <div>
                                <!-- Projektijuht -->
                                <label for="manager" class="block text-sm font-medium text-gray-700">Projektijuht</label>
                                <select id="sellmanager" name="sellmanager" v-model="document.projectmanager" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                    <option disabled value="">Vali koostaja</option>
                                    <option v-for="user in users" :key="user.id">
                                    {{ user.name }} </option>   
                              </select>
                            </div>
                            <div>
                            
                                <!-- Tööd teaostav ettevõte -->
                                <label for="contact" class="block text-sm font-medium text-gray-700">Tööd teostab</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> Ettevõte </span>
                            <input type="text" name="developer" id="developer" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Kodulehed OÜ" />
                        </div>
                            </div> 
                </div>
                            </div>
            </div>
    </div>

        <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
                <div class="border-t border-gray-200" />
            </div>
        </div>
<!-- Projekti logi -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Projekti logi</h1>
                                <p class="mt-2 text-sm text-gray-700">...</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa sissekanne</button>
                            </div>
                            </div>  
                            <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"> 

                    <div class="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul role="list" class="divide-y divide-gray-200">
                        <li v-for="position in positions" :key="position.id">
                            <a href="#" class="block hover:bg-gray-50">
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-teal-900 truncate">
                                    {{ position.title }}
                                </p>
                                <div class="ml-2 flex-shrink-0 flex">
                                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800">
                                    <button><XIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /></button>
                                    </p>
                                </div>
                                </div>
                                <div class="mt-2 sm:flex sm:justify-between">
                                <div class="sm:flex">
                                    <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-2">
                                    {{ position.info}}
                                    </p>
                                </div>
                                <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                    <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <p>
                                    Sissekanne {{ ' ' }} <time>{{ position.date }}</time>
                                    </p>
                                </div>
                                </div>
                            </div>
                            </a>
                        </li>
                        </ul>
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

<!-- Ajagraafik -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Ajagraafik</h1>
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
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">Projekti etapp</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Planeeritud algus</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Planeeritud lõpp</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="person in people" :key="person.name" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input id="done" aria-describedby="comments-description" name="done" type="checkbox" class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
                                        </td>
                                        
                                        <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="text" name="step" id="step" class="w-full text-left focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="Kujundus"/>
                                        </td>

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="e"/>
                                        </td>

                                        <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
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
    
<!-- Eelarve -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Eelarve</h1>
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
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">Projekti etapp</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Planeeritud töötunnid (h)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Müümishind (€)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Tegelikud töötunnid (h)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Omahind (€)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Kasum (€)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="person in people" :key="person.name" class="divide-x divide-gray-200">
                                        
                                        <td class="w-1/6 py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="text" name="step" id="step" class="w-full text-left focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="Kujundus"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="25"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="plan-price" id="plan-price" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="60.00"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="real-hour" id="real-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="20"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="real-price" id="real-price" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="40.00"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="profit" id="profit" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="40.00"/>
                                        </td>

                                        <td class="relative whitespace-nowrap text-center">
                                        <button><XIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /></button>
                                        </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <table class="min-w-full divide-y divide-gray-300">
                                <tfoot>
                                <div class="py-10 pr-5 ml-auto w-full lg:w-2/4">
                                    <div class="flex justify-between mb-5">
                                        <div class="text-gray-800 text-right flex-1">Projekti maksumus</div>
                                        <div class="text-right w-40">
                                            <div class="text-gray-800 font-medium">0 €</div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between mb-5">
                                        <div class="text-sm text-gray-600 text-right flex-1">Projekti omahind</div>
                                        <div class="text-right w-40">
                                            <div class="text-sm text-gray-600">0 €</div>
                                        </div>
                                    </div>

                                    <div class="flex justify-between mb-5">
                                        <div class="text-sm text-gray-600 text-right flex-1">Pluginad</div>
                                        <div class="text-right w-40">
                                            <div class="text-sm text-gray-600">0 €</div>
                                        </div>
                                    </div>
                                
                                    <div class="py-2 border-t border-b">
                                        <div class="flex justify-between">
                                            <div class="text-xl text-gray-900 text-right flex-1 uppercase ">Projekti kasum</div>
                                            <div class="text-right w-40">
                                                <div class="text-xl text-gray-800 font-bold">0 €</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                </tfoot>
                                </table>
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

<!-- Moodulid -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Ostetud moodulid, pluginad, template</h1>
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
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Plugin</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Summa</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="person in people" :key="person.name" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="e"/>
                                        </td>

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="text" name="step" id="step" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="Plugin"/>
                                        </td>

                                        <td class="py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="profit" id="profit" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="0"/>
                                        </td>

                                        <td class="relative whitespace-nowrap text-center">
                                            <button><XIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /></button>
                                        </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                    
                                </div>
                                <table class="min-w-full divide-y divide-gray-300">
                                <tfoot>
                                <div class="py-10 pr-5 ml-auto w-full lg:w-2/4">
                                    <div class="flex justify-between mb-5">
                                        <div class="text-gray-800 text-right flex-1">Kokku</div>
                                        <div class="text-right w-40">
                                            <div class="text-gray-800 font-medium">0 €</div>
                                        </div>
                                    </div>
                                </div>

                                </tfoot>
                                </table>
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
                                <h1 class="text-xl font-semibold text-gray-900">Maksegraafik</h1>
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
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pl-4">Kuupäev</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Maksenimi</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Summa</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="person in people" :key="person.name" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
                                        </td>

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200"/>
                                        </td>

                                        <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="text" name="step" id="step" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="Ettemaks 50%"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="profit" id="profit" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="0"/>
                                        </td>

                                        <td class="relative whitespace-nowrap text-center text-sm font-medium">
                                        <button><MailIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /></button>
                                        </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                    
                                </div>
                                <table class="min-w-full divide-y divide-gray-300">
                                <tfoot>
                                <div class="py-10 pr-5 ml-auto w-full lg:w-2/4">
                                <div class="flex justify-between mb-5">
                                        <div class="text-gray-800 text-right flex-1">Projekti maksumus</div>
                                        <div class="text-right w-40">
                                            <div class="text-gray-800 font-medium">0 €</div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between mb-5">
                                        <div class="text-gray-800 text-right flex-1">Makstud</div>
                                        <div class="text-right w-40">
                                            <div class="text-gray-800 font-medium">0 €</div>
                                        </div>
                                    </div>
                                </div>

                                </tfoot>
                                </table>
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

        
</div>
<div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
             
</div>


</div>
<!-- Salvesta nupp -->
  <div class="p-10 text-center">
          <div class="sm:flex-none ">
              <button @click="saveDocument(document)" type="button" name="save" class="w-1/2 inline-flex items-center justify-center rounded-md border 
              border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 
              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Salvesta</button>
          </div>
        </div>
  </div>
        
  </div>
      
  </div>
  </div> 

  </div>
</template>

<script>
import router from '../../../router'
import { useRoute } from 'vue-router' 
import { ref, reactive, computed } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import { getUsers } from '../../../api/users.js'
import { getPartners, getPartnerContact } from '../../../api/partners.js'
import { addDocument } from '../../../api/documents.js'


const publishingStatus = ['Hinnapakkumine', 'Projekt', 'Lõpetatud' ]

const publishingSubStatus = ['Koostamisel', 'Välja saadetud', 'Tagasi lükatud', 'Uus projekt', 'Töösse võetud', 
'Kujundustööd', 'Arendustööd', 'Testimisel', 'Ootel', 'Pausil', 'Lõpetatud', 'Parandustööd', 'Hooldustööd', 'LIVE']

  

export default {
    components: {
    CheckIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronDownIcon,
  },
  
  setup() {
    const route = useRoute()
    const selectedStatus = ref(publishingStatus[0])
    const selectedSubStatus = ref(publishingSubStatus[0])
    const loading = ref(false)
    const openTab = ref(1)
    const users = ref()
    const partners = ref()
    const selectedPartner = ref([])
    const partner = ref([])

    const toggleTabs = async(tabNumber) =>{
      openTab.value = tabNumber
    }

    const document = reactive({
      sellmanager: '',
      period: '',
      start: '',
      title: '',
      status: selectedStatus,
      subStatus: selectedSubStatus,
      partner: selectedPartner,
      contact: '',
      domain: '',
      description: '',
      offer: [{
        name: '',
        description: '',
        hours: '',
        price: '',
        total: ''
      }],
      conditions: '',
      totalhours: '',
      prepayment: '',
      total: '',
      projectmanager: '',
      
    })

    async function allUsers() {
      loading.value = true
      users.value = await getUsers()
      console.log(users.value)
      loading.value = false
    }
    allUsers()

    async function allPartners() {
        loading.value = true
        partners.value = await getPartners()
        console.log(partners.value)
        loading.value = false
    }
    allPartners()

    const partnerContacts = async(selectedPartner) => {
        loading.value = true
        partner.value = await getPartnerContact(selectedPartner)
        console.log(partner.value)
        loading.value = false
    }

    const addPhase = async(index) => {
        document.offer.push({})
    }

    const saveDocument = async(document) => {
        document.value = await addDocument(document)
        router.push("offer")
    }


    return {
      route,
      loading,
      openTab,
      toggleTabs,
      document,
      users,
      partners,
      selectedPartner,
      partner,
      partnerContacts,
      selectedStatus,
      selectedSubStatus,
      publishingStatus,
      publishingSubStatus,
      addPhase,
      saveDocument
    }
  },
}
</script>