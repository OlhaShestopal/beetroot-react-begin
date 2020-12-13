import { createStore, createEvent } from 'effector';

const noteCreated = createEvent();
const noteEdited = createEvent();
const noteDeleted = createEvent();

const $notes = createStore([]);

$notes
  .on(noteCreated, (notes, note) => [...notes, note])
  .on(noteDeleted, (notes, id) => notes.filter(note => note.id !== id))
  .on(noteEdited, (notes, note) => {
    const state = [...notes];
    const idx = notes.findIndex(n => n.id === note.id);

    state[idx] = note;
    return state;
  });

export {
  noteEdited,
  noteDeleted,
  noteCreated,
  $notes,
}
