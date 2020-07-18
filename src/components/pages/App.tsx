import React, { useState } from "react";

import { FrameDataTable, SkillData } from "../FrameDataTable";
import { CharacterSelect } from "../CharacterSelect";
import ryuData from "../../../data/json/ryu.json";
import kenData from "../../../data/json/ken.json";
import sethData from "../../../data/json/seth.json";
import alexData from "../../../data/json/alex.json";

let lineData: SkillData = {
  name: '',
  damage: null,
  generateFrame: null,
  continuousFrame: null,
  stiffnessFrame: null,
  hitFrame: null,
  guardFrame: null,
};

const getCharacterData = {
  'リュウ': ryuData,
  'ケン': kenData,
  'セス': sethData,
  'アレックス': alexData,
}

const generateProps = (character) => {
  const characterData= getCharacterData[character];
  return characterData.map((line, index) => {
    if (!line[0]) return lineData;
    if (index === 17) return lineData;
    return {
      name: line[0],
      command: line[1],
      damage: Number(line[7]),
      generateFrame: Number(line[2]),
      continuousFrame: Number(line[3]),
      stiffnessFrame: Number(line[4]),
      hitFrame: Number(line[5]),
      guardFrame: Number(line[6]),
      passiveFrame: Number(line[15]),
      backPassiveFrame: Number(line[16]),
    }
  });
}

export const App = () => {
  const [character, setCharacter] = useState('リュウ');
  return (
    <div>
      <h1>Fighting Game Strategy</h1>
      <CharacterSelect characters = { ['リュウ', 'ケン', 'セス', 'アレックス'] } onChange = { (selected) => setCharacter(selected) } />
      <FrameDataTable skillDatas = { generateProps(character) } />
    </div>
  );
};