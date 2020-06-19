import React from "react";

import "./style.css";

type SkillData = {
  name: string;
  damage: number;
  gauge: number;
  generateFrame: number;
  continuousFrame: number;
  stiffnessFrame: number;
}

type Props = {
  skillDatas: Array<SkillData>
}

export const FrameDataTable = (props: Props) => {
  return (
    <table className="FrameDataTable__table">
      <tr>
        <th>技名</th>
        {/* <th>属性</th> */}
        {/* <th>コマンド</th> */}
        <th>ダメージ</th>
        {/* <th>スタン値</th> */}
        <th>ゲージ増加</th>
        {/* <th>キャンセル</th> */}
        <th>全体フレーム(発生/持続/硬直)</th>
        {/* <th>ガード硬直差</th> */}
        {/* <th>ヒット硬直差</th> */}
        {/* <th>Vトリガーキャンセル硬直差</th> */}
        {/* <th>Vトリガーヒット硬直差</th> */}
      </tr>
      { props.skillDatas.map(s =>
        {
          return (
            <tr>
              <td>{ s.name }</td>
              <td>{ s.damage }</td>
              <td>{ s.gauge }</td>
              <td>{ `${s.generateFrame} ${s.continuousFrame} ${s.stiffnessFrame}` }</td>
            </tr>
          )
        })
      }
    </table>
  )
}