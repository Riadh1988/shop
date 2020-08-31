import React from 'react';

function Title ({title}) {
      
        return ( 
            <div className="row">
                <div className="col-10 mx-auto text-center">
                    <h1>{title}</h1>
                </div>
            </div>
         );
    
}
 
export default Title;