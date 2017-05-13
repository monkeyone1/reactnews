import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'fontSize': [{ 'unit': 'px', 'value': 50 }]
  },
  '#mobileheader': {
    'flex': '1',
    'background': '#f6f6f6'
  },
  '#mobileheader header': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2db7f5' }],
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  '#mobileheader header img': {
    'height': [{ 'unit': 'px', 'value': 50 }]
  },
  '#mobileheader header span': {
    'fontSize': [{ 'unit': 'px', 'value': 35 }],
    'verticalAlign': 'top',
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'color': '#2db7f5'
  },
  '#mobileheader i': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.5 }],
    'float': 'right',
    'marginRight': [{ 'unit': 'rem', 'value': 0.3 }],
    'marginTop': [{ 'unit': 'rem', 'value': 0.3 }],
    'color': '#2db7f5'
  }
});
