import styled from 'styled-components';
import logo from '/logo.svg';
import phone2 from '/phone2.svg';
import { TitleUnderscore } from './TitleUnderscore';

export const Header = () => {
	return (
		<HeaderContainer>
			<StyledHeader>
				<LogoContainer>
					<img src={logo} width={70} />
				</LogoContainer>
				<Menu>
					<li>
						<a>Strona Główna</a>
					</li>
					<li>
						<a>O firmie</a>
					</li>
					<li>
						<a>Realizacje</a>
					</li>
					<li>
						<a>FAQ</a>
					</li>
					<li>
						<a>Dofinansowania</a>
					</li>
					<li>
						<a>Nasza oferta</a>
					</li>
					<li>
						<a>Artykuły OZE</a>
					</li>
				</Menu>
				<NumberContainer>
					<a href="tel:+4733378901" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
						<img src={phone2} width={50} />
						<TitleUnderscore
							text="+48 577 590 650"
							titleColor="#224D31"
							lineColor="#E4C78D"
							fontSize={20}
							gap={5}
						/>
					</a>
				</NumberContainer>
				{/* <Button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="#224D31"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</Button> */}
			</StyledHeader>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
`;

const StyledHeader = styled.header`
	max-width: 1440px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 70px;
	background-color: white;

	@media (min-width: 600px) {
		margin: 0 20px;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	margin-top: 40px;
	background-color: #224d31;
	border-bottom-right-radius: 40px;
	border-bottom-left-radius: 40px;
`;

const NumberContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 20px;
`;

const Menu = styled.ul`
	list-style-type: none;
	display: flex;
	max-width: 800px;
	width: 100%;
	justify-content: space-between;

	& > li > a {
		color: #224d31;
		font-weight: 700;
		padding-bottom: 5px;
		cursor: pointer;

		&:after {
			content: '';
			display: block;
			width: 0;
			height: 1px;
			background: #224d31;
			transition: width 0.3s;
		}

		&:hover::after {
			width: 100%;
		}
	}
`;

// const Button = styled.button`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	background-color: transparent;
// 	border: none;
// 	height: 50px;
// 	width: 50px;
// `;
