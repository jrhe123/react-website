import React, { Component } from 'react';

// styled-component
import {
	MasonryDiv,
} from './Masonry.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';


// Libraries
import Masonry from 'react-masonry-infinite';
import shortid from 'shortid';


// style
import './Masonry.css';


export default class MasonryPage extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	      hasMore: true,
	      elements: this.generateElements(),
	    };
	}

	colors = ['#EC407A', '#EF5350', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#29B6F6', '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#827717', '#EF6C00'];

	heights = [180, 150, 70, 220, 110, 80];

	getRandomElement = array => array[Math.floor(Math.random() * array.length)];

	generateElements = () => [...Array(3).keys()].map(() => ({
	    key: shortid.generate(),
	    color: this.getRandomElement(this.colors),
	    height: `${this.getRandomElement(this.heights)}px`,
	}));

	loadMore = () => setTimeout(() => this.setState(state => ({
	    elements: state.elements.concat(this.generateElements()),
	})), 2500);



  	render() {

    	return (
      		<div style={{background:"#fff"}}>
      			<PageHeader>
      				<PageTitle>Animated Masonry</PageTitle>
      			</PageHeader>

      			<FadeInDiv>
      			<MasonryDiv>
      				<PageDesc>EX. 8</PageDesc>

      				<Masonry
			            className="masonry"
			            style={{background:"#fff"}}
			            hasMore={this.state.hasMore}
			            loader={
			              <div className="sk-folding-cube">
			                <div className="sk-cube1 sk-cube" />
			                <div className="sk-cube2 sk-cube" />
			                <div className="sk-cube4 sk-cube" />
			                <div className="sk-cube3 sk-cube" />
			              </div>
			            }
			            loadMore={this.loadMore}
			          >
			            {
			              this.state.elements.map(({ key, color, height }, i) => (
			                <div key={key} className="card" style={{ background: color, height }}>
			                  <h2>{i}</h2>
			                </div>
			              ))
			            }
			        </Masonry>
      			</MasonryDiv>
      			</FadeInDiv>

      		</div>
    	);
  	}
}

