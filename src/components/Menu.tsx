"use client";
import React, { useState } from 'react'
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from './MenuCard';
import menuData from '../data/food.json';

interface MenuItem {
  img: string;
  title: string;
  desc: string;
  price: string;
}

// Define a type for valid keys
type MenuDataKey = 'appetizers' | 'breakfast' | 'salads' | 'fish' | 'soup' | 'desert' | 'drinks';

// Use the defined type for the key in PropsType
interface PropsType {
  [key: string]: MenuItem[];
  appetizers: MenuItem[];
  breakfast: MenuItem[];
  salads: MenuItem[];
  fish: MenuItem[];
  soup: MenuItem[];
  desert: MenuItem[];
  drinks: MenuItem[];
}

const Menu = () => {
  const [items, setItems] = useState<MenuItem[]>(menuData.appetizers);
  const [active, setActive] = useState<MenuDataKey>('appetizers');
    const changeTab = (key: MenuDataKey) => {
      // filter data  based on key
      const filteredData: MenuItem[] = menuData[key];
      // update state
      setItems(filteredData);
      setActive(key);
    }
    const tabs = [
        { key: 'appetizers', title: 'Appetizers' },
        { key: 'breakfast', title: 'Breakfast' },
        { key: 'salads', title: 'Salads' },
        { key: 'fish', title: 'Fish' },
        { key: 'soup', title: 'Soup' },
        { key: 'desert', title: 'Desert' },
        { key: 'drinks', title: 'Drinks' },
    ]

  return (
    <div className='container pt-40'>
        <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-accent">Menu</span>
            </h2>
            <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
            <br />
            quidem esse eum animi?
            </p>
            <div className="w-fit mx-auto">
            <Dash />
            </div>
        </div>
        <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
            {tabs.map((tab: any) => (
              <li 
              key={tab.key}
              className={`cursor-pointer ${active === tab.key ? 'bg-accent text-white p-1 rounded-2xl px-2 font-bold' : ''}`}
              onClick={() => changeTab(tab.key)}
              >
                {tab.title}</li>
            ))}
        </ul>
        <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
                <div className="w-fit mx-auto">
                <Image
                    className="w-[100%] max-w-[400px] h-auto"
                    src="/menu_left.png"
                    width={500}
                    height={500}
                    alt="dish"
                />
                </div>

                <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
                {items.map((item, index) => (
                    <MenuCard
                    key={index}
                    img={item.img}
                    title={`item.title ${active}`}
                    desc={item.desc}
                    price={item.price}
                    />
                ))}
                </div>
      </div>
    </div>
  )
}

export default Menu