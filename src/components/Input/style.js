import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 18,
  },
  bodyContainer: {flex: 1},
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  profileThumnail: {
    backgroundColor: 'green',
    alignSelf: 'center',
    margin: 30,
    width: 130,
    height: 130,
    alignItems: 'stretch',
    borderRadius: 100,
  },

  inputBar: {
    backgroundColor: 'green',
    padding: 30,
    margin: 30,
  },
});
