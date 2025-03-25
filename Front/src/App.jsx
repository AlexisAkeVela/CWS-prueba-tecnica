import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./components/pages/Notes";
import NotesForm from "./components/templates/NotesForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="notes" element={<Notes />}></Route>
            <Route path="notes/nuevo" element={<NotesForm />}></Route>
            <Route path="notes/:id" element={<NotesForm />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
