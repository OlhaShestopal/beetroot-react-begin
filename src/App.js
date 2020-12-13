import { useState } from "react";
import { Notes } from './components/Notes';
import { Reminders } from './components/Reminders';

function App() {
  const [currentPart, setCurrentPart] = useState("notes");

  return (
    <>
      <header className="app-header py-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-outline-primary w-100"
                onClick={() => setCurrentPart("notes")}
              >
                Notes
              </button>
            </div>

            <div className="col">
              <button
                type="button"
                className="btn btn-outline-primary w-100"
                onClick={() => setCurrentPart("reminders")}
              >
                Reminders
              </button>
            </div>
          </div>
        </div>
      </header>

      {currentPart === "notes" ? <Notes /> : <Reminders />}
    </>
  )
}

export {
  App
};
