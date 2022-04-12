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
                <DialogTitle as="h3" class="text-xl leading-6 font-bold text-gray-900"> </DialogTitle>
                <p class="mt-1 text-xl text-gray-500">  </p>

                      <div class="flex flex-wrap">
                        <div class="w-full">
                          <ul class="flex mb-0 list-none flex-wrap pt-2 pb-2 flex-row">
                            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-teal-600 bg-white': openTab !== 1, 'text-white bg-teal-600': openTab === 1}">
                                Hinnapakkumine
                              </a>
                            </li>
                            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-teal-600 bg-white': openTab !== 2, 'text-white bg-teal-600': openTab === 2}">
                                Projekti kava
                              </a>
                            </li>
                            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-teal-600 bg-white': openTab !== 3, 'text-white bg-teal-600': openTab === 3}">
                                Projekti lõpetamine
                              </a>
                            </li>
                          </ul>
                          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded">
                            <div class="px-2 py-2 flex-auto">
                              <div class="tab-content tab-space">
                                <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                                  <viewOffer />
                                </div>
                                <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                                  <viewProject />
                                </div>
                                <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                                  <viewFinish />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PencilIcon, DocumentDownloadIcon, EyeIcon } from '@heroicons/vue/solid'

import viewOffer from './viewoffer.vue'
import viewProject from './viewproject.vue'
import viewFinish from './viewfinish.vue'


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
    viewOffer,
    viewProject,
    viewFinish
  },

  methods: {
    close() {
      this.$emit('close')
    }
  },

  setup() {
    const open = ref(true)

    return {
      open,
    }
  },
  data() {
    return {
      openTab: 1
    }
  },

    methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
        
  },
}
</script>