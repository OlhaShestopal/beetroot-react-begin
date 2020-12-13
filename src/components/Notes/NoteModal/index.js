import { useStore } from 'effector-react';
import { noteModelUpdated, noteSubmitted, $noteModel } from './model';

function NoteModal() {
  const model = useStore($noteModel);

  return (
    <div
      className="fixed-top w-100 vh-100"
      style={{
        backgroundColor: "rgba(0, 0, 0, .5)"
      }}
    >
      <div tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="pt-2 w-100">
                <label className="form-label w-100">
                  <input
                    className="form-control"
                    placeholder="Title"
                    value={model.title}
                    onChange={event => noteModelUpdated({
                      field: "title",
                      value: event.target.value
                    })}
                  />
                </label>
              </div>
            </div>
            <div className="modal-body">
              <label className="form-label w-100">
                <textarea
                  className="form-control"
                  style={{ resize: "none", height: "300px" }}
                  value={model.description}
                  onChange={event => noteModelUpdated({
                    field: "description",
                    value: event.target.value
                  })}
                />
              </label>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={noteSubmitted}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  NoteModal
}