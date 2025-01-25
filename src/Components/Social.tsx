import styled from 'styled-components';
import { TitleUnderscore } from './TitleUnderscore';
import facebook from '/facebook.svg';
import instagram from '/instagram.svg';
import linkedIn from '/linkedIn.svg';

export const Social = () => {
	return (
		<Container>
			<TitleUnderscore text="Bądz na bieząco" titleColor="#224D31" lineColor="#E4C78D" />
			<div style={{ fontSize: '24px', maxWidth: '600px' }}>
				Zobacz jak przebiegają nasze najnowsze instalacje i dowiedz się jak płacić mniej i zyskiwać
				więcej. Bądz na bierząco z nowościami z brany OZE
			</div>
			<div style={{ fontSize: '34px', color: '#224D31', fontWeight: 600 }}>
				Obserwuj nasz media społecznościowe!
			</div>
			<div
				style={{
					display: 'flex',
					width: '100%',
					maxWidth: '600px',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '40px 0',
				}}
			>
				<a href="https://www.facebook.com/PKostkiewicz" target="_blank" rel="noreferrer">
					<img src={facebook} />
				</a>
				<div style={{ width: '4px', height: '100px', background: '#E4C78D' }} />
				<a href="https://www.instagram.com/pawel__kostkiewicz/" target="_blank" rel="noreferrer">
					<img src={instagram} />
				</a>
				<div style={{ width: '4px', height: '100px', background: '#E4C78D' }} />
				<a
					href="https://www.linkedin.com/in/paweł-kostkiewicz-048069193?
					utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
					target="_blank"
					rel="noreferrer"
				>
					<img src={linkedIn} />
				</a>
			</div>
		</Container>
	);
};

const Container = styled.div`
	background-color: white;
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 40px;
`;
