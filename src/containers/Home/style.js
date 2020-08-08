import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    backgroundColor: 'green',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTxt: {
    fontSize: 18,
    color: 'white',
  },
  bodyContainer: {flex: 1},
  inputContainer: {
    flex: 1,
  },

  inputBar: {
    borderColor: 'green',
    borderWidth: 2,
    width: width * 1,
    height: height * 0.6,
    margin: 30,
    alignSelf: 'center',
    borderRadius: 5,
  },
});
