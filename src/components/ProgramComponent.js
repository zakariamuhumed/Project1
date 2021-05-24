import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


  function  RenderProgram({program}) {
        return(
            <div className="col-md-5 m-1">
                <Card>
                      <CardImg top src={program.image} alt={program.name} />
                      <CardBody>
                          <CardTitle>{program.name}</CardTitle>
                          <CardText>{program.description}</CardText>
                      </CardBody>
                  </Card>
            
            </div>
        );
    }
    function ProgramInfo(props){
        if(props.program){
            return(
                < div className="container">
                    <div className="row">
                        <RenderProgram program={props.program} />
                    </div>
                </div>    
            );
        }
        return <div />
    }


export default ProgramInfo;