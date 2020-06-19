import React from "react";

import { FrameDataTable } from "../FrameDataTable";

export const App = () => {
  return (
    <div>
      <h1>Fighting Game Strategy</h1>
      <FrameDataTable skillDatas = { [ { name: '立ち小P', damage: 30, gauge: 20, generateFrame: 3, continuousFrame: 2, stiffnessFrame:　7 } ] } />
    </div>
  );
};