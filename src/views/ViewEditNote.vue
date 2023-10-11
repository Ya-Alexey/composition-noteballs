<template>
  <div class="edit-note">
    <NoteForm v-model="noteContent"
      bgColor="link"
      ref="noteForm"
      placeholder="Edit note"
      label="Edit your note"
      >
      <template v-slot:buttons>
        <RouterLink class="button is-link is-light"
          :to="{ name: 'home' }"
        >
          Cancel
        </RouterLink>
        <button class="button is-link has-background-link"
          :disabled="!noteContent"
          >
          Save Note
        </button>
      </template>
    </NoteForm>
  </div>
</template>

<script setup>
  import NoteForm from '@/components/NoteForm.vue';
  import { useNotesStore } from '@/stores/notes';
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const noteContent = ref(''),
        storeNotes = useNotesStore(),
        route = useRoute();

  noteContent.value = storeNotes.getNoteContent(route.params.id);

</script>