import styled from 'styled-components';
import { TitleUnderscore } from './TitleUnderscore';
import shield from '/shield.svg';

export const SecondPanel = () => {
	return (
		<SecondPanleContainer>
			<StyledSecondPanel>
				<img src={shield} width={200} />
				<TitleUnderscore text="Twoja sprawdzona firma" titleColor="#CFAC65" lineColor="#224D31" />
				<span style={{ color: '#224D31', fontSize: '34px' }}>
					Lata doświadczenia na rynku, współprace z największmi deweloperami i setki wykonanych
					instalacji.
				</span>
			</StyledSecondPanel>
		</SecondPanleContainer>
	);
};

const SecondPanleContainer = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 50px 20px;
`;

const StyledSecondPanel = styled.div`
	max-width: 1280px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 20px;
`;
