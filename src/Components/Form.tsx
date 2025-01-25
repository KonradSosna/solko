import styled from 'styled-components';
import { TitleUnderscore } from './TitleUnderscore';

export const Form = () => {
	return (
		<StyledFirstPanel>
			<Panel>
				<TitleUnderscore
					text="Oferta skrojona na miarę"
					titleColor="white"
					lineColor="#CFAC65"
					gap={1}
				/>
				<div
					style={{
						width: '90%',
						margin: '50px 0',
						display: 'flex',
						flexDirection: 'column',
						rowGap: '30px',
					}}
				>
					<Button>Mam dom</Button>
					<Button>Buduje dom</Button>
					<Button>Mam firmę</Button>
					<Button>Jestem rolnikiem</Button>
					<Button>Instytucja</Button>
				</div>
				<Submit>
					Dalej
					<div
						style={{
							width: '50px',
							height: '50px',
							background: '#E4C78D',
							border: 'none',
							borderRadius: '40px',
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#E4C78D"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="#224D31"
							className="size-6"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</div>
				</Submit>
			</Panel>
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

const Panel = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 60px 20px;
	border: 4px solid #cfac65;
	border-radius: 20px;
`;

const Button = styled.button`
	background-color: white;
	color: #224d31;
	border: none;
	border-radius: 20px;
	padding: 15px 0;
	font-size: 34px;
	width: 100%;

	&:hover {
		background-color: #cfac65;
	}
`;

const Submit = styled.button`
	background-color: #224d31;
	border: none;
	font-size: 36px;
	padding: 20px 60px;
	border-radius: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 300px;

	&:hover {
		background-color: #173722;
	}
`;
