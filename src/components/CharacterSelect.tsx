import React from "react";

type Props = {
  characters: string[];
  onChange;
}

export const CharacterSelect = (props: Props) => {
  const handleOnChange = (e) => {
    props.onChange(e.target.value);
  }
  return (
    <div>
      <span>Character:</span>
      <select onChange={handleOnChange}>
        { props.characters.map(c => { return <option>{c}</option> }) }
      </select>
    </div>
  )
}