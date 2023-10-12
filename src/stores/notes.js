import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [
      {
        id: 1,
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam praesentium officiis optio dignissimos porro, maiores corporis voluptatibus repellendus asperiores consequatur aperiam exercitationem nobis sapiente perferendis sunt sit, enim sed vitae?',
      },
      {
        id: 2,
        content: '222 Lorem ipsum dolor sit...',
      }
    ],
  }),

  actions: {
    addNote(note) {
      this.notes.unshift(note);
    },
    removeNote(id) {
      this.notes = this.notes.filter(note => note.id != id);
    },
    updateNote({id, content}) {
      const updatedNoteIdx = this.notes.findIndex(note => note.id == id);
      if (updatedNoteIdx === -1) {
        return
      }
      this.notes[updatedNoteIdx].content = content;
    }
  },
  getters: {
    getNoteContent(state) {
      return (id) => {
        const noteItem = state.notes.find(note => note.id == id);
        return noteItem.content;
      } 
    },
    totalNotesCount(state) {
      return state.notes.length;
    },
    totalNotesCharCount(state) {
      let charCount = 0;
      state.notes.forEach(note => {
        charCount += note.content.length;
      });
      return charCount;
    }
  }
})
