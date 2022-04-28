<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
      <div>
          <div class="sm:flex sm:items-center pt-4">
            <div class="sm:flex-auto">
          <h1 class="pt-10 text-xl text-center font-semibold text-gray-900 uppercase">Projektid</h1>
      </div>
    </div>
  <div class="hidden sm:block">
    <div class="border-b border-gray-200">
      <nav class="-mb-px-3 flex pt-10 uppercase" aria-label="Tabs">
        
        <a v-on:click="toggleTabs(1)" @click="New" v-bind:class="{'border-teal-500 text-teal-600 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab === 1, 
        'border-transparent text-gray-500 hover:text-teal-700 hover:border-gray-300 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab !== 1}"> Uued projektid </a>

        <a v-on:click="toggleTabs(2)" v-bind:class="{'border-teal-500 text-teal-600 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab === 2, 
        'border-transparent text-gray-500 hover:text-teal-700 hover:border-gray-300 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab !== 2}"> Minu projektid </a>

        <a v-on:click="toggleTabs(3)" @click="All" v-bind:class="{'border-teal-500 text-teal-600 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab === 3, 
        'border-transparent text-gray-500 hover:text-teal-700 hover:border-gray-300 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab !== 3}"> Kõik </a>

      </nav>
    </div>
  </div>
</div>

<div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">   
            <div class="mt-8 flex flex-col">
              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Müügijuht</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Projekt</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Staatus</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Klient</th>
                          <th scope="col" class="relative py-3 sm:pr-6"> <span class="sr-only">Vaata</span></th>
                          <th scope="col" class="relative py-3 sm:pr-6"> <span class="sr-only">Muuda</span></th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="(project, projectIndex) in projectsnew" :key="projectIndex">

                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{{ project.object}}</span>
                          </td>
                        
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ project.sellmanager }}</td>
                          
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
          </div>
<div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">   
            <div class="mt-8 flex flex-col">
              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Projektijuht</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Projekt</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Staatus</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Klient</th>
                          <th scope="col" class="relative py-3 sm:pr-6"> <span class="sr-only">Vaata</span></th>
                          <th scope="col" class="relative py-3 sm:pr-6"> <span class="sr-only">Muuda</span></th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="(project, projectIndex) in projectsmy" :key="projectIndex">

                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{{ project.object}}</span>
                          </td>
                        
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ project.manager }}</td>
                          
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div class="text-gray-900">{{ project.title }}</div>
                          </td>

                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ project.subStatus }}</td>

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
          </div>
<div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">   
            <div class="mt-8 flex flex-col">
              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Projektijuht</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Projekt</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Staatus</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Klient</th>
                          <th scope="col" class="relative py-3 sm:pr-6"> <span class="sr-only">Vaata</span></th>
                          <th scope="col" class="relative py-3 sm:pr-6"> <span class="sr-only">Muuda</span></th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="(project, projectIndex) in projects" :key="projectIndex">

                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{{ project.object}}</span>
                          </td>
                        
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ project.manager }}</td>
                          
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div class="text-gray-900">{{ project.title }}</div>
                          </td>

                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ project.subStatus }}</td>

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
          </div>
<Viewp v-if="displayproject"  @close="closeProject" :project="project"/>
</div>
</template>

<script>
import { ref } from 'vue'
import router from '../../../router'
import { PencilIcon, EyeIcon } from '@heroicons/vue/solid'
import { getDocument, getProjects, getProjectsNew, getProjectsMy } from '../../../api/documents.js'
import Viewp from '../../../components/viewp.vue'

export default {
  components: {
    PencilIcon,
    EyeIcon,
    Viewp
  },
  setup() {
    const loading = ref(false)
    const displayproject = ref(false)
    const openTab = ref(2)

    const projects = ref ([])
    const project = ref ([])
    const projectsnew = ref ([])
    const projectsmy = ref ([])

    const showProject = async(id)  => {
      displayproject.value = true
      project.value = await getDocument(id)
    }
    const closeProject = async()=> {
      displayproject.value = false
    }

    const toggleTabs = async(tabNumber) =>{
      openTab.value = tabNumber
    }

    const All = async() => {
      loading.value = true;
      projects.value = await getProjects();
      loading.value = false;
    }

    const New = async() => {
      loading.value = true;
      projectsnew.value = await getProjectsNew();
      loading.value = false;
    }

    async function allProjectsMy() {
      loading.value = true;
      projectsmy.value = await getProjectsMy();
      loading.value = false;
    }
    allProjectsMy();
    

    return {
      loading,
      project,
      displayproject,
      openTab,
      showProject,
      closeProject,
      toggleTabs,
      All,
      projects,
      New,
      projectsnew,
      projectsmy,
    }
  },
}
</script>