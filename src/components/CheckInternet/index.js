import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Alert, Dimensions} from 'react-native';

//
import Toast, {DURATION} from 'react-native-easy-toast';
import NetInfo from '@react-native-community/netinfo';

import styles from './style';

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Connection Available</Text>
    </View>
  );
}
function MiniOnlineSign() {
  return (
    <View style={styles.onlineContainer}>
      <Text style={styles.onlineText}>Internet Connection Available</Text>
    </View>
  );
}

class OfflineNotice extends PureComponent {
  state = {
    isConnected: true,
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
  }

  handleConnectivityChange = (isConnected) => {
    this.setState({isConnected});
  };

  render() {
    return (
      <View>
        {!this.state.isConnected ? <MiniOfflineSign /> : null}

        <Toast
          ref="toast"
          position="bottom"
          positionValue={110}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{color: 'white'}}
        />
      </View>
    );
  }
}

export default OfflineNotice;
