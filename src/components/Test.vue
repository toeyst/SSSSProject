<template>
  <div>
    <div> hii</div>
    <file-upload ref="upload" v-bind="options" @upload-success="onUploadSuccess"></file-upload>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const options = ref({
      postAction: '/upload',
      accept: 'image/*'
    })
    function onUploadSuccess(response, file, inputEl, event) {
      console.log(response)
    }
    return { options, onUploadSuccess }
  }
}
</script>
