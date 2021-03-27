import React, {useEffect} from 'react';
import {View} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Orientation from 'react-native-orientation-locker';

const Player = () => {
  useEffect(() => {
    Orientation.lockToLandscapeLeft();

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <View>
      <VideoPlayer
        video={require('../../../assets/bears.mp4')}
        customStyles={{controls: {marginTop: -80}}}
      />
    </View>
  );
};

export default Player;
