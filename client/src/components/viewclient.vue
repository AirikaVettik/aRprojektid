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
              <div  :key="regcode" class="mt-1 text-center sm:mt-5">
                <DialogTitle as="h3" class="text-xl leading-6 font-bold text-gray-900"> {{ partner.name }} </DialogTitle>
                <p class="mt-1 text-xl text-gray-500"> {{ partner.regcode }} </p>

                <div class="mt-10">
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                          <dl class="sm:divide-y sm:divide-gray-200">
                            
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">E-mail</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">{{ partner.email}}</dd>
                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Domeen</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">{{ partner.domain }}</dd>
                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Kontaktisik</dt>
                                  <dd v-for="(contact, offerIndex) in partner.contact" :key="offerIndex" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                    <div> {{contact.name}} </div>
                                    <div> {{contact.email}}</div>
                                    <div> +372 {{contact.phone}} </div>
                                  </dd>

                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Ettevõttest</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"> {{ partner.description }}</dd>
                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Hinnapakkumised</dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                        <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                                          <li v-for="(offer, offerIndex) in partner.offers" :key="offerIndex" class="pl-2 pr-2 py-2 flex items-left justify-between text-sm">
                                            <div class="w-0 flex-1 flex items-center text-left">
                                              <span class="ml-1 flex-1 w-0 truncate"> {{ offer.title }} </span>
                                              <span class="hidden ml-1 flex-1 w-0 truncate"> {{ offer.status }} </span>
                                            </div>
                                            <div class="ml-4 flex-shrink-0">
                                              <button><EyeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" /></button>
                                            </div>
                                          </li>
                                        </ul>
                                    </dd>
                                </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Projektid</dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                        <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                                          <li v-for="(project, projectIndex) in partner.projects" :key="projectIndex" class="pl-2 pr-2 py-2 flex items-left justify-between text-sm">
                                            <div class="w-0 flex-1 flex items-center text-left">
                                              <span class="ml-1 flex-1 w-0 truncate"> {{ project.title }} </span>
                                              <span class="hidden ml-1 flex-1 w-0 truncate"> {{ project.status }} </span>
                                            </div>
                                            <div class="ml-4 flex-shrink-0">
                                              <button><EyeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" /></button>
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
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PencilIcon, DocumentDownloadIcon, EyeIcon } from '@heroicons/vue/solid'
import { getPartner } from '../api/partners.js'

const clients = [
  {
    name: 'aRfotod OÜ',
    regcode: '12838033',
    email: 'infsssso@av.ee',
    domain: 'www.airikavettik.ee',
    description: 'Firma tegeleb fotograafiaga',
    contact: [{
      name: 'Airika Vettik',
      email: 'airika@av.ee',
      phone: '59194429'
    }],
    offers: [{
      client: 'aRfoto OÜ',
      sellmanager: 'Tuuli Kena',
      title: 'Uus koduleht domeenile www.airikavettik.ee',
      contact: 'Airika Vettik',
      status: 'Koostamisel',
      },
      {
      sellmanager: 'Toomas Oks',
      title: 'Uus e-pood domeenile www.epood.av.ee',
      contact: 'Airika Vettik',
      status: 'Väljasaadetud'
      }],
    projects: [{
      title: 'Uus e-pood domeenile www.airikavettik.ee',
      status: 'Kujundustööd',
            },
            ]
  },
]

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

  methods: {
    close() {
      this.$emit('close')
    }
  },

  setup() {
    const open = ref(true)

    const partner = ref([])
    async function onePartner() {
      partner.value = await getPartner()
    }
    onePartner()
    

    return {
      clients,
      partner,
      open,
    }
  },
}
</script>