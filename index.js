import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  asset
} from "react-360";

export default class Layout3d extends React.Component {
  state = {
    x: 0,
    y: 0,
    z: -2
  };

  increase = axis => {
    this.setState(prevState => ({
      ...prevState,
      [axis]: prevState[axis] + 0.1
    }));
  };
  decrease = axis => {
    this.setState(prevState => ({
      ...prevState,
      [axis]: prevState[axis] - 0.1
    }));
  };
  render() {
    return (
      <View
        style={{
          transform: [
            { translate: [this.state.x, this.state.y, this.state.z] }
          ],
          backgroundColor: "gray"
        }}
      >
        <VrButton onClick={() => this.increase("x")}>
          <Text>+ X ({this.state.x})</Text>
        </VrButton>
        <VrButton onClick={() => this.decrease("x")}>
          <Text>- X ({this.state.x})</Text>
        </VrButton>
        <VrButton onClick={() => this.increase("y")}>
          <Text>+ Y ({this.state.y})</Text>
        </VrButton>
        <VrButton onClick={() => this.decrease("y")}>
          <Text>- Y ({this.state.y})</Text>
        </VrButton>
        <VrButton onClick={() => this.increase("z")}>
          <Text>+ Z ({this.state.z})</Text>
        </VrButton>
        <VrButton onClick={() => this.decrease("z")}>
          <Text>- Z ({this.state.z})</Text>
        </VrButton>
        <Text
          style={{
            color: "black",
            backgroundColor: "pink"
          }}
        >
          Move me
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("layout-3d", () => Layout3d);
