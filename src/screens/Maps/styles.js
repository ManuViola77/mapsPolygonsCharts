import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/common';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  centerContainer: (left = 0, top = 0) => ({
    alignItems: 'center',
    position: 'absolute',
    left,
    top,
    zIndex: 1000,
  }),
  value: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    backgroundColor: '#041727',
    resizeMode: 'contain',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  referenceBar: {
    position: 'absolute',
    bottom: 222,
    left: 40,
  },
  referenceValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  referenceText: {
    color: 'white',
    fontWeight: '800',
  },
});

export default styles;
