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
  },
  'section': {
    'background': '#f6f6f6'
  },
  'm_separate': {
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.3 }],
    'background': '#f6f6f6',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'm_article': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.3 }]
  },
  'm_article m_article_img': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.27 }],
    'height': [{ 'unit': 'rem', 'value': 1.4 }],
    'overflow': 'hidden',
    'position': 'relative',
    'marginRight': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'm_article m_article_img m_article_mark': {
    'color': '#fff',
    'background': '#5da3e9',
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.04 }, { 'unit': 'rem', 'value': 0.04 }, { 'unit': 'rem', 'value': 0.04 }, { 'unit': 'rem', 'value': 0.04 }],
    'position': 'absolute',
    'display': 'inline-block',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'rem', 'value': 0.4 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.4 }],
    'opacity': '.9'
  },
  'm_article m_article_img img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'minHeight': [{ 'unit': 'rem', 'value': 1.4 }]
  },
  'm_article m_article_desc m_article_channel': {
    'display': 'inline-block',
    'color': 'rgba(255,51,51,0.9)',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 12 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.1 }],
    'background': 'url(http://img2.cache.netease.com/f2e/wap/common/images/border_red.png) no-repeat',
    'backgroundSize': '100% 100%'
  },
  'm_article m_article_desc m_article_time': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'color': '#888',
    'display': 'inline-block'
  },
  'm_article m_article_desc m_article_desc_l': {
    'float': 'left'
  },
  'm_article m_article_desc m_article_desc_r': {
    'float': 'right',
    'backgroundSize': 'contain',
    'backgroundPosition': 'left 0',
    'backgroundRepeat': 'no-repeat',
    'color': '#888',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.37 }]
  },
  'm_article m_article_desc m_article_desc_r iconfont': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }],
    'color': '#a8a8a8'
  },
  'm_article m_article_info': {
    'overflow': 'hidden',
    'paddingBottom': [{ 'unit': 'px', 'value': 4 }]
  },
  'm_article m_article_info m_article_title': {
    'textAlign': 'left',
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'color': '#404040',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.42 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': '-webkit-box',
    'WebkitLineClamp': '2',
    'overflow': 'hidden',
    'WebkitLineBreak': 'auto',
    'WebkitBoxOrient': 'vertical'
  },
  'm_article m_article_hot': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.17 }],
    'float': 'left',
    'height': [{ 'unit': 'rem', 'value': 0.42 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'm_article m_article_hot m_article_hot_icon': {
    'color': '#fff',
    'background': '#4c9aea',
    'borderRadius': '.5rem',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.05 }, { 'unit': 'rem', 'value': 0.05 }, { 'unit': 'rem', 'value': 0.05 }, { 'unit': 'rem', 'value': 0.05 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.3 }],
    'width': [{ 'unit': 'rem', 'value': 1.11 }],
    'height': [{ 'unit': 'rem', 'value': 0.3 }],
    'float': 'left',
    'position': 'relative'
  },
  'm_article m_article_hot m_article_hot_icon:after': {
    'content': '""',
    'display': 'block',
    'position': 'absolute',
    'bottom': [{ 'unit': 'rem', 'value': -0.05 }],
    'right': [{ 'unit': 'rem', 'value': -0.04 }],
    'WebkitTransform': 'rotate(-45deg)',
    'MsTransform': 'rotate(-45deg)',
    'transform': 'rotate(-45deg)',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderRight': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderTop': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4c9aea' }]
  },
  'm_article m_article_hot m_article_hot_content': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.15 }],
    'float': 'left'
  },
  'm_article m_article_hot m_article_hot_content a': {
    'display': 'inline-block',
    'color': '#4c9aea',
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }],
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap',
    'width': [{ 'unit': 'rem', 'value': 5.5 }]
  },
  'm_article_m0': {
    'minHeight': [{ 'unit': 'rem', 'value': 1.4 }]
  },
  'm_article_m1': {
    'minHeight': [{ 'unit': 'rem', 'value': 1.4 }]
  },
  'm_article_m1 m_article_title': {
    'display': 'none'
  },
  'm_article_m1 m_article_img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'm_photoset m_photoset_title': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'color': '#404040',
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': '-webkit-box',
    'display': 'flex'
  },
  'm_photoset m_photoset_pic': {
    'margin': [{ 'unit': 'rem', 'value': 0.22 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.22 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block'
  },
  'm_photoset m_photoset_pic m_photoset_pic_wrap': {
    'overflow': 'hidden',
    'height': [{ 'unit': 'rem', 'value': 1.65 }]
  },
  'm_photoset m_photoset_pic m_photoset_pic_wrap img': {
    'width': [{ 'unit': '%H', 'value': 0.32 }],
    'float': 'left',
    'marginRight': [{ 'unit': '%H', 'value': 0.02 }],
    'display': 'inline-block',
    'minHeight': [{ 'unit': 'rem', 'value': 1.4 }]
  },
  'm_photoset m_photoset_pic m_photoset_pic_wrap img:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'm_photoset_square': {
    'background': '#fff',
    'width': [{ 'unit': 'rem', 'value': 3.35 }],
    'float': 'left',
    'margin': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#e3e3e3' }]
  },
  'm_photoset_square m_photoset_square_img': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden',
    'position': 'relative',
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'WebkitAnimation': 'imgload2 1s ease-out',
    'animation': 'imgload2 1s ease-out',
    'WebkitAnimationName': 'imgload2',
    'WebkitAnimationDuration': '1s',
    'WebkitAnimationTimingFunction': 'ease-out'
  },
  'm_photoset_square m_photoset_square_img img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'minHeight': [{ 'unit': 'rem', 'value': 2 }]
  },
  'm_photoset_squarepapa_item m_photoset_square_info m_photoset_square_title span': {
    'display': 'inline'
  },
  'm_photoset_squarepapa_item m_photoset_square_info m_photoset_square_title m_photoset_square_adflag': {
    'display': 'inline-block',
    'color': '#efd469',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 12 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.1 }],
    'background': 'url(http://img2.cache.netease.com/f2e/wap/common/images/border_yellow.png) no-repeat',
    'backgroundSize': '100% 100%'
  },
  'm_photoset_square m_photoset_square_info': {
    'padding': [{ 'unit': 'rem', 'value': 0.15 }, { 'unit': 'rem', 'value': 0.15 }, { 'unit': 'rem', 'value': 0.15 }, { 'unit': 'rem', 'value': 0.15 }],
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'boxSizing': 'border-box'
  },
  'm_photoset_square m_photoset_square_info m_photoset_square_title': {
    'color': '#555',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.15 }]
  },
  'm_photoset_square m_photoset_square_info m_photoset_square_title span': {
    'display': 'block',
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.42 }]
  },
  'm_photoset_square m_photoset_square_info m_photoset_square_desc': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'm_photoset_square m_photoset_square_info m_photoset_square_desc m_photoset_square_desc_l': {
    'float': 'left',
    'backgroundSize': 'contain',
    'backgroundPosition': 'left 0',
    'backgroundRepeat': 'no-repeat',
    'color': '#888',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.36 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }]
  },
  'm_photoset_square m_photoset_square_info m_photoset_square_desc m_photoset_square_desc_l iconfont': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }],
    'color': '#a8a8a8'
  },
  'm_photoset_square m_photoset_square_info m_photoset_square_desc m_photoset_square_desc_r': {
    'float': 'right',
    'backgroundSize': 'contain',
    'backgroundPosition': 'left 0',
    'backgroundRepeat': 'no-repeat',
    'color': '#888',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.36 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }]
  },
  'm_photoset_square m_photoset_square_info m_photoset_square_desc m_photoset_square_desc_r iconfont': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }],
    'color': '#a8a8a8'
  },
  'm_article_debate': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': '#eee'
  },
  'm_article_debate m_debate_title': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'color': '#404040',
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': '-webkit-box',
    'display': 'flex'
  },
  'm_article_debate m_debate_contents': {
    'margin': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }]
  },
  'm_article_debate m_debate_contents div': {
    'float': 'left'
  },
  'm_article_debate m_debate_contents debate_btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'borderRadius': '.5rem',
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }],
    'width': [{ 'unit': 'rem', 'value': 1.6 }],
    'textAlign': 'center',
    'background': '#fff'
  },
  'm_article_debate m_debate_contents debate_positive': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff9292' }],
    'color': '#f33'
  },
  'm_article_debate m_debate_contents debate_positive:active': {
    'background': '#ff9292',
    'color': '#fff'
  },
  'm_article_debate m_debate_contents debate_opposing': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9dcdff' }],
    'color': '#4c9aea'
  },
  'm_article_debate m_debate_contents debate_opposing:active': {
    'background': '#9dcdff',
    'color': '#fff'
  },
  'm_article_debate m_debate_contents debate_view': {
    'width': [{ 'unit': 'rem', 'value': 3.2 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }]
  },
  'm_article_debate m_debate_contents debate_view data_positive data': {
    'color': '#f33',
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'rem', 'value': 0.05 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.05 }, { 'unit': 'px', 'value': 0 }]
  },
  'm_article_debate m_debate_contents debate_view data_positive chart': {
    'background': '#f33',
    'height': [{ 'unit': 'rem', 'value': 0.2 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderBottomLeftRadius': '.25rem',
    'borderTopLeftRadius': '.25rem'
  },
  'm_article_debate m_debate_contents debate_view chart_wall': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.05 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.05 }],
    'height': [{ 'unit': 'rem', 'value': 0.8 }]
  },
  'm_article_debate m_debate_contents debate_view data_opposing data': {
    'color': '#4c9aea',
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'rem', 'value': 0.05 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.05 }, { 'unit': 'px', 'value': 0 }]
  },
  'm_article_debate m_debate_contents debate_view data_opposing chart': {
    'background': '#4c9aea',
    'height': [{ 'unit': 'rem', 'value': 0.2 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderTopRightRadius': '.25rem',
    'borderBottomRightRadius': '.25rem'
  },
  'm_article_debate m_debate_desc': {
    'lineHeight': [{ 'unit': 'rem', 'value': 0.5 }],
    'height': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'm_article_debate m_debate_desc m_debate_channel': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'height': [{ 'unit': 'rem', 'value': 0.24 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.24 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f33' }],
    'color': '#f33',
    'borderRadius': '4px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.04 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.04 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.32 }],
    'boxSizing': 'border-box'
  },
  'm_article_debate m_debate_desc m_debate_time': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'color': '#888',
    'display': 'inline-block'
  },
  'm_article_debate m_debate_desc m_debate_desc_l': {
    'float': 'left'
  },
  'm_papa': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.3 }]
  },
  'm_papa m_papa_img': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.27 }],
    'height': [{ 'unit': 'rem', 'value': 1.4 }],
    'overflow': 'hidden',
    'position': 'relative',
    'marginRight': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'm_papa m_papa_img img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'block'
  },
  'm_papa m_papa_desc m_papa_promote': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#555',
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'lineHeight': [{ 'unit': 'px', 'value': 12 }],
    'background': 'url(http://img2.cache.netease.com/f2e/wap/common/images/border_grey.png) no-repeat',
    'backgroundSize': '100% 100%'
  },
  'm_papa m_papa_desc m_papa_time': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.2 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'color': '#888',
    'display': 'inline-block'
  },
  'm_papa m_papa_desc m_papa_desc_l': {
    'float': 'left'
  },
  'm_papa m_papa_info': {
    'overflow': 'hidden'
  },
  'm_papa m_papa_info m_papa_title': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'textDecoration': 'none',
    'color': '#404040',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.42 }]
  },
  'm_papa m_papa_info a': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'textDecoration': 'none',
    'color': '#404040',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.42 }]
  },
  'm_papa_m0 m_papa_title': {
    'display': 'none'
  },
  'm_papa_m0 m_papa_img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1.2 }]
  },
  'm_papa_m1 m_papa_title': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'color': '#404040'
  },
  'm_papa_m1 m_papa_title m_papa_promote': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#555' }],
    'color': '#555',
    'borderRadius': '3px',
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'lineHeight': [{ 'unit': 'px', 'value': 12 }],
    'float': 'right'
  },
  'm_papa_m1 m_papa_pic': {
    'margin': [{ 'unit': 'rem', 'value': 0.22 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.22 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block'
  },
  'm_papa_m1 m_papa_pic m_papa_pic_wrap': {
    'height': [{ 'unit': 'rem', 'value': 1.66 }],
    'overflow': 'hidden'
  },
  'm_papa_m1 m_papa_pic m_papa_pic_wrap img': {
    'width': [{ 'unit': '%H', 'value': 0.32 }],
    'float': 'left',
    'marginRight': [{ 'unit': '%H', 'value': 0.02 }],
    'minHeight': [{ 'unit': 'rem', 'value': 1.4 }]
  },
  'm_papa_m1 m_papa_pic m_papa_pic_wrap img:last-child': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'm_papa_m2': {
    'background': '#eee',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'm_papa_m2 m_papa_content': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'color': '#4c9aea'
  },
  'm_papa_m2 m_papa_content a': {
    'color': '#4c9aea'
  },
  'm_papa_m2 m_papa_content a:active': {
    'color': '#4c9aea'
  },
  'm_papa_m2 m_papa_content a:visited': {
    'color': '#4c9aea'
  },
  'm_papa_m2 m_papa_content a:focus': {
    'color': '#4c9aea'
  },
  'm_papa_m2 m_papa_promote': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#555' }],
    'color': '#555',
    'borderRadius': '3px',
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }],
    'float': 'right',
    'height': [{ 'unit': 'px', 'value': 12 }],
    'lineHeight': [{ 'unit': 'px', 'value': 12 }]
  },
  'm_papa_iframe m_papa_iframe_wrap': {
    'height': [{ 'unit': 'rem', 'value': 1.4 }],
    'width': [{ 'unit': 'rem', 'value': 6.9 }],
    'overflow': 'hidden'
  },
  'm_papa_iframe iframe': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'm_papa_iframe_photoset m_papa_iframe_wrap': {
    'height': [{ 'unit': 'rem', 'value': 2.44 }],
    'width': [{ 'unit': 'rem', 'value': 6.9 }],
    'overflow': 'hidden'
  },
  'm_papa_iframe_photoset iframe': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'm_article_simple': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.3 }]
  },
  'm_article_simple m_article_channel': {
    'float': 'left',
    'marginRight': [{ 'unit': 'rem', 'value': 0.1 }]
  },
  'm_article_simple m_article_channel span': {
    'color': '#999',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.32 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.1 }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d2d2d2' }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'marginTop': [{ 'unit': 'rem', 'value': 0.08 }],
    'height': [{ 'unit': 'rem', 'value': 0.32 }],
    'display': 'block'
  },
  'm_article_simple m_article_info': {
    'overflow': 'hidden',
    'position': 'relative'
  },
  'm_article_simple m_article_title': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'color': '#404040',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.45 }],
    'width': [{ 'unit': 'rem', 'value': 5 }],
    'display': 'inline-block',
    'float': 'left'
  },
  'm_article_simple m_article_title_long': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'color': '#404040',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.42 }],
    'width': [{ 'unit': 'rem', 'value': 5.5 }],
    'display': 'inline-block',
    'float': 'left'
  },
  'm_article_simple m_article_desc': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'rem', 'value': 1.15 }]
  },
  'm_article_simple m_article_desc m_article_desc_r': {
    'backgroundSize': 'contain',
    'backgroundPosition': 'left 0',
    'backgroundRepeat': 'no-repeat',
    'color': '#888',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.42 }],
    'whiteSpace': 'nowrap'
  },
  'm_article_simple m_article_desc m_article_desc_r iconfont': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }],
    'color': '#a8a8a8'
  },
  'no_special special_section': {
    'display': 'none'
  },
  'm_bigimg m_bigimg_title': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'color': '#404040',
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': '-webkit-box',
    'display': 'flex'
  },
  'm_bigimg m_article_img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 2.3 }],
    'margin': [{ 'unit': 'rem', 'value': 0.22 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.22 }, { 'unit': 'px', 'value': 0 }]
  },
  'm_bigimg m_article_img img_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'absolute'
  },
  'm_bigimg m_article_img play-btn-video': {
    'width': [{ 'unit': 'rem', 'value': 1.2 }],
    'height': [{ 'unit': 'rem', 'value': 0.7 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'rem', 'value': -0.6 }],
    'marginTop': [{ 'unit': 'rem', 'value': -0.35 }],
    'display': 'block',
    'background': 'url(http://img2.cache.netease.com/f2e/wap/common_staging/images/icon_play.png) no-repeat',
    'backgroundSize': 'contain'
  },
  'm_split_line': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 0.2 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#e6e6e6' }, { 'unit': 'string', 'value': 'solid' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#e6e6e6' }, { 'unit': 'string', 'value': 'solid' }],
    'backgroundColor': '#eee'
  },
  'm_launch_special': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'rem', 'value': 7.5 }],
    'background': '#eee'
  },
  'm_launch_special m_launch_special_wrap': {
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.3 }],
    'background': '#f6f6f6',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#e6e6e6' }, { 'unit': 'string', 'value': 'solid' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#e6e6e6' }, { 'unit': 'string', 'value': 'solid' }]
  },
  'm_launch_special m_launch_special_title': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.34 }],
    'color': '#404040',
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': '-webkit-box',
    'display': 'flex'
  },
  'm_launch_special m_article': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'm_launch_special m_article:nth-child(4)': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'm_launch_special m_open_specail': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 0.63 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.63 }],
    'backgroundColor': '#eee',
    'color': '#4c9aea',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }]
  }
});
