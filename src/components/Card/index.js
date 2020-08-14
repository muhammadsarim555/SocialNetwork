import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Feather';
import HeartIcon from 'react-native-vector-icons/dist/AntDesign';
import BookMarkIcon from 'react-native-vector-icons/Feather';
import ShareIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import SeeMore from 'react-native-see-more-inline';

import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AnimatedIcon = Animatable.createAnimatableComponent(HeartIcon);
const iconSize = 25;
const iconColor = 'green';

export default class Card extends React.Component {
  state = {
    liked: false,
    dataSource: [],
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: nextProps.data,
    });
  }

  handleLargeAnimatedIconRef = (ref) => {
    this.largeAnimatedIcon = ref;
  };

  handleSmallAnimatedIconRef = (ref) => {
    this.smallAnimatedIcon = ref;
  };

  pass = (value, ind) => {
    const {dataSource} = this.state;

    value.liked = value.liked ? false : true;
    value.total_likes = value?.liked
      ? value.total_likes + 1
      : value.total_likes - 1;

    // console.log('value.total_likes', value.total_likes);

    this.smallAnimatedIcon.bounceIn();
    this.props.onPress(value);

    this.setState((prevState) => ({liked: !prevState.liked, ...dataSource}));
  };

  passData = (value, ind) => {
    let array = [];
    let obj = {};

    this.pass(value, ind);
  };

  renderItem = (data, ind) => {
    let {liked} = this.state;

    let {item} = data;

    console.log('itemutme', item);

    return (
      <View style={styles.inputBar}>
        <View style={styles.cardHeader}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.profileThumbnail}>
              <Image
                source={{
                  uri: `http://192.168.1.101:8080/${item?.userId.profile_image}`,
                }}
                style={styles.profileThumbnail}
              />
            </View>
            <Text style={styles.profileUserName}>{item?.userId.firstName}</Text>
          </View>
          <Icon name="more-vertical" size={iconSize} color={iconColor} />
        </View>
        <View style={styles.cardBody}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.passData(item, data.index)}>
            <Image
              source={{
                uri: `http://192.168.1.101:8080/${item?.post_image}`,
              }}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.footerIconsContainer}>
            <TouchableOpacity onPress={() => this.passData(item, data.index)}>
              <AnimatedIcon
                ref={this.handleSmallAnimatedIconRef}
                name={item.liked ? 'heart' : 'hearto'}
                color={item.liked ? '#e92f3c' : iconColor}
                size={iconSize}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <ShareIcon
                name="comment-outline"
                size={iconSize}
                color={iconColor}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <ShareIcon
                name="share-outline"
                size={iconSize}
                color={iconColor}
              />
            </TouchableOpacity>
          </View>
          <BookMarkIcon name="bookmark" size={iconSize} color={iconColor} />
        </View>

        <View style={styles.cardDescription}>
          <Text style={styles.totalLikes}>{item.total_likes} Likes</Text>
          {/* <SeeMore numberOfLines={2}>
            {item?.caption ? item?.caption : null}
          </SeeMore> */}
        </View>
      </View>
    );
  };

  render() {
    const {liked, dataSource} = this.state;

    return (
      <ScrollView>
        <FlatList
          data={dataSource}
          renderItem={(item, index) => this.renderItem(item, index)}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    );
  }
}
