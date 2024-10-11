import React from "react";
import Slider from "../components/slider/Slider";
import ClassList from "../components/class/ClassList";
import TrainerList from "../components/trainer/TrainerList";

const Home = () => {
  return (
    <div>
      <Slider />
      <ClassList />
      <TrainerList />
    </div>
  );
};

export default Home;
