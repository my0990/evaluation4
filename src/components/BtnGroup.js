import Button from "./commons/Button";


const BtnGroup = ({btnToggle,setBtnToggle}) => {
    
    const onClick = (idx) => {
        let tmp = [...btnToggle];
        tmp[idx] = !tmp[idx];
        setBtnToggle(tmp);
    }

    return(
        <div>
            {btnToggle.map((a,i)=>
                <Button 
                    key={i} 
                    style={{color: a == true ? 'red' : null}}
                    onClick={(e) => {onClick(i,e)}}
                >
                    {i+7}단원
                </Button>
            )}
            
        </div>
    )
}

export default BtnGroup;