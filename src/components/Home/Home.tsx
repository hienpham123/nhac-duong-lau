import React from "react";
import PeopleCard from "../Card/PeopleCard";

export function Home() {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-5 p-3">
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
