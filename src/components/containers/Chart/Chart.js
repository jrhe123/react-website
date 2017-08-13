import React, { Component } from 'react';

// styled-component
import {
	ChartDiv,
	ChartFormDiv
} from './Chart.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';


// Libraries
import AlertContainer from 'react-alert'

import { HashLoader } from 'react-spinners';


// Chart.js
import {Bar, Line, Pie} from 'react-chartjs-2';




export default class Chart extends Component {

	constructor(props){
		super(props);

		this.state = {
			posting: true,
			chartData: {}
		}
	}

	componentWillMount(){
		this.getChartData();
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 1000
    	);
    }

    static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right',
		location: 'City'
	}

    getChartData(){
	    // Ajax calls here
	    this.setState({
	      chartData:{
	        labels: ['Toronto', 'Markham', 'NewMarket', 'RichmondHill', 'Cambridge', 'New Bedford'],
	        datasets:[
	          {
	            label:'Population',
	            data:[
	              617594,
	              181045,
	              153060,
	              106519,
	              105162,
	              95072
	            ],
	            backgroundColor:[
	              'rgba(255, 99, 132, 0.6)',
	              'rgba(54, 162, 235, 0.6)',
	              'rgba(255, 206, 86, 0.6)',
	              'rgba(75, 192, 192, 0.6)',
	              'rgba(153, 102, 255, 0.6)',
	              'rgba(255, 159, 64, 0.6)',
	              'rgba(255, 99, 132, 0.6)'
	            ]
	          }
	        ]
	      }
	    });
	}


  	render() {

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
    		
      		<ChartDiv>
        		<PageHeader>
        			<PageTitle>Chart Diagram</PageTitle>
        		</PageHeader>

        		<FadeInDiv>
	        	<ChartFormDiv>
	        		<PageDesc>EX: 0</PageDesc>
	        		<br/>
					<h2>Bar chart</h2>
					<Bar
			          data={this.state.chartData}
			          options={{
			            title:{
			              display:this.props.displayTitle,
			              text:'Largest Cities In Toronto',
			              fontSize:25
			            },
			            legend:{
			              display:this.props.displayLegend,
			              position:this.props.legendPosition
			            }
			          }}
			        />
			        	<br/>
			            <h2>Line chart</h2>

					    <Line
				          data={this.state.chartData}
				          options={{
				            title:{
				              display:this.props.displayTitle,
				              text:'Largest Cities In Toronto',
				              fontSize:25
				            },
				            legend:{
				              display:this.props.displayLegend,
				              position:this.props.legendPosition
				            }
				          }}
				        />

				        <br/>
				        <h2>Pie chart</h2>
				        <Pie
				          data={this.state.chartData}
				          options={{
				            title:{
				              display:this.props.displayTitle,
				              text:'Largest Cities In Toronto',
				              fontSize:25
				            },
				            legend:{
				              display:this.props.displayLegend,
				              position:this.props.legendPosition
				            }
				          }}
				        />
		        	
				</ChartFormDiv>
				</FadeInDiv>

	      </ChartDiv>
	      
    );
  }
}

const style = {

	loader: {
		position: "absolute",
		top: "43%",
		left: "47%"
	}
}