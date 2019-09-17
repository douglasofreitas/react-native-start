import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import Video from 'react-native-video';

export class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      player: null,
    };

    this.videoError = this.videoError.bind(this);
    this.onBuffer = this.onBuffer.bind(this);
  }

  componentDidMount() {
    const { services } = this.props;
    const { firebase } = services;
    firebase.analytics().setCurrentScreen('VIDEO');
    // firebase.analytics().setUserId('douglas');
  }

  /* VIDEO SAMPLE */
  // eslint-disable-next-line class-methods-use-this
  onBuffer(buffer) {
    console.log('onBuffer');
    console.log(buffer);
  }

  // eslint-disable-next-line class-methods-use-this
  videoError(err) {
    console.log('videoError');
    console.log(err);
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
        <Video
          source={{ uri: 'https://player.vimeo.com/video/360133232' }}
          // eslint-disable-next-line react/no-unused-state
          ref={(ref) => { this.setState({ player: ref }); }}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    );
  }
}

Screen.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
  services: PropTypes.shape({
    firebase: PropTypes.shape({
      analytics: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

Screen.navigationOptions = {
  title: 'VIDEO',
};
