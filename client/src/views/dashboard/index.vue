<template>
  <div class="h-screen flex">
    <Sidemenu />

      <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
    <Topbar />

      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <!-- Primary column -->
          <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col lg:order-last">
            <router-view />
          </section>
        </main>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden w-1/4 bg-white border-l border-gray-200 overflow-y-auto lg:block">
          <Todolist />
        </aside>

      </div>
    </div>
    </div>
</template>

<script>
import Sidemenu from './layout/Sidemenu.vue'
import Topbar from './layout/Topbar.vue'
import Todolist from './layout/Todolist.vue'

export default {
  components: {
    Sidemenu,
    Topbar,
    Todolist,
  },
  setup() {
    
    return {
    }
  },
}
</script>