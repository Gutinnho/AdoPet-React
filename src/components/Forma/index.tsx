import classNames from "classnames";
import {ReactComponent as FormaNormal} from 'assets/FormaBNormal.svg';
import {ReactComponent as FormaReverse} from 'assets/FormaBReverse.svg';

import style from './Forma.module.scss';

interface Props{
	variation: string
}

function Forma({variation}: Props){
	return(
		<>
			{
				variation === 'a' ? (
					<div className={style.v__A}>
						<FormaReverse
							className={style.size}
						/>
					</div>
				) : <></>
			}
			{
				variation === 'b' ? (
					<div>
						<FormaNormal
							className={classNames({
								[style.size]: true,
								[style['v__B-normal']]: true
							})}
						/>
						<FormaReverse
							className={classNames({
								[style.size]: true,
								[style['v__B-reverse']]: true
							})}
						/>
					</div>
				) : <></>
			}
			{
				variation === 'c' ? (
					<div className={style.v__C}>
						<FormaReverse 
							className={style.size}
						/>
					</div>
				) : <></>
			}
			{
				variation === 'd' ? (
					<div className={style.v__D}>
						<FormaReverse 
							className={style.size}
						/>
					</div>
				) : <></>
			}
		</>
	);
}

export default Forma;