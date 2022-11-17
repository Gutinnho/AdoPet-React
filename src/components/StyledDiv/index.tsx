import styled from "styled-components"

import global from 'styles/_global.module.scss';

const StyledDiv = styled.div`
	background-color: ${props => (props.color !== '' ? props.color : 'white')};
`

interface Props{
	children: JSX.Element[]
	color: string;
}

function Div({children, color}: Props){
	return(
		<StyledDiv
			color={color}
			className={global.wrapper}
		>
			{children}
		</StyledDiv>
	);
}

export default Div;