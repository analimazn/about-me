import React from 'react'
import { CustomLabel } from './CustomLabel'
import { VictoryPie } from 'victory';

export class SkillsGraphic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: this.props.skills
    }
  }
  render() {
    return (
      <div 
        className="container" 
        style={{width: "100%"}}
      >
        <VictoryPie
          style={{ labels: { fill: "#444243" } }}
          colorScale={["#CD5C5C", "#F08080", "#FA8072", "#E9967A", "#FFA07A"]}
          padAngle={3}
          innerRadius={100}
          labelRadius={115}
          labels={(d) => d.x}
          labelComponent={ <CustomLabel/> }
          data={ this.state.skills.map(skillName => {
            return ({ 
              x: skillName.technologie, 
              y: skillName.percentage 
            })
          }) }
        />
      </div>
    )
  }
}