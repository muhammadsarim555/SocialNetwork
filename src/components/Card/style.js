import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export default StyleSheet.create({
  inputBar: {
    borderColor: 'green',
    borderWidth: 2,
    width: width * 1,
    height: height * 0.6,
    margin: 30,
    alignSelf: 'center',
    borderRadius: 5,
  },

  cardHeader: {
    padding: 10,
    backgroundColor: 'red',
  },
  cardBody: {
    flex: 1,
    backgroundColor: 'blue',
  },

  cardFooter: {
    padding: 15,
    backgroundColor: 'red',
  },
  cardDescription: {
    padding: 30,
    backgroundColor: 'green',
  },
});
