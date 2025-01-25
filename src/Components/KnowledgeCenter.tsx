import styled from 'styled-components';
import { TitleUnderscore } from './TitleUnderscore';
import grid1 from '/grid1.svg';
import grid2 from '/grid2.svg';
import grid4 from '/grid4.svg';

export const KnowledgeCenter = () => {
	return (
		<Container>
			<TitleUnderscore text="Strefa wiedzy OZE" titleColor="white" lineColor="#CFAC65" />
			<div style={{ color: 'white', fontSize: '34px', maxWidth: '700px' }}>
				Najwięcej błędów i strat instalacji fotowoltaicznej wynika z jej nieprawidłowego uytkowania,
				dlatego koniecznie sprawdz bazę wiedzy Solko Energy, gdzie odpowiadamy na najczęściej
				zadawane pytania
			</div>
			<TitleUnderscore text="Najnowsze Artykuły" titleColor="white" lineColor="#CFAC65" />
			<Grid>
				<GridItem1 style={{ position: 'relative' }}>
					<div
						style={{
							position: 'absolute',
							bottom: 0,
							textAlign: 'left',
							padding: '10px 60px',
							fontSize: '60px',
							fontWeight: 600,
							textShadow: 'black 1px 1px 10px',
							color: 'white',
							background: 'rgba(0, 0, 0, 0.5)',
						}}
					>
						Czy fotowoltaika działa w Zimę?
					</div>
				</GridItem1>
				<GridItem2 style={{ position: 'relative' }}>
					<div
						style={{
							position: 'absolute',
							bottom: 0,
							textAlign: 'left',
							padding: '30px 20px',
							fontSize: '40px',
							fontWeight: 500,
							textShadow: 'black 1px 1px 10px',
							color: 'white',
							background: 'rgba(0, 0, 0, 0.5)',
						}}
					>
						Czy klimatyzacja jest zdrowa?
					</div>
				</GridItem2>
				<GridItem3 style={{ position: 'relative' }}>
					<div
						style={{
							position: 'absolute',
							bottom: 0,
							textAlign: 'left',
							padding: '30px 20px',
							fontSize: '40px',
							fontWeight: 500,
							textShadow: 'black 1px 1px 10px',
							color: 'white',
							background: 'rgba(0, 0, 0, 0.5)',
						}}
					>
						Pompa ciepła - ile mogę zaoszczędzić
					</div>
				</GridItem3>
			</Grid>
			<Button>Czytam dalej!</Button>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 40px;
	padding: 60px;
	background-color: #1b1918;
`;

const Grid = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	row-gap: 60px;
	width: 100%;
	max-width: 1000px;
`;

const GridItem1 = styled.div`
	background-image: url(${grid2});
	background-repeat: no-repeat;
	background-size: 1000px;
	background-position: 50%;
	height: 500px;
	order: 1;
	flex: 0 0 100%;
	flex-grow: 1;
	filter: drop-shadow(0 30px 10px black);
`;

const GridItem2 = styled.div`
	background-image: url(${grid1});
	background-repeat: no-repeat;
	background-size: 500px;
	background-position: 50%;
	height: 450px;
	order: 2;
	flex: 0 0 48%;
	filter: drop-shadow(0 30px 10px black);
`;

const GridItem3 = styled.div`
	background-image: url(${grid4});
	background-repeat: no-repeat;
	background-size: 500px;
	background-position: 50%;
	max-width: 1000px;
	height: 450px;
	order: 3;
	flex: 0 0 48%;
	filter: drop-shadow(0 30px 10px black);
`;

const Button = styled.button`
	background-color: #CFAC65;
	border: none;
	padding: 10px 20px;
	font-size: 42px;
	border-radius: 30px;
	color: black;
	margin: 40px 0;

	&:hover {
		background-color: #E4C78D;
	}
`;
