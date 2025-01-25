import styled from 'styled-components';
import logo from '/logo.svg';
import pin from '/pin.svg';
import phone2 from '/phone2.svg';
import mail from '/mail.svg';

export const Footer = () => {
	return (
		<Container>
			<footer
				style={{
					background: '#224D31',
					width: '100%',
					color: 'white',
					display: 'flex',
					justifyContent: 'center',
					padding: '40px 0',
				}}
			>
				<Wrapper>
					<div style={{ width: '400px' }}>
						<img src={logo} width={200} />
						<div style={{ display: 'flex', alignItems: 'center', fontSize:'24px' }}>
							<img src={pin} width={150} />
							ul. Jerzego Janosika 17, 71-424 Szczecin
						</div>
					</div>
					<div
						style={{
							fontSize: '34px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '10px',
							maxWidth: '400px',
							width: '100%',
							fontWeight: 700,
						}}
					>
						<div
							style={{
								display: 'flex',
								width: '100%',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<img src={phone2} width={100} />
							<a href="tel:+4733378901" style={{color:'white'}}>+48 577 590 650</a>
						</div>
						<div style={{ height: '3px', background: 'white', width: '100%' }} />
						<div
							style={{
								display: 'flex',
								width: '100%',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<img src={mail} width={100} />
							<a href="mailto:biuro@solko.pl" style={{ color: 'white', fontWeight: 700 }}>
								biuro@solko.pl
							</a>
						</div>
					</div>
				</Wrapper>
			</footer>
		</Container>
	);
};

const Container = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 40px;
`;

const Wrapper = styled.div`
	max-width: 1000px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;

	@media (max-width: 880px) {
		justify-content: center;
		row-gap: 40px;
	}
`