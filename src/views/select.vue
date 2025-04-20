<template>
  <div class="w-full flex flex-col justify-between items-center ">
    <div class="flex gap-2" >
      <div class="w-80 ">
        <EaSelect placeholder="Seciniz" v-model="dropdownValue" :options="optionsDummy" label="Example Label" size="large" :multiselect="true"/>
      </div>
      <div class="w-80">
        <EaSelect placeholder="Seciniz" v-model="dropdownValue" :options="optionsDummy" label="Example Label" />
      </div>
      <div class="w-80">
        <EaSelect placeholder="Seciniz" v-model="dropdownValue" :options="optionsDummy" label="Example Label" size="small" />
      </div>
    </div>



  </div>
</template>

<script setup lang="ts">

import EaSelect from '@/components/ui/inputs/EaSelect/EaSelect.vue';
import { ref } from 'vue';


const dropdownValue = ref([])

// watch([dropdownValue, dropdownValue2, dropdownValue3], () => {
//   console.log(dropdownValue.value)
//   console.log(dropdownValue2.value)
//   console.log(dropdownValue3.value)
// })

const optionsDummy = [
  {
    id: 1,
    name: 'Evren',
    family: [{ name: 'asdasd' }, { name: 'asdasd' }, { name: 'asdasd' }, { name: 'asdasd' },]
  },
  {
    id: 2,
    name: 'Erdem',
  },
  {
    id: 3,
    name: 'Melek',
  },
  {
    id: 4,
    name: 'Ihsan',
  },
  {
    id: 5,
    name: 'Coskun',
  },
]

</script>

<style scoped></style>
