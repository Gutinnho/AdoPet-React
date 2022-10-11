import styles from './Description.module.scss'

import Title from "./Title";
import Paragraph from "./Paragraph";

interface Props{
	title: boolean,
	titleText?: string,
	textColor: string,
	lhVariantion: string | number,
	p1?: string,
	p2?: string
}

function Description({title, titleText, textColor, lhVariantion, p1, p2}: Props){
	return(
		<div className={styles.description}>
			{
				title ? (
					<Title 
						titleText={titleText}
					/>
				) : (<></>)
			}

			<Paragraph
				textColor={textColor}
				lhVariantion={lhVariantion}
				p1={p1}
				p2={p2}
			/>
		</div>
	);
}

export default Description;