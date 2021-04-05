import React, {useEffect} from 'react';
import {BackHandler, View} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Orientation from 'react-native-orientation-locker';

const Player = () => {
  useEffect(() => {
    Orientation.lockToLandscapeLeft();

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        Orientation.lockToPortrait();
      },
    );

    return () => {
      backHandler.remove();
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <View>
      <VideoPlayer
        autoplay
        video={require('../../../assets/bears.mp4')}
        customStyles={{controls: {marginTop: -80}}}
      />
    </View>
  );
};

export default Player;
