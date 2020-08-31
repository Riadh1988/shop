import React, { Component } from 'react'; 


class Banner extends Component {
   
    render() { 
        return (  
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="banner__inner">
                            <div className="banner__inner__left">
                                <div className="intro-text">
                                    <h1>Give Your Workout A New Style</h1>
                                    <p>
                                        Success isn't always about greatness. It's about consistency. 
                                        Consistent hard work gains Success. Greatness will come .
                                    </p>
                                </div>
                                <div className="cta">
                                    <button className="cta-select">Explore Now</button>
                                    <button className="cta-add">Add To Cart</button>
                                </div>
                            </div>
                            <div className="banner__inner_right">
                                <img src={window.location.origin + "/img/image1.png" } alt="banner"/>
                            </div>
                        </div>
                    </div>
                </div> 
            </section> 
         );
    }
}
 
export default Banner;