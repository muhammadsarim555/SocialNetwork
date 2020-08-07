import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 18,
    color: 'white',
  },
  bodyContainer: {flex: 1},
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  profileThumnail: {
    borderColor: 'green',
    borderWidth: 2,
    alignSelf: 'center',
    margin: 30,
    width: 100,
    height: 100,
    alignItems: 'stretch',
    borderRadius: 100,
  },

  inputBar: {
    borderColor: 'green',
    borderWidth: 2,
    padding: 10,
    margin: 30,
    borderRadius: 5,
  },
  subFooter: {
    padding: 10,
    margin: 15,
  },
  checkBox: {flex: 1, paddingVertical: 10},
  txtContainer: {flexDirection: 'row', justifyContent: 'flex-start'},
});
