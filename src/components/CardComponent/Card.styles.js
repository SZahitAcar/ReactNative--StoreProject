import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    width: 170,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#ffecb3',
  },
  image: {
    minWidth: 150,
    minHeight: 160,
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
});
