<template>
  <Kiosk />
             
                <Modal v-if="data.open" 
                modalTitle='Check In'
                modalContent="This is where the patient/group would go"
                modalButton="Check In" />
        
</template>

<script setup>
import { useFormStore } from "./store/formStore.js";
import Kiosk from './components/Kiosk.vue';
import Modal from './components/Modal.vue';
const data = useFormStore();

const showClientForm = () => {
  data.checkIn = !data.checkIn
}



</script>