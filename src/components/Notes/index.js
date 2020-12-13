import { useStore } from 'effector-react';

import { $notes, noteDeleted } from '../../models/notes';
import { $isModalOpened, modalToggled, noteSelected } from './model';
import { NoteModal } from './NoteModal';

function Notes() {
  const notes = useStore($notes);
  const isOpened = useStore($isModalOpened);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col pb-2 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            onClick={modalToggled}
          >
            Create note
          </button>
        </div>
      </div>

      <div className="row">
        {notes.map(note =>
          <div className="col-4" key={note.id}>
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-end">
                <button
                  className="btn btn-outline-primary mr-1"
                  onClick={() => noteSelected(note)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => noteDeleted(note.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {isOpened && <NoteModal />}
    </div>
  )
}

export {
  Notes
}