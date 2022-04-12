<template>

          <div>
            <div>
              <div class="mt-1 text-center sm:mt-5">
                <DialogTitle as="h3" class="text-xl leading-6 font-bold text-gray-900">  </DialogTitle>
                <p class="mt-1 text-xl text-gray-500"> </p>

                <div class="mt-10">
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                          <dl class="sm:divide-y sm:divide-gray-200">
                            
                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">E-mail</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"></dd>
                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Domeen</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"></dd>
                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Kontaktisik</dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                    <ul role="list">
                                      <div>  </div>
                                      <div>  </div>
                                      <div></div>
                                      <div> - </div>
                                    </ul>
                                  </dd>

                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Ettevõttest</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1"> </dd>
                              </div>

                              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-1 sm:px-2">
                                <dt class="text-sm font-medium text-gray-500">Hinnapakkumised</dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                                        <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                                          <li v class="pl-2 pr-2 py-2 flex items-left justify-between text-sm">
                                            <div class="w-0 flex-1 flex items-center text-left">
                                              <span class="ml-1 flex-1 w-0 truncate"> </span>
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
                                          <li  class="pl-2 pr-2 py-2 flex items-left justify-between text-sm">
                                            <div class="w-0 flex-1 flex items-center text-left">
                                              <span class="ml-1 flex-1 w-0 truncate">  </span>
                                              <span class="hidden ml-1 flex-1 w-0 truncate">  </span>
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
 
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PencilIcon, DocumentDownloadIcon, EyeIcon } from '@heroicons/vue/solid'


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

    return {
       
      open,
    }
  },
}
</script>