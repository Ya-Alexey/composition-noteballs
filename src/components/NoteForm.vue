<template>
  <div class="card p-4 mb-5"
    :class="`has-background-${bgColor}-dark`"
  >
    <label class="label has-text-white" v-if="label"
      for="field-textarea"
    >
      {{ label }}
    </label>
    <div class="field">
      <div class="control">
        <textarea class="textarea"
          id="field-textarea"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          ref="textarea"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
          modelValue: String,
          bgColor: {
            type: String,
            default: 'success',
          },
          placeholder: {
            type: String,
            default: 'Add a new note',
          },
          label: String,
        }),
        textarea = ref(null);

  function textareaFocus() {
    textarea.value.focus();
  }
  defineEmits(['update:modelValue']);
  defineExpose({
    textareaFocus,
  });
  

</script>