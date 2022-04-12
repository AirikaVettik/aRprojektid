<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
      <div>
          <div class="sm:flex sm:items-center pt-4">
            <div class="sm:flex-auto">
          <h1 class="pt-10 text-xl text-center font-semibold text-gray-900 uppercase">Projektid</h1>
      </div>
    </div>
  <div class="sm:hidden pt-10">
    <label for="tabs" class="sr-only">Valik</label>
    <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
    <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md pt-2">
      
      <option>Minu projektid</option>

      <option>Kõik</option>

      <option>Lõpetatud </option>

    </select>
  </div>
  <div class="hidden sm:block">
    <div class="border-b border-gray-200">
      <nav class="-mb-px-3 flex pt-10 uppercase" aria-label="Tabs">
        <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        <a href="#" class="border-teal-500 text-teal-600 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm" aria-current="page"> Minu projektid </a>

        <a href="#" class="border-transparent text-gray-500 w-1/3 hover:text-teal-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm"> Kõik </a>

        <a href="#" class="border-transparent text-gray-500 w-1/3 hover:text-teal-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm"> Lõpetatud </a>

      </nav>
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
                    <div class="text-gray-900">{{ project.project }}</div>
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
                    <button @click="showProject">
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
    <Viewp v-if="displayproject"  @close="closeProject"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '../../../router'
import { PencilIcon, EyeIcon } from '@heroicons/vue/solid'
import { getProjects } from '../../../api/projects.js'
import Viewp from '../../../components/viewp.vue'

const people = [
  {
    client: 'aRfoto OÜ',
    contact: 'Airika Vettik',
    title: 'Uus koduleht domeenile www.airikavettik.ee',
    manager: 'Juhan Klaas',
    status: 'Kliendi sisendi ootel',
  },
    {
    client: 'Estonian Business OÜ',
    contact: 'Mihkel Tõrva',
    title: 'Uus e-pood domeenile www.eb.com',
    manager: 'Mari Maasikas',
    status: 'Pausil'
  },
    {
    client: 'Raindesign OÜ',
    contact: 'Rain Tõrva',
    title: 'Uus e-pood domeenile www.raindesign.ee',
    manager: 'Airika Vettik',
    status: 'Arendustööd'
  },
    {
    client: 'Janika OÜ',
    contact: 'Janika Valga',
    title: 'Uus koduleht domeenile www.raindesign.ee',
    manager: 'Airika Vettik',
    status: 'Kujundustööd'
  },
  // More people...
]

export default {
  components: {
    PencilIcon,
    EyeIcon,
    Viewp
  },

  data() {
    return { 
      displayproject: false
    }
  },

  methods: {
    btnClick: function(event) {
      router.push('new');
    },
    showProject(partner) {
      console.log(partner)
      this.displayproject = true
    },
    closeProject() {
      this.displayproject = false
    }
  },

  setup() {
    const loading = ref(false)

    const projects = ref ([])
    async function allProjects() {
      loading.value = true
      projects.value = await getProjects()
      loading.value = false
    }
    allProjects()

    return {
      people,
      projects,
      loading
    }
  },
}
</script>