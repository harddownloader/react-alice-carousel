import React from 'react';

import markdown from './code.md';
import TheCode from '../../the-code';
import AliceCarousel from '../../../lib/react-alice-carousel';

const itemsLength = Array.from({ length: 5 });

const items = itemsLength.map((item, index) => (
	<div className="item" style={{ width: 150 + index * 100 }} data-value={index + 1} />
));

const AutowidthPage = () => {
	return (
		<section className="p-basic">
			<AliceCarousel mouseTracking autoWidth infinite items={items} />
			<TheCode html={markdown} />
		</section>
	);
};

export default AutowidthPage;
