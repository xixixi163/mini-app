<template>
  <button class="ll-icon" :class="iconStyle">
    <slot />
  </button>
</template>
<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';

defineOptions({
  name: 'LlIcon'
});

type iconPropsType = {
  type?: string;
};
const iconProps = defineProps<iconPropsType>();

const iconStyle = computed(() => {
  return { [`ll-icon--${iconProps.type}`]: iconProps.type };
});
</script>
