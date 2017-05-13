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
  },
  'carousel img': {
    'width': [{ 'unit': 'px', 'value': 400 }],
    'height': [{ 'unit': 'px', 'value': 260 }]
  },
  'topNewsList': {
    'float': 'left',
    'textAlign': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'tabs_news': {
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 460 }],
    'float': 'left'
  },
  'topNewsList a': {
    'lineHeight': [{ 'unit': 'px', 'value': 22 }],
    'color': '#666'
  }
});
