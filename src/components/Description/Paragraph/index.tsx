import styled from 'styled-components';
import styles from './Paragraph.module.scss';

interface Props{
	textColor: string,
	lhV_a: string,
	lhV_b: string,
	p1?: string,
	p2?: string	
}

const StyledParagraph = styled.p`
	color: ${({textColor}: Props) => textColor};
	line-height: ${({lhV_a}: Props) => lhV_a}rem;
	@media (min-width: 768px){
		line-height: ${({lhV_b}: Props) => lhV_b}rem;
	}
`;	

function Paragraph({textColor, lhV_a, lhV_b, p1, p2}: Props){
	return(
		<div className={styles.paragraph}>
			{
				(p1 !== undefined) ? (
					<StyledParagraph 
						textColor={textColor} 
						lhV_a={lhV_a} 
						lhV_b={lhV_b} 
						className={styles.p1}
					>
						{p1}
					</StyledParagraph>
				) : (
					<>
					</>
				)
			}

			<StyledParagraph  
				textColor={textColor}
				lhV_a={lhV_a} 
				lhV_b={lhV_b} 
				className={styles.p2}
			>
				{p2}
			</StyledParagraph>

		</div>
	);
}

export default Paragraph;