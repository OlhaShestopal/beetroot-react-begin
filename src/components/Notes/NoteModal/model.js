import { createStore, createEvent } from 'effector';

const noteSubmitted = createEvent();

const noteModelUpdated = createEvent();
const resetModel = createEvent();

const $noteModel = createStore({
  title: "",
  description: ""
});

$noteModel
  .on(noteModelUpdated, (model, { field, value }) => ({ ...model, [field]: value }))
  .reset(resetModel);

export {
  noteSubmitted,
  noteModelUpdated,
  $noteModel
}