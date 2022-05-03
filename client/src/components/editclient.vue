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
        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-2">
            <div class="mt-5 md:mt-4 md:col-span-6">

              
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-8">
                    <div class="grid grid-cols-6 gap-4">
                      
                     <div class="col-span-2 sm:col-span-3">
                        <label
                          for="client"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Ettevõte nimi
                        </label>
                        <input
                          type="text"
                          v-model="newData.name"
                          name="name"
                          id="name"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="id"
                          class="block text-sm font-medium text-gray-700"
                          >Registrikood (kohustuslik)</label
                        >
                        <input
                          type="text"
                          v-model="newData.regcode"
                          name="regcode"
                          id="regcode"
                          autocomplete="family-name"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          
                        />
                      </div>

                        <div class="col-span-6 sm:col-span-3">
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-700"
                          >Ettevõtte e-mail</label
                        >
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span
                            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            v-model="newData.email"
                            name="email"
                            id="email"
                            class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            
                          />
                        </div>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="city"
                          class="block text-sm font-medium text-gray-700"
                          >Tegevuskoht (linn)</label
                        >
                        <input
                          type="text"
                          v-model="newData.city"
                          name="city"
                          id="city"
                          autocomplete="email"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                         
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700">Ettevõtte kontakttelefon</label>
                        
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            +372
                          </span>
                          <input
                            type="text"
                            v-model="newData.phone"
                            name="contact-phone"
                            id="contact-phone"
                            class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                           
                          />
                        </div>
                      </div>
                  </div>
                    
                      <div class="col-span-6">
                        <label
                          class="mt-10 block text-sm font-medium text-gray-700"
                          >Kontaktisik(ud)</label
                        >
                      </div>
                      <div v-for="(contact, index) in newData.contacts" :key="index" class="grid grid-cols-7 gap-2">
                      
                      <div class="col-span-7 sm:col-span-2 lg:col-span-2">
                        <label
                          for="city"
                          class="block text-sm font-medium text-gray-700"
                          >Nimi</label
                        >
                        <input
                          type="text"
                          v-model="contact.name"
                          name="contact-name"
                          id="contact-name"
                          autocomplete="address-level2"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          
                        />
                      </div>

                      <div class="col-span-7 sm:col-span-2 lg:col-span-2">
                        <label
                          for="region"
                          class="block text-sm font-medium text-gray-700"
                          >E-mail</label
                        >
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span
                            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            v-model="contact.email"
                            name="contact-email"
                            id="contact-email"
                            class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            
                          />
                        </div>
                      </div>

                      <div class="col-span-7 sm:col-span-2 lg:col-span-2">
                        <label class="block text-sm font-medium text-gray-700">Telefon</label>
                        
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            +372
                          </span>
                          <input
                            type="text"
                            v-model="contact.phone"
                            name="contact-phone"
                            id="contact-phone"
                            class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            
                          />
                        </div>
                      </div>

                      <div class="col-span-7 sm:col-span-1 lg:col-span-1 justify-self-center self-end">
        
                        <button @click="removeContact(index)">
                          <XIcon
                            class="flex-shrink-0 h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                     
                  </div><div class="text-right">
                  <button
                      @click="addContact(index)"
                      class="w-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      +
                    </button>

              </div>
      </div>
</div>
</div>
</div>
</div>

                  <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
                    <button
                      
                      @click="editPartner(editpartner.id)"
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
import { PencilIcon, DocumentDownloadIcon, EyeIcon, XIcon } from '@heroicons/vue/solid'



export default {
  name: 'viewclient',
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
  },
  props: ['editpartner'],
  
  setup(props, { emit }) {
  
  const { editpartner } = toRefs(props)

  const newData = editpartner

  const open = ref(true)
  const edit = ref(true)

  function close() {
    emit('close')
  }

  function editPartner(id) {
    emit('editPartner', newData.value)
  }
  
  const addContact = async(index) => {
      newData.value.contacts.push({})
    }
  const removeContact = async(index) => {
      newData.value.contacts.splice(index, 1)
      console.log(newData.value.contacts)
      console.log(index)
  }
  


    return {
      open,
      close,
      editPartner,
      editpartner,
      edit,
      newData,
      addContact,
      removeContact
    }
  },
}
</script>