import React, { Component } from 'react';
import imgr from '../images/threeDots-red.png'
import img from '../images/red-white rectangle.png'

class Image extends Component{

	render() {
	 	// return ("../images/" + this.props.folderName + "/" + this.props.folderName + this.props.idx)
	 	return(this.props.img)
	}

	/*render() {
	
	    return(
	    	<img id="image" className="img-responsive" src={this.bla}/>
	    );
	}*/
}

class Dot extends Component {

	constructor(props) {
	    super(props);
  	}
  	

	render() {
      return (
	    		<div className="row row-striped with-padding" id={this.props.id}>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<img className="threeDots" src={imgr}/>
								<h1 className="h1-dot">{this.props.headline}</h1>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<p className="paragraph-dot">{this.props.paragraph}</p>
								<img className="paragraphRectangle" src={img}/>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						{
							/*<Image idx={this.props.idx} folderName={this.props.headline}/>*/
							 <img id="image" class="img-responsive" src={this.props.img}/>
							// <img id="image" class="img-responsive" src=<Image />/>

					}

					</div>
				</div>
	    );
	 }
}

export default Dot;
