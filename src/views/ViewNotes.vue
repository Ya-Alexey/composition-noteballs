<template>
  <div class="notes">
    <NoteForm v-model="newNote"
      label="Your note text"
      >
      <template v-slot:buttons>
        <button class="button is-link has-background-success"
          :disabled="!newNote"
          @click="addNote"
          >
          Add New Note
        </button>
      </template>
    </NoteForm>

    <BaseNotes v-for="note in storeNotes.notes" :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup>
  import BaseNotes from '@/components/BaseNotes.vue';
  import NoteForm from '@/components/NoteForm.vue';
  import { useNotesStore } from '@/stores/notes';
  import { ref } from 'vue';
  import { useWatchChar } from '@/use/useWatchChar';

  const newNote = ref(''),
        storeNotes = useNotesStore();

  function addNote() {
    const currentDate = new Date().getTime(),
          note = {
            id: currentDate,
            content: newNote.value,
          };

    storeNotes.addNote(note);
    newNote.value = '';
  }
  useWatchChar(newNote);

</script>