import React from "react";
import PeopleCard, { IPeopleCard } from "../Card/PeopleCard";
import { data_lists } from "../../../mock/list-data";

const Home = () => {
  const data: IPeopleCard[] = data_lists

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-5 p-3 w-full min-h-screen">
      {data.map((item: IPeopleCard) => {
        return <PeopleCard key={item.id} data={item} />
      })}
    </div>
  );
}

export default Home
