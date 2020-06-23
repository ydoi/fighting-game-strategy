import React from "react";

import { FrameDataTable, SkillData } from "../FrameDataTable";
import ryuData from "../../../data/json/ryu.json";

let lineData: SkillData = {
  name: '',
  damage: null,
  generateFrame: null,
  continuousFrame: null,
  stiffnessFrame: null,
};

const generateProps = () => {
  return ryuData.map((line, index) => {
    if (!line[0]) return lineData;
    if (index === 17) return lineData;
    return {
      name: line[0],
      damage: Number(line[7]),
      generateFrame: Number(line[2]),
      continuousFrame: Number(line[3]),
      stiffnessFrame: Number(line[4]),
    }
  });
}

export const App = () => {
  // console.log(generateProps());
  return (
    <div>
      <h1>Fighting Game Strategy</h1>
      <FrameDataTable skillDatas = { generateProps() } />
    </div>
  );
};