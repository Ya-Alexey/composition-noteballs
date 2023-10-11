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
    }
  },
  getters: {
    getNoteContent(state) {
      return (id) => {
        const noteItem = state.notes.find(note => note.id == id);
        return noteItem.content;
      } 
    }
  }
})
