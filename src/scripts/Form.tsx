import React, {Fragment} from "react";

function Form(): JSX.Element {

    function doClickThing(event: Event) {
        event.preventDefault()
        console.log("Do thing");
    }

    return (
        <Fragment>
            <form>
                <label>Name</label><input type={'text'} style={{width: "100px"}}/>
                <label>id</label><input type={"number"} min={0} max={10}/>
                <button onClick={(event)=>doClickThing}>Do thing</button>
            </form>
        </Fragment>
    );
}


export function otherForm():string {
    return "Hello";
}

export default Form;