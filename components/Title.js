import React from 'react';

export default function  Title({name,title,name1,title1,title2,name3,title3,name4,title4,title5,name6,title6}) {
    return (
        <div className="row">

            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-family-Trebuchet MS">
                    {name} {name1}  {name3}   {name4} {name6}
                    <strong className="text-blue">
                      {title}  {title1} {title2} {title3} {title4} {title5} {title6}
                    </strong>
                </h1>
            </div>              
               
        </div>
    )
}
