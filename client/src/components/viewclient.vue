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
            <div>
              <div class="mt-1 text-center sm:mt-5">
                <DialogTitle as="h3" class="text-xl leading-6 font-bold text-gray-900"> {{ partner.name }} </DialogTitle>
                <p class="mt-1 text-xl text-gray-500"> {{ partner.regcode }} </p>

                <div class="mt-10">
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                          <dl class="sm:divide-y sm:divide-gray-200">
                            
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Ettevõtte e-mail</dt>
                                <dd class="text-left mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"> {{ partner.email }}</dd>
                              </div>
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Ettevõtte kontakttelefon</dt>
                                <dd class="text-left mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"> +372 {{ partner.phone }}</dd>
                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500"> Tegevuskoht (linn)</dt>
                                <dd class="text-left mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"> {{ partner.city }}</dd>
                              </div>

                              <div  class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Kontaktisik(ud)</dt>
                                  <dd class="text-left mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                    <ul v-for="(contact, index) in partner.contacts" :key="contact.id" role="list" class="mb-5">
                                      <div> {{ contact.name }} </div>
                                      <div> {{ contact.email }}</div>
                                      <div> +372 {{ contact.phone }}</div>
                                    </ul>
                                  </dd>

                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Hinnapakkumised</dt>
                                  <dd class="text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                        <ul v-for="(offer, index) in offers" :key="index" role="list" class="text-left">
                                          <li class="pr-2 mb-2  flex items-left justify-between text-sm">
                                            <div class="w-0 flex-1 flex text-left">
                                              <span class="flex-1 w-0 truncate"> {{ offer.title }} </span>
                                            </div>
                                            <div class="ml-4 flex-shrink-0">
                                              <button @click="showOffer(offer.id)">
                                              <EyeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" /></button>
                                            </div>
                                          </li>
                                        </ul>
                                    </dd>
                                </div>

                              
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Projektid</dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                        <ul v-for="(project, index) in projects" :key="index" role="list" class="text-left">
                                          <li  class="pr-2 mb-2  flex items-left justify-between text-sm">
                                            <div class="w-0 flex-1 flex text-left">
                                              <span class="flex-1 w-0 truncate"> {{ project.title}} </span>
                                            </div>
                                            <div class="ml-4 flex-shrink-0">
                                              <button @click="showProject(project.id)">
                                              <EyeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" /></button>
                                            </div>
                                          </li>
                                        </ul>
                                    </dd>
                              </div>
                            </dl>
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
      <Viewo v-if="displayoffer"  @close="closeOffer" :offer="offer"/>
      <Viewp v-if="displayproject"  @close="closeProject" :project="project"/>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, toRefs } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PencilIcon, DocumentDownloadIcon, EyeIcon } from '@heroicons/vue/solid'
import { getDocument } from '../api/documents.js'
import { getPartner } from '../api/partners.js'
import Viewo from '../components/viewo.vue'
import Viewp from '../components/viewp.vue'

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
    Viewo,
    Viewp
  },
  props: ['partner', 'offers', 'projects'],
 
  setup(props, { emit }) {
  
  const {partner} = toRefs(props)
  const {offers} = toRefs(props)
  const {projects} = toRefs(props)

  console.log(partner)
  console.log(offers)
  console.log(projects)

  const open = ref(true)
  const displayoffer = ref(false)
  const displayproject = ref(false)

  const closeOffer = async()=> {
      displayoffer.value = false
    }
  
  const closeProject = async()=> {
      displayproject.value = false
    }

  const offer = ref([])
  const project = ref([])

  function close() {
    emit('close')
  }

  const showOffer = async(id)  => {
      displayoffer.value = true
      offer.value = await getDocument(id)
  }

  const showProject = async(id)  => {
      displayproject.value = true
      project.value = await getDocument(id)
  }

    return {
      open,
      partner,
      close,
      offers,
      projects,
      offer,
      showOffer,
      displayoffer,
      closeOffer,
      project,
      displayproject,
      showProject,
      closeProject
    }
  },
}
</script>