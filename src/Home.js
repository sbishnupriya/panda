import React from "react";
import './Styles.css';

import Header from "./components/Header";
import Topbrand from "./components/Topbrand";


class  Home extends React.Component{
	render(){
			return(
<div>

        
<Header />

		 <div>
        <div className="container-fluid">
          

      <Topbrand />
         


         
          
        </div>
      </div>
      </div>
		);
	}
}
export default Home;