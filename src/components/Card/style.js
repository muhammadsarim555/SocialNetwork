import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export default StyleSheet.create({
  inputBar: {
    width: width * 1,
    height: height * 0.6,
    margin: 30,
    alignSelf: 'center',
    borderRadius: 5,
  },

  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
  },
  profileThumbnail: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
  },

  profileUserName: {marginLeft: 10, alignItems: 'center', alignSelf: 'center'},
  cardFooter: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footerIconsContainer: {
    flexDirection: 'row',
    padding: 10,
    width: width * 0.4,
    justifyContent: 'space-between',
  },
  cardDescription: {
    height: height * 0.1,
    marginHorizontal: 20,
  },
  totalLikes: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageStyle: {
    width: width * 1,
    resizeMode: 'contain',
    height: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
