import styled from 'styled-components';
import grid1 from '/grid1.svg';
import grid2 from '/grid2.svg';
import grid3 from '/grid3.svg';
import grid4 from '/grid4.svg';
import { TitleUnderscore } from './TitleUnderscore';

export const Offer = () => {
	const panels = [
		{ title: 'FOTOWOLTAIKA', img: grid2 },
		{ title: 'KLIMATYZACJA', img: grid1 },
		{ title: 'MAGAZYN ENERGII', img: grid3 },
		{ title: 'POMPA CIEPŁA', img: grid4 },
	];
	return (
		<OfferPanel>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					rowGap: '10px',
				}}
			>
				<TitleUnderscore text="Nasza oferta" titleColor="#CFAC65" lineColor="white" gap={5} />
				<span style={{ fontSize: '34px', fontWeight: '500', marginBottom: '40px' }}>
					Fotowoltaika i nowocaesne technologie OZE
				</span>
			</div>
			<Grid>
				{panels.map((panel) => (
					<div style={{ position: 'relative' }} key={panel.title}>
						<div style={{ maxWidth: '500px' }}>
							<img src={panel.img} style={{ width: '100%' }} />
						</div>
						<div
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								fontSize: '50px',
								fontWeight: 700,
								textShadow: 'black 1px 1px 10px',
							}}
						>
							{panel.title}
						</div>
					</div>
				))}
			</Grid>
		</OfferPanel>
	);
};

const OfferPanel = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	color: white;
	background-color: #1b1918;
	padding: 50px 0;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(500px, 1fr));
	gap: 50px;

	@media (max-width: 1000px) {
		grid-template-columns: minmax(500px, 1fr);
		grid-row-gap: 20px;
	}

	@media (max-width: 600px) {
		grid-template-columns: minmax(400px, 1fr);
		grid-row-gap: 20px;
	}
`;
