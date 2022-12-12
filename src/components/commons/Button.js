import styled from 'styled-components';

const Btn = styled.button`
    
`


const Button = ({children, ...props}) => {
    return(
        <button {...props}>
            {children}
        </button>
    )
}

export default Button;