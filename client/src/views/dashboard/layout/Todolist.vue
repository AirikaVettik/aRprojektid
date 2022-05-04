<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
      <div>
  <div class="hidden sm:block">
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex" aria-label="Tabs">
        <!-- Current: "border-teal-500 text-teal-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        <a v-on:click="toggleTabs(1)" v-bind:class="{'border-teal-500 text-teal-600 w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab === 1, 
        'border-transparent text-gray-500 hover:text-teal-700 hover:border-gray-300 w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab !== 1}"> Tegemata </a>

        <a v-on:click="toggleTabs(2)" @click="Done" v-bind:class="{'border-teal-500 text-teal-600 w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab === 2, 
        'border-transparent text-gray-500 hover:text-teal-700 hover:border-gray-300 w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm truncate': openTab !== 2}"> Tehtud </a>

      </nav>
    </div>
  </div>
</div>
    <div class=" pt-10">

        <h1 class="text-center text-xl font-semibold text-gray-900">Planeerija</h1>

    </div>
  
<div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">

<fieldset>
    <div class="mt-10 border-t border-b border-gray-200 divide-y divide-gray-200">
      <div v-for="(todo, index) in todos" :key="index" class="flex py-4">
      
        <div class="mr-3 h-3">
          <input v-model="todo.checkbox" @change="update(todo.id)" type="checkbox" class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
        </div>

        <div>
          <label class="text-m text-gray-700 select-none"> {{ todo.title }}</label>
        </div>
        
      </div>
    </div>
  </fieldset>
  
    <div class="task">
      <div class="flex py-4">

        <div class="w-full">
          <textarea @keyup.enter="addTask(task)" v-model="task.title" id="todo" name="todo" rows="2" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="ijisdhuhfidsufhkdhfiuhkjbkhb " />
        </div>
        
      </div>
    </div>

</div>
<div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">

   
        <div class="mt-10 border-t border-b border-gray-200 divide-y divide-gray-200">
          <div v-for="(done, index) in dones" :key="index" class="flex py-4">
          
            <div class="mr-3 h-3">
              <input v-model="done.checkbox" @change="updateD(done.id)" type="checkbox" class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
            </div>

            <div>
              <label class="text-m text-gray-700 select-none"> {{ done.title }}</label>
            </div>
            
          </div>
        </div>
      

      <div class="mt-4 sm:mt-2 text-center">
          <button @click="deleteDone" type="button" class="rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700">Kustuta tehtud ülesanded</button>
      </div>
      

    </div>
      </div> 
    
  
  
</template>

<script>
import router from '../../../router'
import { ref, reactive } from 'vue'
import { PencilIcon, EyeIcon } from '@heroicons/vue/solid'
import { getTasksFalse, getTasksTrue , addTodo, updateTodo, updateDone, deleteTasksDone } from '../../../api/todos.js'

export default {
  components: {

  },
  setup() {
    const openTab = ref(1)
    const loading = ref(false)

    const todos = ref([])
    const dones = ref([])

    const todo = ref([])

    const toggleTabs = async(tabNumber) =>{
      openTab.value = tabNumber
    }

    async function Todos() {
      loading.value = true
      todos.value = await getTasksFalse();
      loading.value = false
    }
    Todos()

    const Done = async() => {
      loading.value = true
      dones.value = await getTasksTrue()
      loading.value = false
    }

    const task = reactive({
      checkbox: false,
      title: ''
    })

    const addTask = async(task) => {
      task.value = await addTodo(task);
      todos.value = await getTasksFalse();
      task.title = ''
    }

    const update = async(id) => {
      todo.value = await updateTodo(id)
      todos.value = await getTasksFalse();
    }

    const updateD = async(id) => {
      todo.value = await updateDone(id)
      dones.value = await getTasksTrue();
      todos.value = await getTasksFalse();
    }

    const deleteDone = async() => {
      dones.value = await deleteTasksDone()
      dones.value = await getTasksTrue();
    }

    return {
      openTab,
      toggleTabs,
      todos,
      Done,
      dones,
      task,
      addTask,
      update,
      updateD,
      todo,
      deleteDone
    }
  },

}
</script>