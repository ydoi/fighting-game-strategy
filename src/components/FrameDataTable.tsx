import React from "react";

import "./FrameDataTable.css";

export type SkillData = {
  name: string;
  command: string;
  damage: number;
  // gauge: number;
  generateFrame: number;
  continuousFrame: number;
  stiffnessFrame: number;
  hitFrame: number;
  guardFrame: number;
  passiveFrame: number;
  backPassiveFrame: number;
}

type Props = {
  skillDatas: Array<SkillData>
}

export const FrameDataTable = (props: Props) => {
  const frameWidth = (frame) => {
    return {
      width: `${frame * 7}px`,
    };
  };
  return (
    <table className="FrameDataTable__table">
      <tr>
        <th className="FrameData__table-th--name">技名</th>
        {/* <th>属性</th> */}
        <th className="FrameData__table-th--command">コマンド</th>
        <th className="FrameData__table-th--number">ダメージ</th>
        {/* <th>スタン値</th> */}
        {/* <th>ゲージ増加</th> */}
        {/* <th>キャンセル</th> */}
        <th className="FrameData__table-th--overall">全体フレーム(発生/持続/硬直)</th>
        <th className="FrameData__table-th--number">ガード</th>
        <th className="FrameData__table-th--number">ヒット</th>
        {/* <th>Vトリガーキャンセル硬直差</th> */}
        {/* <th>Vトリガーヒット硬直差</th> */}
        <th className="FrameData__table-th--number">前受け身</th>
        <th className="FrameData__table-th--number">後ろ受け身</th>
      </tr>
      { props.skillDatas.map(s =>
        {
          return (
            <tr>
              <td>{ s.name }</td>
              <td>{ s.command }</td>
              <td className="FrameData__table-td--number">{ s.damage || '' }</td>
              {/* <td>{ s.gauge }</td> */}
              <td>
                <div className="Overall-frame__container">
                  <div className="FrameData__table-span--generate" style={ frameWidth(s.generateFrame) }>{ s.generateFrame || '' }</div>
                  <div className="FrameData__table-span--continuous" style={ frameWidth(s.continuousFrame) }>{ s.continuousFrame || '' }</div>
                  <div className="FrameData__table-span--stiffness" style={ frameWidth(s.stiffnessFrame) }>{ s.stiffnessFrame || '' }</div>
                </div>
              </td>
              <td>{ s.guardFrame || '' }</td>
              <td>{ s.hitFrame || '' }</td>
              <td>{ s.passiveFrame || ''}</td>
              <td>{ s.backPassiveFrame || '' }</td>
            </tr>
          )
        })
      }
    </table>
  )
}