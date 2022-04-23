import { Button } from "react-bootstrap"
import { ABOUT_DESCRIPTION } from "../utils/constants"

export function About() {
    return (
        <div className="container about">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="h-spaces">Hello and Welcome</h3>        
                      <h6 className="h-spaces">{ABOUT_DESCRIPTION}</h6>
                </div>
                <div className="col-md-12">
                    <Button className="btn btn-success">Contact </Button>
                    
                </div>
                

            </div>

        </div>
    )
}