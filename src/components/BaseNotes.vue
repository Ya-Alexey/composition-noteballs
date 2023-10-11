<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ charLength }} char</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink class="card-footer-item"
        :to="{ 
          name: 'edit-id', 
          params: { 
            id: note.id 
          } 
        }"
      >Edit</RouterLink>
      <a href="#" class="card-footer-item"
        @click.prevent="storeNotes.removeNote(note.id)"
      >Delete</a>
    </footer>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useNotesStore } from '@/stores/notes';

  const props = defineProps({
          note: {
            type: Object,
            required: true,
          }
        }),
        charLength = computed(() => {
          return props.note.content.length;
        }),
        storeNotes = useNotesStore();
</script>