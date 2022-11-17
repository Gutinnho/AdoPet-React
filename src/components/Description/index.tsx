import classNames from 'classnames';
import styled from 'styled-components';

import styles from './Description.module.scss';

interface Props{
	textColor: string,
	lhV_a: string,
	lhV_b: string,
	p1?: string,
	p2?: string	
}

const StyledDescription = styled.p`
	line-height: ${({lhV_a}: Props) => lhV_a}rem;
	@media (min-width: 768px){
		line-height: ${({lhV_b}: Props) => lhV_b}rem;
	}
`;	

function Description({textColor, lhV_a, lhV_b, p1, p2}: Props){
	var width = window.screen.width;
	const p1Actived = width > 768

	return(
		<div className={styles.paragraph}>
			<StyledDescription 
				textColor={textColor}
				lhV_a={lhV_a} 
				lhV_b={lhV_b} 
				className={classNames({
					[styles.p2]: true,
					[styles.blue]: textColor === 'blue',
					[styles.white]: textColor === 'white'
				})}
			>	
				{
					p1 != null && p1Actived ? (
						<>
							{p1}     {p2}
						</>
					) : (
						<>
							{p2}
						</>
					)
				}
			</StyledDescription>

		</div>
	);
}

export default Description;