import { useEffect, useState } from "react";
import { MIN , MAX } from "../constant";

const Progress = ({value = 0 , onComplete = () => {}}) =>{
    const [percentage, setPercentage] = useState(value);
    
    useEffect(()=>{
       setPercentage(Math.min(MAX,Math.max(value,MIN)));
       if(value >= MAX){
        onComplete();
       }
    },[value])

    return (
        <div className="progressBar">
            <span>{percentage.toFixed()}%</span>
            <div role="progressbar" 
            aria-valuemin={MIN}
            aria-valuemax={MAX}
            aria-valuenow={percentage.toFixed()}
            style={{width: `${percentage}%`}}/>
        </div>
    );
}

export default Progress;