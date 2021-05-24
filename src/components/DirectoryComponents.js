import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function RenderDiretoryItem({program, onClick}) {
    return(
        <Card onClick={() => onClick(program.id)}>
        <CardImg width="100%" src={program.image} alt={program.name} />
        <CardImgOverlay>
            <CardTitle>{program.name}</CardTitle>

        </CardImgOverlay>    
    </Card>
    );

}

function Directory (props){
  const directory = props.programs.map(program => {
        return(
            <div key={program.id} className="col-md-5 m-1">
            <RenderDiretoryItem program={program} onClick={props.onClick} />

            </div>
        );
    });
    return(
        <div className="container">
            <div className="row">
                {directory}
            </div>


            
        </div>
    );

} 

export default Directory;