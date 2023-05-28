import React from "react";
import styled from "styled-components/native";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

// initialise the state for connection to props
// state parameter comes from the connect function
function mapStateToProps(state) {
  // this object becomes a props object to the component, it reassigns state value of redux to props
  return { action: state.action };
}

// dispatch parameter comes from the connect function
function mapDispatchToProps(dispatch) {
  return {
    // this object becomes a props object to the component
    // it's a function with dispatch function call
    closeMenu: () =>
      dispatch({
        // define the action with type for redux
        type: "CLOSE_MENU",
      }),
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = { top: new Animated.Value(screenHeight) }; // start value; from the hidden position

  // this listens to props changes from redux
  componentDidUpdate() {
    this.toggleMenu();
  }

  componentDidMount() {
    this.toggleMenu();
  }

  // this is called every time the menu show state is change
  toggleMenu = () => {
    // check redux to get the state
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 54, // end value; visible or final destination of the component
      }).start();
    }
    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight, // end value; hidden or final destination of the component
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Meng To</Title>
          <Subtitle>meng@designcode.io</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1,
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu); // connect state to props

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Container = styled.View`
  position: absolute;
  background: white;
  height: 100%;
  width: 100%;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings",
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments",
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course",
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!",
  },
];
