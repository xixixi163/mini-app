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
// TODO 报错怎么处理:eslint-plugin-vue 版本8以上，在eslint配置中开启'vue/setup-compiler-macros': true
const buttonProps = defineProps<buttonPropsType>();

const buttonStyle = computed(() => {
  return { [`ll-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
