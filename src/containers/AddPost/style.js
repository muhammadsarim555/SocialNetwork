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
  profileImage: {
    alignItems: 'center',
    width: 110,
    height: 110,
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },

  bodyContainer: {flex: 1},
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  profileThumnail: {
    borderColor: 'green',
    borderWidth: 2,
    alignSelf: 'center',
    margin: 30,
    width: 120,
    height: 120,
    justifyContent: 'center',
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
