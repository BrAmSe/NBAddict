///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React, {Component} from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './styles';
import OpenMenuButton from './OpenMenuButton';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

///////////////////////////////////////////////////////////////
// INTERFACES
///////////////////////////////////////////////////////////////
export interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

///////////////////////////////////////////////////////////////
// MAIN COMPONENT
///////////////////////////////////////////////////////////////
class Layout extends Component<Props> {

  ///////////////////////////////////////////////////////////////
  // FUNCTIONS
  ///////////////////////////////////////////////////////////////
  getTopBarTitle(): string {
    return "NBADDICT";
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  renderTemplate() : JSX.Element | never {
    throw new Error("Undefined method renderTemplate for template!");
  }

  renderTopBar(){
    return(
      <Header
        containerStyle={{ marginTop: ((StatusBar.currentHeight || 0) * -1) }}
        leftComponent={<OpenMenuButton onPress={this.props.navigation.openDrawer}></OpenMenuButton>}
        centerComponent={{ text: this.getTopBarTitle(), style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      >
      </Header>
    );
  }

  render() {
    return(
      <View style={styles.container}>
        {this.renderTopBar()}
        <ScrollView
          bounces={false}
          bouncesZoom={false}
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
        >
          {this.renderTemplate()}
        </ScrollView>
      </View>
    );
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default Layout;