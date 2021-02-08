
import React from "react";
import './album.css';

class Album extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data1: [],
			expand: false,
			index: null,
			show: null,
			showall: false
		}
	}


	componentDidMount(){
		const url = "https://jsonplaceholder.typicode.com/photos";
		fetch(url)
		.then(result => result.json())
		.then(result => {
			
			this.setState({
				data1: result.slice(0, 20),
				data2: result.slice(0, 100),
				

			})
		})
	}



	 makeExpand = (index) => {
		this.setState({
			expand: !this.state.expand,
			index: index
		})
	}



	render(){
		let data = [];
		if(this.state.showall){
			data = this.state.data2;
		} else {
			data = this.state.data1;
		}


		return(
			<div>

			<div className="row">


			{

				data.map((a, index) =>(

				<div className="col-sm-2" style={{ marginBottom:"12px" }}>
			              <div className="card" >
			              <p style={{ position: "absolute" , top:"20px", marginLeft:"10px" , color:`${index%2 === 0 ? "green" : "red"}` }}>
			              {this.state.expand && this.state.index === index ? a.title : a.title.toUpperCase().slice(0, 10)}  
			               <span style={{textDecoration: "underline", cursor: "pointer" , color:"black" ,fontWeight: "bold", fontSize: "13px"}}
			               onClick={() => this.makeExpand(index)}>
			                {this.state.expand && this.state.index === index ? "view less" : "view more"} </span></p>
			                <div className="card-body" >
			                <img className="image" src={a.url} />

			                </div>
			              </div>
			            </div>


				))
		


			}


			</div>
			

			<div className="text-center">
			
			<button onClick={() => this.setState({showall: !this.state.showall})} >{this.state.showall  ? "show less" : "show more"}</button>

			

			
			</div>
			
				

		</div>

		);
}

}

export default Album;