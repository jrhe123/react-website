import React, { Component } from 'react';

// styled-component
import {
	MotionDiv,

} from './Motion.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';



// Libraries
import {
	Motion as M, 
	spring
} from 'react-motion';
import range from 'lodash.range';


import { HashLoader } from 'react-spinners';


// style
import './Motion.css';



export default class Motion extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      posting: true,
	      topDeltaY: 0,
	      mouseY: 0,
	      isPressed: false,
	      originalPosOfLastPressed: 0,
	      order: range(itemsCount),
	    };
	};

	componentDidMount() {
	    window.addEventListener('touchmove', this.handleTouchMove);
	    window.addEventListener('touchend', this.handleMouseUp);
	    window.addEventListener('mousemove', this.handleMouseMove);
	    window.addEventListener('mouseup', this.handleMouseUp);

	    setTimeout(() => {
    		this.setState({posting: false}); }, 1000
    	);
	};

	handleTouchStart = (key, pressLocation, e) => {
	    this.handleMouseDown(key, pressLocation, e.touches[0]);
	};

	handleTouchMove = (e) => {
	    e.preventDefault();
	    this.handleMouseMove(e.touches[0]);
	};

	handleMouseDown = (pos, pressY, {pageY}) => {
	    this.setState({
	      topDeltaY: pageY - pressY,
	      mouseY: pressY,
	      isPressed: true,
	      originalPosOfLastPressed: pos,
	    });
	};

	handleMouseMove = ({pageY}) => {
	    const {isPressed, topDeltaY, order, originalPosOfLastPressed} = this.state;

	    if (isPressed) {
	      const mouseY = pageY - topDeltaY;
	      const currentRow = clamp(Math.round(mouseY / 100), 0, itemsCount - 1);
	      let newOrder = order;

	      if (currentRow !== order.indexOf(originalPosOfLastPressed)){
	        newOrder = reinsert(order, order.indexOf(originalPosOfLastPressed), currentRow);
	      }

	      this.setState({mouseY: mouseY, order: newOrder});
	    }
	};

	handleMouseUp = () => {
	    this.setState({isPressed: false, topDeltaY: 0});
	};




  	render() {

  		const {mouseY, isPressed, originalPosOfLastPressed, order} = this.state;

  		if(this.state.posting){
 			return (
 				<div style={style.loader}>
 					<HashLoader
 					  size={100}
			          color={'#2980b9'} 
			          loading={this.state.posting} 
			        />
 				</div>
 			)
 		}

    	return (
    		<div style={{background:"#fff"}}>
	    		<PageHeader>
	    			<PageTitle>Motion Draggable</PageTitle>
	    		</PageHeader>
	    		<FadeInDiv>
	    		<MotionDiv>
	    			<PageDesc>Ex. 3</PageDesc>

		    		<div>
				        {range(itemsCount).map(i => {
				          const style = originalPosOfLastPressed === i && isPressed
				            ? {
				                scale: spring(1.1, springConfig),
				                shadow: spring(16, springConfig),
				                y: mouseY,
				              }
				            : {
				                scale: spring(1, springConfig),
				                shadow: spring(1, springConfig),
				                y: spring(order.indexOf(i) * 100, springConfig),
				              };
				          return (
				            <M style={style} key={i}>
				              {({scale, shadow, y}) =>
				                <div
				                  onMouseDown={this.handleMouseDown.bind(null, i, y)}
				                  onTouchStart={this.handleTouchStart.bind(null, i, y)}
				                  className="draggable-item"
				                  style={{
				                    boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
				                    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
				                    WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
				                    zIndex: i === originalPosOfLastPressed ? 99 : i,
				                  }}>
				                  {order.indexOf(i) + 1}
				                </div>
				              }
				            </M>
				          );
				        })}
				    </div>


			    </MotionDiv>
			    </FadeInDiv>
		    </div>
    	);
 	}
}


function reinsert(arr, from, to) {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}

const springConfig = {stiffness: 300, damping: 50};
const itemsCount = 3;


const style = {

	loader: {
		position: "absolute",
		top: "43%",
		left: "47%"
	}
}