<script setup>  
  import 'element-plus/dist/index.css'  
  import { ElButton } from 'element-plus'  
  import { add } from 'utils'  
</script>  
      
<template>  
    <div>  
        <el-button @click="add(1,2)">我是 ElButton</el-button>  
    </div>  
</template>  

<style scoped>  
</style>