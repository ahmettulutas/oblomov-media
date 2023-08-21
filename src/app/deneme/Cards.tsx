"use client";
import Card from "./Card";

export type CardType = {
  projectNumber: string;
  title: string;
  description: string;
}


const mockData: Array<CardType> = [
  {
    "projectNumber": "Project #1",
    "title": "Title of Project 1",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
  },
  {
    "projectNumber": "Project #2",
    "title": "Title of Project 2",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
  },
  {
    "projectNumber": "Project #3",
    "title": "Title of Project 3",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
  },
  {
    "projectNumber": "Project #4",
    "title": "Title of Project 4",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
  },
  {
    "projectNumber": "Project #5",
    "title": "Title of Project 5",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
  },
  {
    "projectNumber": "Project #6",
    "title": "Title of Project 6",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
  },
  {
    "projectNumber": "Project #7",
    "title": "Title of Project 7",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
  }
];

const OverlappingCards = () => {
  return (
    <div className="wrapper">
      {mockData.map((item, idx) =>
        <Card item={item} key={idx} index={idx} />
      )}
    </div>
  );
};
export default OverlappingCards;