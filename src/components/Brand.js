

const Brand = ({data,bannerName,Banner}) => {
	return(
		<div>
		<div className="bannerContainer">
            <h4 className="textBannerTitle">{bannerName}</h4>
            <h4 className="textBannerSubtitle" />
          </div>
          <div className="row">

          	{
          		data.map((d, index) => (
          				<div className="col">
			              <div className="card">
			                <div className="card-body"><img className="image" src={Banner+d.name} />
			                </div>
			              </div>
			            </div>
          		))
          	}


            </div>

            </div>

		);
}

export default Brand;