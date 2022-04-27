<template>

          <div>

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
  
  setup() {
    const open = ref(true)
    const loading = ref(false)

    const offer = ref([])


    return {
        offer,
        loading,
        open,
    }
  },
}
</script>