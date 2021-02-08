import './Sidebar.css';

const Sidebar = () =>{

	return(

		<div>
		<div className="sideNav">
		<div className="filter">Filter</div>
		<li className="itemList">
              <a className="itemLink" href="#">WOMEN</a>
            </li>
            <li className="itemList">
              <a className="itemLink" href="#">MEN</a>
            </li>
            <li className="itemList">
              <a className="itemLink" href="#">GIRL</a>
            </li>
            <li className="itemList">
              <a className="itemLink" href="#">BOYS</a>
            </li>
         <div className="brand">Brand</div>
         <li className="brandList">
              <a className="brandLink" href="#">Roadster</a>
            </li>
            <li className="brandList">
              <a className="brandLink" href="#">Wrong</a>
            </li>
            <li className="brandList">
              <a className="brandLink" href="#">Puma</a>
            </li>
            <li className="brandList">
              <a className="brandLink" href="#">Levis</a>
              </li>
              <li className="brandList">
              <a className="brandLink" href="#">Spykar</a>
            </li>
            <li className="brandList">
              <a className="brandLink" href="#">Flying Machine</a>
              </li>

         <div className="price">Price</div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> 299 to 999</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> 999 to 3999</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> 3999 to 7999</label><br><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> 7999 to 18999</label><br><br>
  <input type="submit" value="Submit">

            


		
		</div>
		</div>

		);
}

export default Sidebar;