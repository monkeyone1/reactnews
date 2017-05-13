import React from 'react';
import {Row,Col} from 'antd';
import {Carousel} from 'antd';

import {Router, Route, Link, browserHistory} from 'react-router'

import carousel_1 from '../images/carousel_1.jpg';
import carousel_2 from '../images/carousel_2.jpg';
import carousel_3 from '../images/carousel_3.jpg';
import carousel_4 from '../images/carousel_4.jpg';
export default class MobileList extends React.Component {
	constructor() {
		super();
		this.state = {
			news: ''
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
	};
	render() {
    const settings = {
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow:1,
        autoplay:true
    };

		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
        <section key={index} className="m_article list-item special_section clearfix">
          <Link to={`details/${newsItem.uniquekey}`}>
            <div className="m_article_img">
              <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
            </div>
            <div className="m_article_info">
              <div className="m_article_title">
                <span>{newsItem.title}</span>
              </div>
              <div className="m_article_desc clearfix">
                <div className="m_article_desc_l">
                  <span className="m_article_channel">{newsItem.realtype}</span>
                  <span className="m_article_time">{newsItem.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
			))
			: '没有加载到任何新闻';
		return (
			<div>
				 <Row>
           <Col span={24}>
            
          <Carousel {...settings}>
                  <div><img src={carousel_1}/></div>
                  <div><img src={carousel_2}/></div>
                  <div><img src={carousel_3}/></div>
                  <div><img src={carousel_4}/></div>
                </Carousel>
             {newsList}
           </Col>
         </Row>
			</div>
		);
	};
}
