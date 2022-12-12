import raw from '../data/7단원.txt';
import raw2 from '../data/8단원.txt';
import raw3 from '../data/9단원.txt';
import raw4 from '../data/10단원.txt';
import raw5 from '../data/11단원.txt';
import raw6 from '../data/12단원.txt';
import { fetchTxt } from '../lib/fetchTxt';
import BtnGroup from './BtnGroup';
import { useState } from "react";
import { getRandomEval } from '../lib/getRandomEval';

const MainTemplate = () => {
    const [result,setResult] = useState(['처음값']);
    let period = 6;
    const test = fetchTxt(raw);
    const test2 = fetchTxt(raw2);
    const test3 = fetchTxt(raw3);
    const test4 = fetchTxt(raw4);
    const test5 = fetchTxt(raw5);
    const test6 = fetchTxt(raw6);



    const text = []

    text.push(test);
    text.push(test2);
    text.push(test3);
    text.push(test4);
    text.push(test5);
    text.push(test6);

    const [btnToggle,setBtnToggle] = useState([false,false,false,false,false,false,]);

    const onClick = (e, text,btnToggle) => {
        let tmp = getRandomEval(e, text, btnToggle)
        setResult(tmp);
        navigator.clipboard.writeText(tmp); 
    };

    return(
        <div>
            {/* <button onClick={()=>{console.log(test)}}>test</button> */}
            <BtnGroup btnToggle={btnToggle} setBtnToggle={setBtnToggle}/>
            <button onClick={(e)=>{onClick(e, text, btnToggle)}}>생성 및 복사</button>
            {result.join(' ')}
        </div>
    )
}

export default MainTemplate;