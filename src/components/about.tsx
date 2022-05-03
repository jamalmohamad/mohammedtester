import { Button } from "react-bootstrap"
import { ABOUT_DESCRIPTION } from "../utils/constants"

export function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h5 className="h-spaces">Hello and Welcome</h5>        
                      <p className="h-spaces">{ABOUT_DESCRIPTION}</p>
                </div>
            </div>

        </div>
    )
}