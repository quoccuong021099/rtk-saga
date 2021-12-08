import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  useEffect(() => {
    cityApi.getAll().then(res => console.log(res.data.map(x => x.name)));
    studentApi.getAll({
      _page: 1,
      _limit: 10,
      _sort: 'name',
      _order: 'asc',
    }).then(res => console.log(res.data));
  }, [])

  return (
    <div >
      <Routes>
        <Route path="/" element={<>a</>}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
