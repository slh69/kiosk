import { defineStore } from 'pinia'
import { differenceInYears, parseISO } from 'date-fns'


export const useFormStore = defineStore('formStore', {
  state: () => ({
        gender: '',
        dob: '',
        age: '',
        reasonForVisit: [],
        formData: {},
        settings: false,
        genInfoAdult: true,
        genInfoChild: true,
        guardian: true,
        fspecific: true,
        mspecific: true,
        mhxAdult:true,
        mhxChild:true,
        mhxFamily:true,
        reasonVisit:true,
        sports:true,
        accident:true,
        workComp:true,
        requireEmail:false,       
        submitted: false,
        hipaa: '',
        hipaaRequire: false,
        open:false

  
      }),
  getters: {
    calculateAge (state) {
        const dates = parseISO(this.dob, "dd/MM/yyyy", new Date())
        const age = differenceInYears(new Date(), dates)
            return age
     },
     
}

})