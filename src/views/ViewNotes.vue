<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note"
            v-model="newNote"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success"
            :disabled="!newNote"
            @click="addNote"
            >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <BaseNotes v-for="note in storeNotes.notes" :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup>
  import BaseNotes from '@/components/BaseNotes.vue';
  import { useNotesStore } from '@/stores/notes';
  import { ref } from 'vue';

  const newNote = ref(''),
        newNoteRef = ref(null),
        storeNotes = useNotesStore();

  function addNote() {
    const currentDate = new Date().getTime(),
          note = {
            id: currentDate,
            content: newNote.value,
          };

    storeNotes.addNote(note);
    newNote.value = '';
    newNoteRef.value.focus();
  }
</script>