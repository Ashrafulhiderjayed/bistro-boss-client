// import React from 'react';

import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        // Filter the data to only include popular items
        .then(data => {
        const popularItems = data.filter(item => item.catagory === 'popular');

        // Update the component's state with the filtered data
        setMenu(popularItems);
        });
    },[])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular-Item">
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;