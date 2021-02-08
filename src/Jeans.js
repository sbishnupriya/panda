import React from "react";
import './Jeans.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";



const Jeans = () =>{

	const product = [{name:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1320929/2019/5/31/bd91806e-374d-47df-b231-c296643dd2841559282905641-WROGN-Men-Black-Slim-Fit-Mid-Rise-Jeans-7121559282904321-1.jpg"},
	{name:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2948543/2018/3/30/11522394099790-HIGHLANDER-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-5171522394099590-1.jpg"},
	{name:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11165276/2020/10/7/d33366c5-9ff0-4cd2-84f8-e11c4b58d10d1602061445398-Levis-Men-Jeans-241602061442891-1.jpg"},
	{name:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2338117/2018/6/8/025567e2-fbd4-458c-9a9e-b6bf87c93ea21528439352858-WROGN-Men-Jeans-7621528439351309-1.jpg"}]

	return(

		<div>

	<Header />
		<Sidebar />
		
		<div className="container-fluid" style={{ marginLeft:"6cm", width:'83%' }}>

		<div className="row">

		{
          		product.map((d, index) => (

		<div className="col-sm-3">

		<div className="card">

		<div className="card-body">
		<img className="image" src={d.name}/>

		</div>

		</div>
		<div className="productInfo">
		<div className="productBrand">WRONG</div>
		<div className="productName">Men Slim Fit Jeans</div>
		<div className="productPrice"><span>
		<span className="discountPrice"> Rs. 1199</span>
		<span className="realPrice"> <del>Rs 2399</del> </span>
		</span>
		<span className="discount"> (50% Off) </span>
		</div>

		</div>

		</div>

		))

	}

		</div>

		</div>
		</div>



		
);

	
}

export default Jeans;