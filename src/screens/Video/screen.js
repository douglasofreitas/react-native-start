/* eslint-disable no-console */
import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import Video from 'react-native-video';

const URL_VIDEO_SAMPLE = 'https://r2---sn-aigzrner.googlevideo.com/videoplayback?expire=1568963300&ei=hCaEXbroF4ejmLAP7LyxsAM&ip=185.27.134.50&id=o-AE8_sz4n7N5tGjtmqR1OGRNZvVCFrPiKeTI7tFMk4p8s&itag=18&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-aigzrner%2Csn-5hnekn7k&ms=au%2Conr&mv=u&mvi=1&pl=23&mime=video%2Fmp4&gir=yes&clen=15855153&ratebypass=yes&dur=244.204&lmt=1527315903785732&mt=1568941277&fvip=2&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgHp2VWvdcEVCuZurpT1XYsxBb3t37XrhLMQft9KyNN9YCIQCz4eiVoRZt-yv2UAM9guBh-mypJdY1tjcip1OnUnODFA%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AHylml4wRAIgWmJNyBZcXQh7KWZATvGzs66OHL9zCiIMtPvJ0guXc2MCIAG1xhjp4co5Y3_wvVgjSf-IZqk54IyZDiS352m88daN';

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
          source={{ uri: URL_VIDEO_SAMPLE }}
          // eslint-disable-next-line react/no-unused-state
          // ref={(ref) => { this.setState({ player: ref }); }}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    );
  }
}

Screen.propTypes = {
  services: PropTypes.shape({
    firebase: PropTypes.shape({
      analytics: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

Screen.navigationOptions = {
  title: 'VIDEO',
};
