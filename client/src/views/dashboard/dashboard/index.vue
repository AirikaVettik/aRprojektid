<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="px-4 sm:px-6 lg:px-8">
      <div>
          <div class="sm:flex sm:items-center pt-4">
            <div class="sm:flex-auto">
          <h1 class="pt-10 text-md text-center font-semibold text-gray-900 uppercase">Uued projektid</h1>
      </div>
    </div>

</div>

    
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Projekt</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Staatus</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Klient</th>
                  <th scope="col" class="relative py-3 sm:pr-6"> <span class="sr-only">Vaata</span></th>
                  <th scope="col" class="relative py-3 sm:pr-6"> <span class="sr-only">Muuda</span></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(project, index) in projectsnew" :key="project.index">
                  
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ project.title }}</div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ project.status }}</td>

                  <td class="whitespace-nowrap py-4 pr-2 text-sm ">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{ project.partner }}</div>
                        <div class="text-gray-500">{{ project.contact }}</div>
                      </div>
                    </div>
                  </td>

                  <td class="relative whitespace-nowrap text-center">
                    <button @click="showProject(project.id)">
                    <EyeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" /></button>
                  </td>

                  <td class="relative whitespace-nowrap text-center px-2">
                    <button><PencilIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" /></button>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Viewp v-if="displayproject"  @close="closeProject" :project="project" />
  </div>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center pt-4">
      <div class="sm:flex-auto">
        <h1
          class="pt-10 text-md text-center font-semibold text-gray-900 uppercase"
        >
          Kinnitamist ootavad hinnapakkumised
        </h1>
      </div>
    </div>
    <div></div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>

                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Klient
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Projekt
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Staatus
                  </th>
                  <th scope="col" class="relative py-3 sm:pr-6">
                    <span class="sr-only">Vaata</span>
                  </th>
                  <th scope="col" class="relative py-3 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(offer, index) in offerssendout" :key="offer.index">

                  <td class="whitespace-nowrap py-4 pl-2 pr-2 text-sm sm:pl-2">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">
                          {{ offer.partner }}
                        </div>
                        <div class="text-gray-500">{{ offer.contact }}</div>
                      </div>
                    </div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ offer.title}}</div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ offer.subStatus }}
                  </td>

                  <td class="relative whitespace-nowrap text-center px-2">
                    <button @click="showOffer(offer.id)">
                      <EyeIcon
                        class="flex-shrink-0 h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </button>
                  </td>

                  <td class="relative whitespace-nowrap text-center">
                    <button>
                      <PencilIcon
                        class="flex-shrink-0 h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </button>
                  </td>


                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Viewo v-if="displayoffer" @close="closeOffer" :offer="offer"/>
  </div>


</template>

<script>
import router from "../../../router";
import { getProjectsNew, getOffersSendout, getDocument } from '../../../api/documents.js'
import { ref } from "vue";
import {
  PencilIcon,
  DocumentDownloadIcon,
  EyeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/vue/solid";

import Viewo from "../../../components/viewo.vue";
import Viewp from "../../../components/viewp.vue";


export default {
  components: {
    PencilIcon,
    DocumentDownloadIcon,
    EyeIcon,
    DocumentDuplicateIcon,
    Viewo,
    Viewp,
  },

  setup() {
    const loading = ref(false);
    const displayproject = ref(false)
    const displayoffer = ref(false)
    const projectsnew = ref([])
    const offerssendout = ref([])
    const project = ref([]) 
    const offer = ref([])

    const showProject = async(id)  => {
      displayproject.value = true
      project.value = await getDocument(id)
    }

    const closeProject = async()=> {
      displayproject.value = false
    }

    const showOffer = async(id)  => {
      displayoffer.value = true
      offer.value = await getDocument(id)
    }
    const closeOffer = async()=> {
      displayoffer.value = false
    }

    async function New() {
      loading.value = true;
      projectsnew.value = await getProjectsNew();
      loading.value = false;
    }
    New()

    async function Sendout() {
      loading.value = true;
      offerssendout.value = await getOffersSendout();
      loading.value = false;
    }
    Sendout()



    return {
      loading,
      project,
      offer,
      displayproject,
      displayoffer,
      projectsnew,
      offerssendout,
      showProject,
      closeProject,
      showOffer,
      closeOffer,
    };
  },
};
</script>
