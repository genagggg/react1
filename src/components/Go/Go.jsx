import React from "react";
let b=9;
class Go extends React.Component{

constructor(){
    super();
    this.state={name:[{id:1},
    {id:2},
{id:3}
]};
}
    
    gg(){
        return this.state.name.map(p=><p>{p.id}</p>)
    }
    
    render(){
        return (
            <div>
                <h1>{this.gg()}</h1>
            </div>
        )
    }
}

export default Go;