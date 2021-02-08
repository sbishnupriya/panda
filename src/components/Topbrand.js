
import Brand from "./Brand";

const Topbrand = (props) =>{
  const imagebasepath = "https://assets.myntassets.com/"
  const brands = [{name :",c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/21/6d217117-eb76-46d6-ad58-c4db849472a51611228262874-redtape.jpg"},
  {name :"w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/22/d53af459-8cac-4c8a-bb3b-7742b17b511e1611321202139-addidas-reebok.jpg"},
  {name :"w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/22/f30daa5e-236b-4542-be46-400e5f5871511611321202118-dressberry.jpg"},
  {name :"w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/22/e2726401-186a-40bf-819b-b25b8236dc941611321202101-w-vishudh.jpg"},
  {name :"w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/22/72fabe90-aa98-46f1-b472-b8f3d7df11f51611321202084-pantaloons.jpg"}];
  const googly = [{name :"w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/18/e41f3f74-ea4c-4566-8673-563e2a8253231610987087890-PUMA.jpg"},
{name :"w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/19/a3d48cec-34b5-44e9-9c40-52e68b2a2df21611015894444-Fossil_HPTop_20Jan21.jpg"},
{name :"w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/18/5030f497-d2c6-4d63-9468-ba8165dd2bd51610954267567-HP_Tiles.jpg"},
  {name :"w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/19/72525849-1135-4077-97d7-2a58270ab53a1611026816266-Maybeline-HP_Top-Tile-20-Jan.jpg"},
  {name :"w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/1/18/9d1fb312-fe33-4177-b8d2-414b7e20e8d51610987087874-Louis.jpg"}];

	return(

        <div>


               <Brand data={brands} bannerName={"Biggest brand product"} Banner={imagebasepath} />
              <Brand data={googly} bannerName={"Top more product"} Banner={imagebasepath} />


     </div>
        

           
        
		);
}

export default Topbrand;