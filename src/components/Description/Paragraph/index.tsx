import classNames from 'classnames';
import styles from './Paragraph.module.scss';

interface Props{
	textColor: string,
	lhVariantion: string | number,
	p1?: string,
	p2?: string
}

function Paragraph({textColor, lhVariantion, p1, p2}: Props){
	return(
		<div className={classNames({
			[styles.paragraph]: true,
			[styles.blue]: textColor === 'blue',
			[styles.white]: textColor === 'white'
		})}>
			{
				(p1 !== undefined) ? (
					<p className={classNames({
						[styles.p1]: true,
						[styles.lh__20]: lhVariantion === '20',
						[styles.lh__21]: lhVariantion === '21',
						[styles.lhV__a]: lhVariantion === 'a',
						[styles.lhV__b]: lhVariantion === 'b',
						[styles.lhV__c]: lhVariantion === 'c'
					})}>
						{p1}
					</p>
				) : (
					<>
					</>
				)
			}

			<p className={classNames({
				[styles.p2]: true,
				[styles.lh__20]: lhVariantion === '20',
				[styles.lh__21]: lhVariantion === '21',
				[styles.lhV__a]: lhVariantion === 'a',
				[styles.lhV__b]: lhVariantion === 'b',
				[styles.lhV__c]: lhVariantion === 'c'
			})}>
				{p2}
			</p>
		</div>
	);
}

export default Paragraph;