<template >
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of all char</td>
          <td>{{ totalNotesCharCount }}</td>
        </tr>
      </tbody>
    </table>
    <input class="input" 
      type="text" 
      placeholder="Text...."
      v-autofocus
    >
  </div>
</template>

<script setup>
  import { vAutofocus } from '@/directives/vAutofocus';
  import { useNotesStore } from '@/stores/notes';

  const { totalNotesCount, totalNotesCharCount } = useNotesStore();

</script>