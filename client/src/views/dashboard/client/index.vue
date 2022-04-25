<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <!-- Kliendi andmed -->
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
    >
      <div class="px-4 py-5 pt-10 flex-auto">
      <!-- Uus klient --> 
        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-2">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0 pt-4">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Uus klient:
                </h3>
              </div>
            </div>
            <div class="mt-5 md:mt-4 md:col-span-6">

              <form>
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-8">
                    <div class="grid grid-cols-6 gap-4">
                      <div class="col-span-2 sm:col-span-3">
                        <label
                          for="client"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Ettevõte nimi
                        </label>
                        <input
                          type="text"
                          v-model="form.name"
                          name="name"
                          id="name"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="aRfoto OÜ"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="id"
                          class="block text-sm font-medium text-gray-700"
                          >Registrikood (kohustuslik)</label
                        >
                        <input
                          type="text"
                          v-model="form.regcode"
                          name="regcode"
                          id="regcode"
                          autocomplete="family-name"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="12838033"
                        />
                      </div>

                        <div class="col-span-6 sm:col-span-3">
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-700"
                          >Ettevõtte e-mail</label
                        >
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span
                            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            v-model="form.email"
                            name="email"
                            id="email"
                            class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="info@airikavettik.ee"
                          />
                        </div>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="city"
                          class="block text-sm font-medium text-gray-700"
                          >Tegevuskoht (linn)</label
                        >
                        <input
                          type="text"
                          v-model="form.city"
                          name="city"
                          id="city"
                          autocomplete="email"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="Tõrva"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700">Ettevõtte kontakttelefon</label>
                        
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            +372
                          </span>
                          <input
                            type="text"
                            v-model="form.phone"
                            name="contact-phone"
                            id="contact-phone"
                            class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="59194429"
                          />
                        </div>
                      </div>


                
                      <div class="col-span-6">
                        <label
                          class="mt-10 block text-sm font-medium text-gray-700"
                          >Kontaktisik</label
                        >
                      </div>
  
                      <div class="col-span-6 sm:col-span-2 lg:col-span-2">
                        <label
                          for="city"
                          class="block text-sm font-medium text-gray-700"
                          >Nimi</label
                        >
                        <input
                          type="text"
                          v-model="form.contacts.name"
                          name="contact-name"
                          id="contact-name"
                          autocomplete="address-level2"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="Airika Vettik"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-2 lg:col-span-2">
                        <label
                          for="region"
                          class="block text-sm font-medium text-gray-700"
                          >E-mail</label
                        >
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span
                            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            v-model="form.contacts.email"
                            name="contact-email"
                            id="contact-email"
                            class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="airika@airikavettik.ee"
                          />
                        </div>
                      </div>

                      <div class="col-span-6 sm:col-span-2 lg:col-span-2">
                        <label class="block text-sm font-medium text-gray-700">Telefon</label>
                        
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            +372
                          </span>
                          <input
                            type="text"
                            v-model="form.contacts.phone"
                            name="contact-phone"
                            id="contact-phone"
                            class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="59194429"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      
                      @click="savePartner(form)"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Salvesta uus klient
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- Klientide list --> 
        <div class="mt-8 flex flex-col">
          <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
              >
                <div v-if="loading">Loading...</div>
                <table v-else class="min-w-full divide-y divide-gray-300">
                
                  <thead class="bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        class="px-3 py-3.5 w-2/6 text-right text-sm font-semibold text-gray-900"
                      >
                        Klient
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 w-2/6 text-right text-sm font-semibold text-gray-900"
                      >
                        E-mail
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 w-2/6 text-right text-sm font-semibold text-gray-900"
                      >
                        Kontaktisik
                      </th>
                      <th scope="col" class="relative py-3 sm:pr-6">
                        <span class="sr-only">Vaata</span>
                      </th>
                      <th scope="col" class="relative py-3 sm:pr-6">
                        <span class="sr-only">Muuda</span>
                      </th>
                      <th scope="col" class="relative py-3 sm:pr-6">
                        <span class="sr-only">Kustuta</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="text-right divide-y divide-gray-200 bg-white">
                    <tr
                      v-for="partner in partners"
                      :key="partner.regcode"
                    >
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"
                      >
                        <div class="font-medium text-base text-gray-900">
                          {{ partner.name }}
                        </div>
                        <div class="font-medium text-gray-500">
                          {{ partner.regcode }}
                        </div>
                      </td>

                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        <div class="text-gray-900">{{ partner.email }}</div>
                      </td>

                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        <div class="text-gray-900">{{ partner.contacts[0].name }}</div>
                        <div class="text-gray-500">{{ partner.contacts[0].email }}</div>
                        <div class="text-gray-500">{{ partner.contacts[0].phone }}</div>
                      </td>

                      <td class="relative whitespace-nowrap text-center pl-4 pr-2">
                        <div>
                          <button @click="showPartner(partner.id)" >
                            <EyeIcon
                              class="flex-shrink-0 h-6 w-6 text-gray-400"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </td>

                      <td class="relative whitespace-nowrap text-center pr-2">
                        <button>
                          <PencilIcon @click="dataPartner(partner.id)"
                            class="flex-shrink-0 h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </button>
                      </td>

                      <td class="relative whitespace-nowrap text-center pr-4">
                        <button @click="delPartner(partner.id)">
                          <XIcon
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
      </div>
    </div>
    <Viewclient v-if="display" @close="close" :partner="partner"/>
    <Editclient v-if="edit" @close="close" @editPartner="editPartner" :editpartner="editpartner" />
  </div>
</template>

<script>
import { ref , toRefs, reactive,} from "vue";
import { useField, useForm,  } from 'vee-validate';
import { PencilIcon, EyeIcon, XIcon } from "@heroicons/vue/solid";
import Viewclient from "../../../components/viewclient.vue";
import Editclient from "../../../components/editclient.vue"
import { getPartners, getPartner, addPartner, deletePartner, updatePartner } from "../../../api/partners.js";

export default {
  components: {
    PencilIcon,
    EyeIcon,
    XIcon,
    Viewclient,
    Editclient,
  },

  setup() {
    const loading = ref(false);
    const display = ref(false);
    const edit = ref(false);

    const partners = ref([]);
    const partner = ref([]);
    const editpartner = ref([])

    async function allPartners() {
      loading.value = true;
      partners.value = await getPartners();
      loading.value = false;
    }
    allPartners();

    async function close() {
      display.value = false;
      edit.value = false;
    }

    const showPartner = async (id) => {
      display.value = true;
      partner.value = await getPartner(id);
    }

    const form = reactive({
      name: '',
      regcode: '',
      city: '',
      email: '',
      phone: '',
      contacts: {
        name: '',
        email: '',
        phone: ''
      }
    })

    const savePartner = async(form) => {
      form.value = await addPartner(form)
      partners.value = await getPartners();  
      form.value.value = ''
    } 

    const delPartner = async (id) => {
      partner.value = await deletePartner(id)
      partners.value = await getPartners();
    }

    const dataPartner = async (id) => {
      edit.value = true 
      editpartner.value = await getPartner(id)
      console.log(edit)
    }

    async function editPartner(newData) {
      edit.value = false 
      const id  = newData.id
      console.log(id)
      console.log(newData)
      newData.value = await updatePartner(id, newData)
      partners.value = await getPartners();
      
    }

    return {
      partners,
      partner,
      display,
      showPartner,
      delPartner,
      form,
      savePartner,
      loading,
      edit,
      editpartner,
      dataPartner,
      editPartner,
      close,  
    };
  },
};
</script>
