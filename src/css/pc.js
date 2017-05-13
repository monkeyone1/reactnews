import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'logo': {
    'alignItems': 'center',
    'display': 'flex'
  },
  'logo img': {
    'width': [{ 'unit': 'px', 'value': 48 }],
    'height': [{ 'unit': 'px', 'value': 48 }]
  },
  'logo span': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'footer': {
    'textAlign': 'center'
  },
  'container': {
    'paddingTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'leftContainer': {
    'width': [{ 'unit': 'px', 'value': 400 }],
    'float': 'left'
  },
  'carousel': {
    'width': [{ 'unit': 'px', 'value': 400 }],
    'float': 'left'
  }
});
