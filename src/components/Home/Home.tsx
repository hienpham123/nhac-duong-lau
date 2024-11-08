import React, { useEffect, useState } from "react";
import PeopleCard, { IPeopleCard } from "../Card/PeopleCard";
import { useLazyGetPeoplesQuery } from "../services/people.service";

const Home = () => {
  const [getPeoples] = useLazyGetPeoplesQuery()

  const [data, setData] = useState<IPeopleCard[]>([])
  const getAllPeoples = async () => {
    const people = await getPeoples('').unwrap()
    setData(people)
  }
  useEffect(() => {
    getAllPeoples()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-5 p-5 w-full min-h-screen">
      {data.map((item: IPeopleCard) => {
        return <PeopleCard key={item.id} data={item} />
      })}
    </div>
  );
}

export default Home
