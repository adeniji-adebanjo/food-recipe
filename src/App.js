import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Event from "./pages/Event";
import Videos from "./pages/Videos";
import Community from "./pages/Community";
import MealPlanner from "./components/meal-planner/MealPlanner";
import Trending from "./components/trending/Trending";

const App = () => {
  return (
    <>
      <Explore />
      <MealPlanner />
      <Trending />

      {/* links to pages */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore />}>
            <Route index element={<Event />} />
            <Route index element={<Community />} />
            <Route index element={<Videos />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;
