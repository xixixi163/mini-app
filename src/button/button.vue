<template>
  <button class="ll-button" :class="buttonStyle">
       
    
    <slot />
  </button>
</template>
<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';

defineOptions({
  name: 'LlButton'
  
});

type buttonPropsType = {
  type?: string;
};
const buttonProps = defineProps<buttonPropsType>();

const buttonStyle = computed(() => {
  return { [`ll-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
