import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchTest } from '../store/actions';

class FirstTabScreen extends Component {
  render() {
    return (
      <View>
        <Text>First Tab</Text>
        <Text>{this.props.test}</Text>
        <Button title="button" onPress={this.props.fetchTest} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test,
});

const mapDispatchToProps = dispatch => ({
  fetchTest: () => dispatch(fetchTest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstTabScreen);
