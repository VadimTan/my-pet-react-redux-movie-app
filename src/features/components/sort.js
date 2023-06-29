import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const Sort = (props) => {
	const { handler, handlerSec, array } = props;

	return (
		<div className="sort-movies-container">
			<div className="sort-menu">
				<p className="sort-menu-p">Сортировка по:</p>
				<ul className="sort-menu-list">
					<li key={0}>
						<Checkbox
							onChange={handler}
							disabled={array[1].sortProperty === true ? true : false}
						/>
						{array[0].name}
					</li>
					<li key={1}>
						<Checkbox
							onChange={handlerSec}
							disabled={array[0].sortProperty === true ? true : false}
						/>
						{array[1].name}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sort;
