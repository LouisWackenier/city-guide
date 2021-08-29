import React, { Component } from 'react';
import { InfoConsumer } from '../../context';

class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                   const {
                       id,
                       headerTitle,
                       headerSubTitle,
                       headerText,
                       img,
                       title,
                       maps,
                       description
                   } = data.detailInfo;
                   
                   return (
                      <React.Fragment>
                          <div className="container-fluid align-items-center">
                             <h1 className="display-1 font-weight-bold">{headerTitle}</h1> 
                             <h4 className="display-5">{headerSubTitle}</h4>
                             <p>{headerText}</p>
                             {/* Social Icons */}
                             <div className="container mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-2">
                                      <i className="fab fa-facebook-f"/> 
                                    </div>  
                                    <div className="col-2">
                                      <i className="fab fa-twitter"/> 
                                    </div> 
                                    <div className="col-2">
                                      <i className="fab fa-google-plus-g"/> 
                                    </div> 
                                    <div className="col-2">
                                      <i className="fab fa-reddit"/> 
                                    </div> 
                                    <div className="col-2">
                                      <i className="fab fa-whatsapp"/> 
                                    </div> 
                                    <div className="col-2">
                                      <i className="fab fa-facebook-messenger"/> 
                                    </div> 
                                </div> 
                             </div>
                          </div>   
                         {/* Nav Links */}
                         <div className="container">     
                            <ul className="nav nav-tabs">
                             {/* About Place Link */}    
                             <li className="nav-item"> 
                               <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">
                                  About Place</a> 
                            </li>
                            {/* Reviews Link */}    
                            <li className="nav-item"> 
                               <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">
                                   Reviews</a> 
                            </li>
                            {/* Map Link */}    
                            <li className="nav-item"> 
                               <a href="#map" className="nav-link" role="tab" data-toggle="tab">
                                  map</a> 
                            </li>
                          </ul>  
                          {/*Tab Panel*/}
                          <div className="tab-content mb-5">
                             {/*About place tab*/}
                             <div id="aboutPlace" className="tab-pane in active text-center mt-5" role="tabpanel">
                                 <h2 className="mb-3">{title}</h2>
                                 <p>{description}</p>
                                 <img src={img} alt={title} className="img-thumbnail img-fluid"/>
                             </div>
                          </div>    
                        </div>   
                      </React.Fragment>    
                   );

                }}
            </InfoConsumer>
        );
    }
}

export default Details;