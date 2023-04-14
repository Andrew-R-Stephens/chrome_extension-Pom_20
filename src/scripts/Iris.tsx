import React, {Fragment} from "react";
import {useEffect} from "react";
import {webgazer} from "./webgazer/webgazer";

function Iris() {

    useEffect(()=>{
        webgazer.setGazeListener(function(data:any, elapsedTime:any) {
            if (data == null) {
                return;
            }
            var xprediction = data.x; //these x coordinates are relative to the viewport
            var yprediction = data.y; //these y coordinates are relative to the viewport

            console.log(data, elapsedTime); //elapsed time is based on time since begin was called
        }).begin();
    })

    return (
        <Fragment>

        </Fragment>
    )

}

export default Iris;