<template>
  <TransitionRoot as="template" :show="open">

    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
    <!--  -->
      <div class="flex items-end justify-center min-h-screen pt-4 px-10 pb-20 text-center sm:block sm:p-10 ">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-60 transition-opacity" /> 
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          
<div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-4xl sm:w-full sm:p-5">
<div class="sm:flex sm:items-center pt-4 pb-4 place-content-end">
      
<!-- Staatuse nupp -->
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Listbox as="div" v-model="editoffer.status">
                <ListboxLabel class="sr-only"> Change project status </ListboxLabel>
                    <div class="relative">
                    <div class="inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative inline-flex items-center bg-teal-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" /> <!-- Staatuse ikoon -->
                            <p class="ml-2.5 text-l font-medium">{{ editoffer.status }}</p> <!-- Staatuse pealkiri-->
                        </div>
                            <ListboxButton class="relative inline-flex items-center bg-teal-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500">
                                <span class="sr-only">Change project status</span>
                                <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" /> <!-- Staatuse rippmenüüvaliku ikoon -->
                            </ListboxButton>
                        </div>
                    </div>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="origin-top-right absolute z-10 right-0 mt-2 w-96 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <ListboxOption as="template" v-for="option in publishingStatus" :key="option.id" :value="option" v-slot="{ active, selected }">
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
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none ">
            <Listbox as="div" v-model="editoffer.subStatus">
                <ListboxLabel class="sr-only"> Change project status </ListboxLabel>
                    <div class="relative">
                    <div class="inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-teal-600">
                        <div class="relative inline-flex items-center bg-teal-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" /> <!-- Staatuse ikoon -->
                            <p class="ml-2.5 text-l font-medium">{{ editoffer.subStatus }}</p> <!-- Staatuse pealkiri-->
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
<!-- Koostaja ja kestvus -->
        <div class="mt-2 md:mt-2 md:col-span-6">
            <form action="#" method="POST">
                <div>
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-4">
                    <div class="grid grid-cols-6 gap-2">
                
                        <div class="col-span-6 sm:col-span-2">
                            <label for="sellmanager" class="block text-sm font-medium text-gray-700"> Hinnapakkumise koostaja</label>
                             <select id="sellmanager" name="sellmanager" v-model="editoffer.sellmanager" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                   <option disabled value="">Vali koostaja</option>
                                    <option v-for="(user, id) in users" :key="id">
                                    {{ user.name }} </option>
                              </select>
                        </div>

                        <div class="col-span-6 sm:col-span-2">
                            <label for="working" class="block text-sm font-medium text-gray-700">Projekti kestvus</label>
                            <input v-model="editoffer.period" type="text" name="working" id="working" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="12-16 töönädalat; 5 tööpäeva">
                        </div>

                        <div class="col-span-6 sm:col-span-2">
                            <label for="workstart" class="block text-sm font-medium text-gray-700">Projektiga saab alustada</label>
                            <input v-model="editoffer.start" type="text" name="workstart" id="workstart" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="23.04.2022; 16.kalendrinädalal">
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
                <input v-model="editoffer.title" type="text" name="offer-title" id="offer-title" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Uus e-pood domeenile www.raindesign.ee.">
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
                                <p class="block text-sm font-medium text-gray-900"> {{editoffer.partner}}</p>
                                <div class="border-t border-gray-200 mt-5" />
                                <label for="partner" class="block text-xs font-medium text-gray-700">Kliendi muutmiseks tee uus valik</label>
                                <select id="partner" v-model="editoffer.partner" @change="partnerContacts(editoffer.partner)"   name="partner" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                    <option selected :value="editoffer.partner">Valitud: {{editoffer.partner}}</option>
                                    <option v-for="(partner, id) in partners" :key="id" :value="partner.name">
                                    {{ partner.name }} </option>
              
                                </select>
                
                            </div>
                            <div>
                                <!-- Ettevõtte kontaktisik -->
                                <label for="contact" class="block text-sm font-medium text-gray-700">Kontaktisik</label>
                                <p class="block text-sm font-medium text-gray-900"> {{editoffer.contact}}</p>
                                <div class="border-t border-gray-200 mt-5" />
                                <label for="partner" class="block text-xs font-medium text-gray-700">Kontaktisiku muutmiseks vali enne klient</label>
                                <select id="contact" v-model="editoffer.contact" name="contact" defaultValue = "Selecciona un asunto" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"> 
                                    <option selected :value="editoffer.contact">Valitud: {{editoffer.contact}}</option>
                                    <option v-for="(contact, id) in partner.contacts" :key="id" :value="contact.name">
                                    {{editoffer.partner}} kontakt: {{ contact.name }}</option>
                                    
                                </select>
                            </div> 
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                        <!-- Projektiga seotud domeen -->
                        <label for="domain" class="block text-sm font-medium text-gray-700"> Domeen </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                            <input v-model="editoffer.domain" type="text" name="domain" id="domain" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.raindesign.ee" />
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
                    <textarea v-model="editoffer.description" id="about" name="about" rows="3" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Ettevõtte peamine tegevusala on mööbli tootmine. Meie klient, kes samuti tegeleb mööbli tootmisega, teostab osa oma tellimustest meie juures. " />
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
        <div v-for="(offer, index) in editoffer.offer" :key="index" class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4 mr-2">
            <h3 class="pb-3 text-lg font-medium leading-6 text-gray-900 ">Etapp</h3>
            <input v-model="offer.name" type="text" name="name" id="name" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Kujundus" />
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6 text-right">
                <button @click="removePhase(index)">
                          <XIcon
                            class="flex-shrink-0 h-6 w-6 text-gray-400 item-right"
                            aria-hidden="true"
                          />
                        </button>
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
                    <textarea v-model="editoffer.conditions" id="management" name="management" rows="10" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="... " />
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

                  <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
                    <button
                      
                      @click="editOffer(editoffer.id)"
                      class="w-2/4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      > 
                      Uuenda andmed
                    </button>

                  </div> 
            
        
            <div class="mt-5 sm:mt-6 text-center">
              <button type="button" class="w-1/4 inline-flex justify-center rounded-md border 
              border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base 
              font-medium text-white hover:bg-teal-700 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:col-start-2 
              sm:text-sm" @click="close">Sulge</button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, toRefs, reactive } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions,  } from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon, PencilIcon, DocumentDownloadIcon, EyeIcon, XIcon } from '@heroicons/vue/solid'
import { getUsers } from '../api/users.js'
import { getPartners, getPartnerContact } from '../api/partners.js'

const publishingStatus = ['Hinnapakkumine', 'Projekt', 'Lõpetatud' ]

const publishingSubStatus = ['Koostamisel', 'Välja saadetud', 'Tagasi lükatud', 'Uus projekt', 'Töösse võetud', 
'Kujundustööd', 'Arendustööd', 'Testimisel', 'Ootel', 'Pausil', 'Lõpetatud', 'Parandustööd', 'Hooldustööd', 'LIVE']

export default {
  name: 'viewoffer',
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    PencilIcon,
    DocumentDownloadIcon,
    EyeIcon,
    XIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronDownIcon,
  },
  props: ['editoffer'],
  
  setup(props, { emit }) {
  const loading = ref(false)
  const open = ref(true)
  const edit = ref(true)
  const Status = ref(publishingStatus[0])
  const SubStatus = ref(publishingSubStatus[0])
  
  const { editoffer } = toRefs(props)

  const newOffer = editoffer

  const users = ref([])
  const partners = ref()
  const selectedPartner = ref([])
  const partner = ref([])

  function close() {
    emit('close')
  }

  function editOffer(id) {
    emit('editOffer', newOffer.value)
    console.log(newOffer.value)
  }
  
  const addPhase = async(index) => {
      newOffer.value.offer.push({})
    }
  const removePhase = async(index) => {
      newOffer.value.offer.splice(index, 1)
  }

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

    return {
      open,
      close,
      editOffer,
      editoffer,
      edit,
      newOffer,
      addPhase,
      removePhase,
      publishingStatus,
      publishingSubStatus,
      Status,
      SubStatus,
      users,
      partners,
      partner,
      selectedPartner,
      partnerContacts
    }
  },
}
</script>