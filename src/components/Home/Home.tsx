import React from "react";
import PeopleCard from "../Card/PeopleCard";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-5 p-3">
      {/* <SideBar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/info" element={ <MyInfo /> } />
      </Routes> */}
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
      <PeopleCard/>
    </div>
  );
}

export default Home
