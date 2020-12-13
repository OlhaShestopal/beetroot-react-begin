import { createStore, createEvent, forward, sample } from 'effector';
import { nanoid } from 'nanoid';

import { noteCreated } from '../../models/notes';
import { $noteModel, noteSubmitted } from './NoteModal/model';

const modalToggled = createEvent();
const noteSelected = createEvent();

const $isModalOpened = createStore(false);
const $selectedModel = createStore({});

$isModalOpened.on(modalToggled, (isOpened) => !isOpened);
$selectedModel.on(noteSelected, (_, selectedNote) => selectedNote);

forward({ from: noteSubmitted, to: modalToggled });
forward({ from: noteSelected, to: modalToggled });

sample({
  source: $noteModel, // данные для передачи в noteCreated (если нет ключа fn)
  clock: noteSubmitted, // вызвать связь sample
  fn: (note) => ({ ...note, id: nanoid() }), // формируем новую модель для передачи в target
  target: noteCreated // куда нужно передать noteCreated
});

sample({
  source: $selectedModel,
  clock: noteSelected,
  fn: ({ id, ...model }) => model,
  target: $noteModel,
})

export {
  modalToggled,
  noteSelected,
  $isModalOpened
}