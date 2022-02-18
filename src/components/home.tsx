import { Introduction } from "../utils/introduction";
import { About } from "./about";
import { Automation } from "./automation";

export function Home() {
    return (
        <div className="">
            <Introduction></Introduction>
            {/* <About></About> */}
            <Automation></Automation>
        </div>
    );
}

