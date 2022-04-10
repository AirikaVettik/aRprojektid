<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <!-- Kliendi andmed -->
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 pt-10 flex-auto">
      <div class="mt-10 sm:mt-0">
      
        <div class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Kliendi andmed</h3>
            </div>
        </div>
        <div class="mt-5 md:mt-4 md:col-span-6">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-8">
                <div class="grid grid-cols-3 gap-4">
                
              <div class="col-span-6 sm:col-span-2">
                <label for="client" class="block text-sm font-medium text-gray-700"> Ettevõte nimi </label>
                <input type="text" name="client" id="client" autocomplete="given-name" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="aRfoto OÜ">
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label for="id" class="block text-sm font-medium text-gray-700">Registrikood (kohustuslik)</label>
                <input type="text" name="id" id="id" autocomplete="family-name" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="12838033">
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray-700">Tegevuskoht (linn)</label>
                <input type="text" name="city" id="city" autocomplete="email" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Tõrva">
              </div>

              <div class="col-span-6 sm:col-span-1">
                <label for="email" class="block text-sm font-medium text-gray-700">Ettevõtte e-mail</label>
                <div class="mt-1 flex rounded-md shadow-sm">
                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> @ </span>
                    <input type="text" name="domain" id="domain" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="info@airikavettik.ee" />
                  </div>
              </div>


              <div class="col-span-6 sm:col-span-1">
                <label for="domain" class="block text-sm font-medium text-gray-700">Domeen</label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                    <input type="text" name="domain" id="domain" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.airikavettik.ee" />
                  </div>
              </div>

              <div class="col-span-6">
                <label for="city" class="mt-10 block text-sm font-medium text-gray-700">Kontaktisik</label>
              </div>

                          <div class="col-span-6 sm:col-span-2 lg:col-span-1">
                            <label for="city" class="block text-sm font-medium text-gray-700">Nimi</label>
                            <input type="text" name="contact-name" id="contact-name" autocomplete="address-level2" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Airika Vettik">
                          </div>

                          <div class="col-span-6 sm:col-span-2 lg:col-span-1">
                            <label for="region" class="block text-sm font-medium text-gray-700">E-mail</label>
                             <div class="mt-1 flex rounded-md shadow-sm">
                              <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> @ </span>
                            <input type="text" name="domain" id="domain" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="airika@airikavettik.ee" />
                          </div>
                          </div>

                          <div class="col-span-6 sm:col-span-2 lg:col-span-2">
                            <label for="postal-code" class="block text-sm font-medium text-gray-700">Telefon</label>
                            <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> +372 </span>
                            <input type="text" name="domain" id="domain" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="59194429" />
                        </div>
                          </div>
            </div> 
            </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Salvesta uus klient</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


    
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div v-if="loading">Loading...</div>
            <table v-else class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Klient</th>
                  <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">E-mail</th>
                  <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Kontaktisik</th>
                  <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Domeen</th>
                  <th scope="col" class="relative py-3 sm:pr-6"><span class="sr-only">Vaata</span></th>
                  <th scope="col" class="relative py-3 sm:pr-6"><span class="sr-only">Muuda</span></th>
                </tr>

              </thead>
              <tbody class="text-right divide-y divide-gray-200 bg-white">

                <tr v-for="(partner, partnerIndex) in partners" :key="partnerIndex">

                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="font-medium text-gray-900">{{ partner.name }}</div>
                    <div class="font-medium text-gray-500">{{ partner.regcode }}</div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ partner.email }}</div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ partner.contact[0].name }}</div>
                    <div class="text-gray-500">{{ partner.contact[0].email }}</div>
                    <div class="text-gray-500">{{ partner.contact[0].phone }}</div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div class="text-gray-900">{{ partner.domain }}</div>
                  </td>

                  
                  <td class="relative whitespace-nowrap text-center">
                  <div>
                    <button @click="showClient">
                    <EyeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    </button>
                  </div>
                  </td>

                  <td class="relative whitespace-nowrap text-center pr-2">
                    <button>
                    <PencilIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    </button>
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <Viewclient v-if="displayclient"  @close="closeClient"/>
  </div>
</template>

<script>
import { ref } from 'vue' 
import { PencilIcon, EyeIcon } from '@heroicons/vue/solid'
import Viewclient from '../../../components/viewclient.vue'
import { getPartners, getPartner } from '../../../api/partners.js'

const people = [
  {
    client: 'aRfoto OÜ',
    id: '12833038',
    email: 'info@airikavettik.ee',
    contactEmail: 'airika@airikavettik.ee',
    contactPhone: '+372 59194429',
    contactName: 'Airika Vettik',
    domain: 'www.airikavettik.ee',
  },
   {
    client: 'Estonian Business OÜ',
    id: '13420045',
    email: 'eb@eb.ee',
    contactEmail: 'mihkel@airikavettik.ee',
    contactPhone: '+372 58071815',
    contactName: 'Mihkel Tõrva',
    domain: 'www.eb.ee',
  },
]

export default {
  components: {
    PencilIcon,
    EyeIcon,
    Viewclient
  },

  data() {
    return { 
      displayclient: false
    }
  },

  methods: {
    showClient() {
      this.displayclient = true
    },
    closeClient() {
      this.displayclient = false
    }
  },


  setup() {
    const loading = ref(false)

    const partners = ref([])
    async function allPartners() {
      loading.value = true
      partners.value = await getPartners()
      loading.value = false
    }
    allPartners()

    const partner = ref([])
    async function onePartner() {
      partner.value = await getPartner()
    }
    onePartner()
    
    return {
      partners,
      partner,
      loading,
    }
  },
}
</script>