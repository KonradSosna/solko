import styled from 'styled-components';

export const FirstPanel = () => {
	const scroll = () => {
		const section = document.querySelector( '#calculator' );
		section!.scrollIntoView( { behavior: 'smooth', block: 'nearest' } );
	  };
	  
	return (
		<StyledFirstPanel>
			<span
				style={{
					fontWeight: 700,
					maxWidth: 1280,
					width: '100%',
					textAlign: 'center',
				}}
			>
				<p style={{ fontSize: '68px', lineHeight: '26px' }}>Fotowoltaika</p>
				<p style={{ fontSize: '51px', lineHeight: '26px' }}>rozwiązania OZE</p>
				<p style={{ fontSize: '36px', lineHeight: '26px' }}>w Zachodniopomorskim</p>
			</span>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<span
					style={{
						backgroundColor: '#224D31',
						borderRadius: '50px',
						marginBottom: '50px',
						padding: '20px 40px',
						fontWeight: 500,
						fontSize: '51px',
					}}
				>
					*Skorzystaj z bezpłatnego kalkulatora
				</span>
				<button
					style={{
						backgroundColor: '#CFAC65',
						border: 'none',
						width: '350px',
						height: '80px',
						borderRadius: '50px',
						fontSize: '40px',
					}}
					onClick={() => scroll()}
				>
					Kalkulator
				</button>
			</div>
		</StyledFirstPanel>
	);
};

const StyledFirstPanel = styled.div`
	background-image: url('https://solko.pl/wp-content/uploads/2024/10/grafika-nowoczesnego-domu-w-pelni-zasilanego-przez-energie-odnawialna-2048x1024.jpg');
	background-position: center;
	background-repeat: no-repeat;
	height: 1025px;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 0 20px;
`;
