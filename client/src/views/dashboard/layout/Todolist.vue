<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
      <div>
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a tab</label>
    <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
    <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md pt-4">
      <option>Tegemata</option>

      <option>Tehtud</option>

    </select>
  </div>
  <div class="hidden sm:block">
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex" aria-label="Tabs">
        <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        <a href="#" class="border-teal-500 text-teal-600 w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm" aria-current="page"> Tegemata</a>

        <a href="#" class="border-transparent text-gray-500 w-1/2 hover:text-teal-700 hover:border-gray-300 w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm"> Tehtud </a>

      </nav>
    </div>
  </div>
</div>
    <div class=" pt-10">

        <h1 class="text-center text-xl font-semibold text-gray-900">Planeerija</h1>

    </div>
    
    <div class="mt-4 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">

          </div>
        </div>
      </div>
    </div>   
            
    <div class="text-right">
        <div class="mt-4 sm:mt-2">
          <textarea id="todo" name="todo" rows="2" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="... " />
        </div>
        <div class="mt-4 sm:mt-2">
          <button type="button" class="rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700">+</button>
        </div>
    </div>

 <fieldset>
    <div class="mt-10 border-t border-b border-gray-200 divide-y divide-gray-200">
      <div v-for="(todo, todoIdx) in todos" :key="todoIdx" class="flex py-4">
      
        <div class="mr-3 h-3">
          <input :id="`todo-${todo.id}`" :name="`todo-${todo.id}`" type="checkbox" class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
        </div>

        <div>
          <label :for="`person-${todo.id}`" class="text-m text-gray-700 select-none">{{ todo.name }}</label>
        </div>
        
      </div>
    </div>
  </fieldset>

                         
  </div>
  
  
</template>

<script>
import router from '../../../router'
import { PencilIcon, EyeIcon } from '@heroicons/vue/solid'

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
]

const todos = [
  { id: 1, name: 'Saada Estonian Business OÜ kiri - ootan pilte,videoid, tekste' },
  { id: 2, name: 'aRfoto OÜ - tee projekti ettevalmistused' },
  { id: 3, name: 'Saada ettemaksu arve soov raamatupidajale - aRfoto OÜ' },
  { id: 4, name: 'Saada ettemaksu arve - aRfoto OÜ' },
  { id: 5, name: 'Aruta kujundajaga raindesign.ee kodulehe kujundust ' },
]

export default {
  components: {
    PencilIcon,
    EyeIcon,
  },
  setup() {
    return {
      people,
      todos
    }
  },
  methods: {
    btnClick: function(event) {
      router.push('new');
    },
  },
}
</script>