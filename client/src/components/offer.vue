<template>
    <!-- Koostaja ja kestvus -->
        <div class="mt-2 md:mt-2 md:col-span-6">
            <form action="#" method="POST">
                <div>
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-4">
                    <div class="grid grid-cols-6 gap-2">
                
                        <div class="col-span-6 sm:col-span-2">
                            <label for="sellmanager" class="block text-sm font-medium text-gray-700"> Hinnapakkumise koostaja</label>
                             <select id="sellmanager" name="sellmanager" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                    <option>Mari Maasikas</option>
                                    <option>Juulia Nurk</option>
                                    <option selected="">Airika Vettik</option>
                                    <option>Madis Mõnus</option>
                                </select>
                        </div>

                        <div class="col-span-6 sm:col-span-2">
                            <label for="working" class="block text-sm font-medium text-gray-700">Projekti kestvus</label>
                            <input type="text" name="working" id="working" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="12-16 töönädalat; 5 tööpäeva">
                        </div>

                        <div class="col-span-6 sm:col-span-2">
                            <label for="workstart" class="block text-sm font-medium text-gray-700">Projektiga saab alustada</label>
                            <input type="text" name="workstart" id="workstart" class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="23.04.2022; 16.kalendrinädalal">
                        </div>
                        
                    </div>
                    </div>
                </div>
            </form>
        </div>

                    
    <!-- Projektinimi ja staatuse nupp -->
    <div class="sm:flex sm:place-items-end pt-4 pb-4">
            <!-- Projektinimi -->
            <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900 mt-5">Projekti nimi:</h1>
                <div class="mt-1">
                <input type="text" name="offer-title" id="offer-title" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Uus e-pood domeenile www.raindesign.ee.">
                </div>
                
            </div>
    </div>

        <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
                <div class="border-t border-gray-200" />
            </div>
        </div>

    
    <!-- Kliendi andmed -->
    <div>
        <div class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Kliendi andmed</h3>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-2 gap-6">
                            <div>
                                <!-- Klient ehk ettevõttenimi -->
                                <label for="client" class="block text-sm font-medium text-gray-700">Klient</label>
                                <select id="client" name="client" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                    <option>Janika OÜ</option>
                                    <option>aRprojektid OÜ</option>
                                    <option selected="">Raindesign OÜ</option>
                                    <option>aRfoto OÜ</option>
                                </select>
                            </div>
                            <div>
                                <!-- Ettevõtte kontaktisik -->
                                <label for="contact" class="block text-sm font-medium text-gray-700">Kontaktisik</label>
                                <select id="contact" name="contact" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                    <option>Janika Valga</option>
                                    <option>Airika Vettik</option>
                                    <option selected="">Rain Tõrva</option>
                                    <option>Mihkel Tõrva</option>
                                </select>
                            </div> 
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                        <!-- Projektiga seotud domeen -->
                        <label for="domain" class="block text-sm font-medium text-gray-700"> Domeen </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                            <input type="text" name="domain" id="domain" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.raindesign.ee" />
                        </div>
                            <div>
                            <p class="mt-2 text-xs text-gray-500">Projektiga seotud domeen.</p>
                            </div>
                    </div>
                </div>

                <div>
                    <!-- Ettevõttest ülevaade -->
                    <label for="about" class="block text-sm font-medium text-gray-700"> Ettevõttest </label>
                    <div class="mt-1">
                    <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Ettevõtte peamine tegevusala on mööbli tootmine. Meie klient, kes samuti tegeleb mööbli tootmisega, teostab osa oma tellimustest meie juures. " />
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Lühike ülevaade, millega ettevõtte tegeleb.</p>
                </div>
                </div>
            </div>
            </form>
        </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>
  
    <!-- Kujundus -->
    <div>
        <div class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4 mr-2">
            <h3 class="pb-3 text-lg font-medium leading-6 text-gray-900 ">Etapp</h3>
            <input type="text" name="name" id="name" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Kujundus" />
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <div class="mt-1">
                    <textarea id="design" name="design" rows="10" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="... " />
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Etapi kirjeldus.</p>
                </div>
                </div>

                <div class="px-4 sm:px-6 lg:px-8">
                <div class=" flex flex-col sm:-mx-6 md:mx-0">
                <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Tunnid (h) </th>
                                <th class=" w-1/6 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Hind (€/h</th>
                                <th class=" w-1/6 py-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Kokku (€) (€)</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                            <tr>
                            <td class=" py- px-2 text-center text-sm text-gray-500 sm:table-cell">
                                <input type="number" name="hours" id="hours" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="0"/>
                            </td>
                            <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                <input type="number" name="price" id="price" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="0"/>
                            </td>
                            <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                <a name="total" id="total" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200"/>
                                <p class="text-right" > 0 </p> 
                            </td>

                            </tr>
                            </tbody>
                </table>
            </div>
            </div>
            </div>
            </form>
            
        </div>
        </div>
        <div class="mt-10 sm:mt-5 sm:flex-none text-right">
            <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa etapp</button>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    
    </div>

    <!-- Tingimused -->
    <div>
        <div class="md:grid md:grid-cols-5">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0 pt-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Tingimused</h3>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <div class="mt-1">
                    <textarea id="management" name="management" rows="10" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="... " />
                    </div>
                    <p class="mt-2 text-xs text-gray-500">Ettevõtte tingimused.</p>
                </div>
                </div>

                
            </div>
            </form>
        </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
        
    </div>


    <!-- Footer -->
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="-mx-5 mt-8 flex flex-col sm:-mx-6 md:mx-0">
    
      <table class="min-w-full divide-y divide-gray-300">
                                <tfoot>
                                <div class="py-2 ml-auto w-full sm:w-full lg:w-2/4">
                                    <div class="flex justify-between mb-5 place-items-end">
                                        <div class="text-gray-900 text-right flex-1">Töötunnid </div>
                                        <div class="text-right w-40">
                                            <div class="text-lg text-gray-800"> 0 h</div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between mb-5 place-items-end">
                                        <div class="text-m text-gray-800 text-right flex-1">Projekti ettemaks</div>
                                        <div class="text-right w-40">
                                            <div class=" text-right text-lg text-gray-500 sm:table-cell">
                                            <input type="text" name="step" id="step" class="w-4/6 p-0.5 text-right focus:ring-teal-500 focus:border-teal-500 sm:text-lg border-gray-200" placeholder="50%"/>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div class="py-2 border-t border-b">
                                        <div class="flex justify-between place-items-end ">
                                            <div class="text-xl text-gray-900 text-right flex-1 uppercase ">Projekti hind</div>
                                            <div class="text-right w-40">
                                                <div class="text-xl text-gray-800 font-bold">0 €</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                </tfoot>
                                </table>
        <div class="sm:flex sm:items-center py-10">
            <div class="sm:flex-auto"> </div>
            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button type="button" name="save" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto">Salvesta</button>
            </div>
        </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'

</script>