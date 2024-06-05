import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UsList from "./pages/list/UsList";
import BkList from "./pages/list/BkList";
import AuList from "./pages/list/AuList";
import LanList from "./pages/list/LanList";
import GenList from "./pages/list/GenList";
import UsNew from "./pages/new/UsNew";
import BkNew from "./pages/new/BkNew";
import AuNew from "./pages/new/AuNew";
import LanNew from "./pages/new/LanNew";
import GenNew from "./pages/new/GenNew";
import UsSingle from "./pages/single/UsSingle";
import BkSingle from "./pages/single/BkSingle";
import AuSingle from "./pages/single/AuSingle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./UsformSource";
import { bookInputs } from "./BkformSourse";
import { autherInputs } from "./AuformSourse";
import { languageInputs } from "./Lanformsourse";
import { genreInputs } from "./Genformsourse";

import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GenreBooksTable from "./component/datatable/GenreBooksTable";
import GenreBooksList from "./pages/list/GenreBooksList";
import LangBooksList from "./pages/list/LangBooksList";
// import "./style/global.css";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<UsList />} />
                <Route path=":userId" element={<UsSingle />} />
                <Route
                  path="Usnew"
                  element={<UsNew inputs={userInputs} title="Add new user" />}
                />
              </Route>
              <Route path="books">
                <Route index element={<BkList />} />
                <Route path=":bookId" element={<BkSingle />} />
                <Route
                  path="Bknew"
                  element={<BkNew inputs={bookInputs} title="Add new book" />}
                />
              </Route>
              <Route path="authors">
                <Route index element={<AuList />} />
                <Route path=":autherId" element={<AuSingle />} />
                <Route
                  path="Aunew"
                  element={
                    <AuNew inputs={autherInputs} title="Add new auther" />
                  }
                />
              </Route>
              <Route path="languages">
                <Route index element={<LanList />} />
                <Route
                  path="LanNew"
                  element={
                    <LanNew inputs={languageInputs} title="Add new Language" />
                  }
                />
                <Route path=":id" element={<LangBooksList />} />
              </Route>
              <Route path="genres">
                <Route index element={<GenList />} />
                <Route
                  path="GenNew"
                  element={
                    <GenNew inputs={genreInputs} title="Add new Genre" />
                  }
                />
                <Route path=":id" element={<GenreBooksList />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
