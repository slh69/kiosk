import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createPinia} from 'pinia'

import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
createApp(App)
.use(createPinia())
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses({
            global: {
                outer: 'mb-5 formkit-disabled:opacity-50',
                help: 'text-xs text-gray-500',
                messages: 'list-none p-0 mt-1 mb-0',
                message: 'text-red-500 mb-1 text-xs'
              },
              button: {
                wrapper: 'mb-1',
                input: 'bg-cyan-400 hover:bg-blue-700 text-white text-sm font-normal py-3 px-5 rounded'
              },
              color: {
                label: 'block mb-1 font-bold text-sm',
                input: 'w-16 h-8 appearance-none cursor-pointer border border-gray-300 rounded-md mb-2 p-1'
              },
              date: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'max-w-md border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              },
            
              checkbox: {
                legend: 'font-bold text-sm pb-3',
                wrapper: 'flex mb-1 cursor-pointer',
                input: 'form-check-input appearance-none h-5 w-5 mr-1 border border-gray-500 rounded-sm bg-white checked:bg-cyan-500 focus:outline-none focus:ring-0 transition duration-200',
                label: 'text-sm text-gray-700 pr-4 w-25',
                options: 'flex-wrap grid grid-cols-4',
              },
              email: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'overflow-hidden focus-within:border-cyan-500',
                input: 'w-full h-10 px-3 border border-gray-400 formkit-invalid:border-red-400 overflow-hidden focus-within:border-cyan-500 rounded-lg text-base text-gray-700 placeholder-gray-400'
              },
              
              file: {
                label: 'block mb-1 font-bold text-sm',
                inner: 'max-w-md cursor-pointer',
                input: 'text-gray-600 text-sm mb-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600',
                noFiles: 'block text-gray-800 text-sm mb-1',
                fileItem: 'block flex text-gray-800 text-sm mb-1',
                removeFiles: 'ml-auto text-blue-500 text-sm'
              },
              month: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'max-w-md border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              },
              number: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'max-w-full border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              },
              password: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'max-w-md border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              },
              radio: {
              
                legend: 'font-bold text-sm pb-3',
                wrapper: 'flex mb-1 cursor-pointer',
                input: 'form-check-input appearance-none h-5 w-5 mr-1 border border-gray-500 rounded-sm bg-white checked:bg-cyan-500 focus:outline-none focus:ring-0 transition duration-200',
                label: 'text-sm text-gray-700 pr-1 w-22',
                options: 'flex-wrap grid grid-cols-4',
            
              },
              range: {
                inner: 'max-w-md',
                input: 'form-range appearance-none w-full h-2 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none'
              },
              search: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'max-w-md border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              },
              select: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'overflow-hidden focus-within:border-cyan-500',
                input: 'w-full h-10 px-3 border border-gray-400 formkit-invalid:border-red-400 overflow-hidden focus-within:border-cyan-500 rounded-lg text-base text-gray-700 placeholder-gray-400',
              },
              submit: {
                wrapper: 'mb-1',
                input: 'bg-cyan-400 hover:bg-blue-700 text-white text-md font-normal py-3 px-5 rounded'
              },
              tel: {
                label: 'block mb-1 font-bold text-sm overflow-hidden formkit-invalid:text-red-500',
                inner: 'max-w-md border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-cyan-500',
                input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',  
              },
              text: {  
                label: 'block mb-1 font-bold text-sm overflow-hidden formkit-invalid:text-red-500',
                inner: 'overflow-hidden focus-within:border-cyan-500',
                input: 'w-full h-10 px-3 border border-gray-400 formkit-invalid:border-red-400 overflow-hidden focus-within:border-cyan-500 rounded-lg text-base text-gray-700 placeholder-gray-400',
              },
            
              textarea: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'max-w-full border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-cyan-500',
                input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
                input: 'block w-full h-32 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:shadow-outline',
              },
              time: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'max-w-md border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              },
              url: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'max-w-md border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              },
              week: {
                label: 'block mb-1 font-bold text-sm formkit-invalid:text-red-500',
                inner: 'max-w-md border border-gray-400 formkit-invalid:border-red-500 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              
            },
        }),
      },
    })
  )
  .mount('#app')
