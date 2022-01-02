import {FC, useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Clock from './common/Clock';
import UserInfo from './common/UserInfo';
import VersionDisplay from './common/VersionDisplay';
import {withLoading} from './hoc/Loader';
import IndexPage from './common/IndexPage';
import ItemPage from './common/ItemPage';
import LocalizationContext, {Language} from './LocalizationContext';
import BalanceDisplay from "./common/BalanceDisplay";
import UserContext, {User} from "./UserContext";
import VersionContext, {Version} from "./VersionContext";
import {Immutable} from "./utils/Types";
import AppTitle from "./AppTitle";
import SearchBar from "./search/SearchBar";
import Toggle from './common/Toggle';
import Fetcher from './utils/Fetcher';

type AppState = Immutable<
  {
    isLoading: true,
  } |
  {
    isLoading: false,
    user: User;
    version: Version;
    language: Language;
}>;

const App: FC<{}> = () => {
  const [state, setState] = useState<AppState>({isLoading: true});
  useEffect(() => {
    Promise.all([
      Fetcher.GET<User>('/app/v1/user'),
      Fetcher.GET<Version>('/app/v1/version')
    ]).then(([user, version]) => {
      setState({isLoading: false, user, version, language: user.language});
    }).catch(() => {
      setState({isLoading: true});
    });
  }, []);
  if (state.isLoading) {
    return null;
  }
  const {user, version, language} = state;
  return (
      <VersionContext.Provider value={version}>
        <UserContext.Provider value={user}>
          <LocalizationContext.Provider value={language}>
            <div className="App">
              <BrowserRouter>
                <>
                  <header className="App-header">
                    <AppTitle/>
                    <SearchBar/>
                    <Toggle/>
                    <div className="App-header-right">
                      <UserInfo/>
                      <VersionDisplay/>
                      <BalanceDisplay/>
                      <Clock/>
                    </div>
                  </header>
                </>
                <Routes>
                  <Route path="/" element={<IndexPage/>}></Route>
                  <Route path="/items/*" element={<ItemPage/>}></Route>
                </Routes>
              </BrowserRouter>
            </div>
          </LocalizationContext.Provider>
        </UserContext.Provider>
      </VersionContext.Provider>
  );
};

export default withLoading(App);
