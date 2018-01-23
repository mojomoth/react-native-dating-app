import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class PushedScreen extends Component {
  render() {
    return (
      <View>
        <Text>Pushed</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PushedScreen);
