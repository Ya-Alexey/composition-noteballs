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

    <BaseNotes v-for="note in notes" :key="note.id"
      :note="note"
      @removeNote="handleRemove"
    />
  </div>
</template>

<script setup>
  import BaseNotes from '@/components/BaseNotes.vue';
  import { ref } from 'vue';

  const newNote = ref(''),
        newNoteRef = ref(null),
        notes = ref([
          {
            id: 1,
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam praesentium officiis optio dignissimos porro, maiores corporis voluptatibus repellendus asperiores consequatur aperiam exercitationem nobis sapiente perferendis sunt sit, enim sed vitae?',
          },
          {
            id: 2,
            content: '222 Lorem ipsum dolor sit...',
          }
        ]);

  function addNote() {
    const currentDate = new Date().getTime();

    const note = {
      id: currentDate,
      content: newNote.value,
    }

    notes.value.unshift(note);
    newNote.value = '';
    newNoteRef.value.focus();
  }

  function handleRemove(id) {
    notes.value = notes.value.filter(note => note.id != id);
  }
</script>