import React, {useEffect} from "react";
const Timer = (props) => {
    useEffect(()=> {
        const timer = setInterval(()=>{
            console.log("타이머 실행중....");
        }, 1000); 
        
        // clear하지 않을 경우, 내부에선 오류
        return () => {
            clearInterval(timer);
            console.log("타이머가 종료되었습니다.");
        }
}, []);


    return(
    <div>
        <h2>타이머를 실행합니다.</h2>
    </div>
    );
};

export default Timer;

