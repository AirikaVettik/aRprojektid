<template>
    <div class="sm:flex sm:place-items-end pt-4 pb-4">
            <div class="sm:flex-auto">
                  <div>
                       <div class="grid grid-cols-2 gap-6">
                            <div>
                                <!-- Projektijuht -->
                                <label for="manager" class="block text-sm font-medium text-gray-700">Projektijuht</label>
                                <select id="manager" name="manager" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                                    <option>Mari Maasikas</option>
                                    <option></option>
                                    <option selected="">Airika Vettik</option>
                                    <option>aRfoto OÜ</option>
                                </select>
                            </div>
                            <div>
                            
                                <!-- Tööd teaostav ettevõte -->
                                <label for="contact" class="block text-sm font-medium text-gray-700">Tööd teostab</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> Ettevõte </span>
                            <input type="text" name="developer" id="developer" class="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Kodulehed OÜ" />
                        </div>
                            </div> 
                </div>
                            </div>
            </div>
    </div>

        <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
                <div class="border-t border-gray-200" />
            </div>
        </div>
    <!-- Projekti logi -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Projekti logi</h1>
                                <p class="mt-2 text-sm text-gray-700">...</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa sissekanne</button>
                            </div>
                            </div>  
                            <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"> 

                    <div class="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul role="list" class="divide-y divide-gray-200">
                        <li v-for="position in positions" :key="position.id">
                            <a href="#" class="block hover:bg-gray-50">
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-teal-900 truncate">
                                    {{ position.title }}
                                </p>
                                <div class="ml-2 flex-shrink-0 flex">
                                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800">
                                    <button><XIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /></button>
                                    </p>
                                </div>
                                </div>
                                <div class="mt-2 sm:flex sm:justify-between">
                                <div class="sm:flex">
                                    <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-2">
                                    {{ position.info}}
                                    </p>
                                </div>
                                <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                    <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <p>
                                    Sissekanne {{ ' ' }} <time>{{ position.date }}</time>
                                    </p>
                                </div>
                                </div>
                            </div>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                        </div>

                    </div>
                </div>
            </div>
            </form>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>

    <!-- Ajagraafik -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Ajagraafik</h1>
                                <p class="mt-2 text-sm text-gray-700">...</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa uus rida</button>
                            </div>
                            </div>
                            <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">Projekti etapp</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Planeeritud algus</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Planeeritud lõpp</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="person in people" :key="person.name" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input id="done" aria-describedby="comments-description" name="done" type="checkbox" class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
                                        </td>
                                        
                                        <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="text" name="step" id="step" class="w-full text-left focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="Kujundus"/>
                                        </td>

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="e"/>
                                        </td>

                                        <td class=" py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-price" id="plan-price" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="60.00"/>
                                        </td>

                                        <td class="relative whitespace-nowrap text-center">
                                        <button><XIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /></button>
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
            </div>
            </form>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>
    
    <!-- Eelarve -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Eelarve</h1>
                                <p class="mt-2 text-sm text-gray-700">...</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa uus rida</button>
                            </div>
                            </div>
                            <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">Projekti etapp</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Planeeritud töötunnid (h)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Müümishind (€)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Tegelikud töötunnid (h)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Omahind (€)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Kasum (€)</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="person in people" :key="person.name" class="divide-x divide-gray-200">
                                        
                                        <td class="w-1/6 py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="text" name="step" id="step" class="w-full text-left focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="Kujundus"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="25"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="plan-price" id="plan-price" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="60.00"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="real-hour" id="real-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="20"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="real-price" id="real-price" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="40.00"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="profit" id="profit" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="40.00"/>
                                        </td>

                                        <td class="relative whitespace-nowrap text-center">
                                        <button><XIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /></button>
                                        </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <table class="min-w-full divide-y divide-gray-300">
                                <tfoot>
                                <div class="py-10 pr-5 ml-auto w-full lg:w-2/4">
                                    <div class="flex justify-between mb-5">
                                        <div class="text-gray-800 text-right flex-1">Projekti maksumus</div>
                                        <div class="text-right w-40">
                                            <div class="text-gray-800 font-medium">3400 €</div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between mb-5">
                                        <div class="text-sm text-gray-600 text-right flex-1">Projekti omahind</div>
                                        <div class="text-right w-40">
                                            <div class="text-sm text-gray-600">2400 €</div>
                                        </div>
                                    </div>

                                    <div class="flex justify-between mb-5">
                                        <div class="text-sm text-gray-600 text-right flex-1">Pluginad</div>
                                        <div class="text-right w-40">
                                            <div class="text-sm text-gray-600">200 €</div>
                                        </div>
                                    </div>
                                
                                    <div class="py-2 border-t border-b">
                                        <div class="flex justify-between">
                                            <div class="text-xl text-gray-900 text-right flex-1 uppercase ">Projekti kasum</div>
                                            <div class="text-right w-40">
                                                <div class="text-xl text-gray-800 font-bold">1000 €</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                </tfoot>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                
                </div>
            </div>
            </form>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>

    <!-- Moodulid -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Ostetud moodulid, pluginad, template</h1>
                                <p class="mt-2 text-sm text-gray-700">...</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa uus rida</button>
                            </div>
                            </div>
                            <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pl-4">Kuupäev</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Plugin</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Summa</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="person in people" :key="person.name" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="e"/>
                                        </td>

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="text" name="step" id="step" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="Ettemaks 50%"/>
                                        </td>

                                        <td class="py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="profit" id="profit" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="40.00"/>
                                        </td>

                                        <td class="relative whitespace-nowrap text-center">
                                            <button><XIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /></button>
                                        </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                    
                                </div>
                                <table class="min-w-full divide-y divide-gray-300">
                                <tfoot>
                                <div class="py-10 pr-5 ml-auto w-full lg:w-2/4">
                                    <div class="flex justify-between mb-5">
                                        <div class="text-gray-800 text-right flex-1">Kokku</div>
                                        <div class="text-right w-40">
                                            <div class="text-gray-800 font-medium">3400 €</div>
                                        </div>
                                    </div>
                                </div>

                                </tfoot>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                
                </div>
            </div>
            </form>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>

    <!-- Maksegraafik -->
    <div>
        <div class="mt-5 md:mt-0 md:col-span-4">
            <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-2 py-5 bg-white space-y-6 sm:p-6">
                  <div class="px-2 sm:px-2 lg:px-2">
                            <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Maksegraafik</h1>
                                <p class="mt-2 text-sm text-gray-700">...</p>
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Lisa uus rida</button>
                            </div>
                            </div>
                            <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pl-4">Kuupäev</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Maksenimi</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6">Summa</th>
                                        <th scope="col" class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"></th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody class="divide-y divide-gray-200 bg-white">

                                        <tr v-for="person in people" :key="person.name" class="divide-x divide-gray-200">

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
                                        </td>

                                        <td class="py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="date" name="plan-hour" id="plan-hour" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200"/>
                                        </td>

                                        <td class=" py-2 px-2 text-center text-sm text-gray-500 sm:table-cell">
                                        <input type="text" name="step" id="step" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="Ettemaks 50%"/>
                                        </td>

                                        <td class="w-1/6 py-2 px-2 text-right text-sm text-gray-500 sm:table-cell">
                                        <input type="number" name="profit" id="profit" class="w-full text-right focus:ring-teal-500 focus:border-teal-500 sm:text-sm border-gray-200" placeholder="40.00"/>
                                        </td>

                                        <td class="relative whitespace-nowrap text-center text-sm font-medium">
                                        <button><MailIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /></button>
                                        </td>

                                        </tr>
                                    </tbody>
                                    </table>
                                    
                                </div>
                                <table class="min-w-full divide-y divide-gray-300">
                                <tfoot>
                                <div class="py-10 pr-5 ml-auto w-full lg:w-2/4">
                                    <div class="flex justify-between mb-5">
                                        <div class="text-gray-800 text-right flex-1">Projekti maksumus</div>
                                        <div class="text-right w-40">
                                            <div class="text-gray-800 font-medium">3400 €</div>
                                        </div>
                                    </div>
                                </div>

                                </tfoot>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                
                </div>
            </div>
            </form>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
        </div>
    </div>


</template>

<script>
import { ref } from 'vue'
import { MailIcon, CalendarIcon, XIcon } from '@heroicons/vue/solid'


const people = [
  { name: 'Kujundus'},
  { name: 'Arendustööd'}
]

const positions = [
  {
    id: 1,
    title: 'Kliendiga ühendust võetud',
    info: 'Lubab 20.02.2022-ks esimesed sisendid, püüab leida pildid',
    type: 'Projekti logi',
    description: '',
    date: '07.02.2022',
  },
  {
    id: 2,
    title: 'Kliendilt saadud sisend',
    info: 'Lubab 20.02.2022-ks esimesed sisendid, püüab leida pildid',
    type: 'Projekti logi',
    date: '22.02.2022',
  },
  {
    id: 3,
    title: 'Kliendilt saadud ',
    info: 'Lubab 20.02.2022-ks esimesed sisendid, püüab leida pildid',
    type: 'Projekti logi',
    date: '05.03.2022',
  },
   {
    id: 3,
    title: 'User Interface Designer',
    info: 'Lubab 20.02.2022-ks esimesed sisendid, püüab leida pildid',
    type: 'Projekti logi',
    date: '20.03.2022',
  },
]

export default {
    components: {
    CalendarIcon,
    MailIcon,
    XIcon
  },
  setup() {
    

    return {
      people,
      positions,
    }
  },
}
</script>