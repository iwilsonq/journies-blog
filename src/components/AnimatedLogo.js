import React from 'react';

const AnimatedLogo = () => {
  const stoic = 'STOIC',
        the = 'The',
        developer = 'Developer';

	return (
		<div className='animated-logo'>
			<div className='word'>
				{the.split('').map(ch => <div className='letter enter-left'>{ch}</div>)}
			</div>
			<div className='word'>
				{stoic.split('').map(ch => <div className='letter enter-top'>{ch}</div>)}
			</div>
			<div className='word '>
				{developer.split('').map(ch => <div className='letter enter-right'>{ch}</div>)}
			</div>
		</div>
	);
};

export default AnimatedLogo;
