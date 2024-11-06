import React from "react";
import { Link, useParams } from "react-router-dom";
import { choosen_province_list } from "../../../mock/choosen-province";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { IoIosArrowBack } from "react-icons/io";

export default function ChooseProvince() {
    const { province } = useParams();

    const items = choosen_province_list.filter(
        (item) => province && item.province_id == +province
    );
    return (
        <section className="w-full h-full min-h-screen">
            <div className="flex h-12 md:h-20 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <Link to={ROUTERS_PATHS.CHOSEN_PEOPELE} className="absolute left-3">
                    <IoIosArrowBack size={30} color="white" />
                </Link>
                <h1 className="text-xl sm:text-3xl font-semibold text-white text-center">
                    {items[0].province_name}
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-2 rounded-lg p-2">
                {(items ?? []).map((item) => {
                    return (
                        <Link
                            to={ROUTERS_PATHS.CHOOSEN_PROFILE.replace(
                                ":province",
                                item.province_id.toString()
                            ).replace(":id", item.id.toString())}
                            state={{ data: item }}
                        >
                            <div className="bg-white p-2">
                                <img
                                    className="w-full h-full object-cover"
                                    src={item?.image_url}
                                    alt=""
                                />
                                <h6 className="text-sm mt-2">{item?.code}</h6>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
