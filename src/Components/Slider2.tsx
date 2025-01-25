import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import { TitleUnderscore } from './TitleUnderscore';

export const Slider2 = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	const CustomRightArrow = ({ onClick }: any) => {
		return <ArrowRight onClick={() => onClick()}>{'>'}</ArrowRight>;
	};

	const CustomLeftArrow = ({ onClick }: any) => {
		return <ArrowLeft onClick={() => onClick()}>{'<'}</ArrowLeft>;
	};

	return (
		<SliderContainer>
			<TitleUnderscore
				text="Dofinansowania"
				titleColor="#224D31"
				lineColor="#CFAC65"
				fontSize={60}
			/>
			<div
				style={{ fontSize: '28px', maxWidth: '900px', margin: '40px auto', marginBottom: '100px' }}
			>
				Zyskaj nawet do <span style={{ fontWeight: 700 }}>28 000 zł</span> dofinansowania na zakup
				fotowoltaiki! Sprawdz jakie dotacje Ci przysługują i ile mozesz zaoszczędzić
			</div>
			<Button
				style={{
					padding: '20px 40px',
					fontSize: '40px',
					borderRadius: '30px',
					backgroundColor: '#CFAC65',
					color: 'black',
				}}
			>
				Dowiedz się więcej
			</Button>
			<div
				style={{ backgroundColor: 'white', maxWidth: '1280px', display: 'block', margin: 'auto' }}
			>
				<Carousel
					customRightArrow={<CustomRightArrow />}
					customLeftArrow={<CustomLeftArrow />}
					swipeable={false}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={true}
					// autoPlay={this.props.deviceType !== 'mobile' ? true : false}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					// customTransition="all .5"
					transitionDuration={500}
					// containerClass="carousel-container"
					removeArrowOnDeviceType={['tablet', 'mobile']}
					// deviceType={this.props.deviceType}
					// dotListClass="custom-dot-list-style"
					// itemClass="carousel-item-padding-40-px"
				>
					<div style={{margin:'0 40px'}}>
						<div
							style={{
								margin: '0 auto',
								maxWidth: '500px',
								height: '800px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'start',
								alignItems: 'center',
								border: '6px solid #224D31',
								borderRadius: '40px',
								padding: '40px',
								color: '#224D31',
							}}
						>
							<TitleUnderscore
								text="Mój prąd 6.0"
								titleColor="#224D31"
								lineColor="#CFAC65"
								gap={1}
							/>
							<span
								style={{
									fontSize: '40px',
									fontWeight: '500',
									margin: '30px 0',
									width: '100%',
									textAlign: 'left',
								}}
							>
								Dofinansowanie do:
							</span>
							<div style={{ margin: '30px 0', width: '100%', textAlign: 'left' }}>
								<div style={{ fontSize: '40px' }}>
									<span style={{ fontWeight: 700 }}>7 000 zł</span>
									&nbsp;na
								</div>
								<span
									style={{
										fontSize: '40px',
										fontWeight: '500',
										margin: '30px 0',
										width: '100%',
										textAlign: 'left',
									}}
								>
									Fotowoltaikę
								</span>
								<div style={{ height: '5px', background: '#CFAC65', width: '200px', marginTop:'20px'}} />
							</div>
							<div style={{ margin: '30px 0', width: '100%', textAlign: 'left' }}>
								<div style={{ fontSize: '40px' }}>
									<span style={{ fontWeight: 700 }}>16 000 zł</span>
									&nbsp;na
								</div>
								<span
									style={{
										fontSize: '40px',
										fontWeight: '500',
										margin: '30px 0',
										width: '100%',
										textAlign: 'left',
									}}
								>
									Magazyn Energii
								</span>
								<div style={{ height: '5px', background: '#CFAC65', width: '200px', marginTop:'20px'}} />
							</div>
							<div style={{ margin: '30px 0', width: '100%', textAlign: 'left' }}>
								<div style={{ fontSize: '40px' }}>
									<span style={{ fontWeight: 700 }}>7 000 zł</span>
									&nbsp;na
								</div>
								<span
									style={{
										fontSize: '40px',
										fontWeight: '500',
										margin: '30px 0',
										width: '100%',
										textAlign: 'left',
									}}
								>
									Magazyn Ciepła
								</span>
								<div style={{ height: '5px', background: '#CFAC65', width: '200px', marginTop:'20px'}} />
							</div>
						</div>
						<Button style={{ marginTop: '40px' }}>Czytam dalej!</Button>
					</div>

					<div style={{margin:'0 40px'}}>
						<div
							style={{
								margin: '0 auto',
								maxWidth: '500px',
								height: '800px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'start',
								alignItems: 'center',
								border: '6px solid #224D31',
								borderRadius: '40px',
								padding: '40px',
								color: '#224D31',
							}}
						>
							<TitleUnderscore
								text="Moje Ciepło"
								titleColor="#224D31"
								lineColor="#CFAC65"
								gap={1}
							/>
							<span
								style={{
									fontSize: '40px',
									fontWeight: '500',
									margin: '30px 0',
									width: '100%',
									textAlign: 'left',
								}}
							>
								Dofinansowanie do:
							</span>
							<div style={{ margin: '30px 0', width: '100%', textAlign: 'left' }}>
								<div style={{ fontSize: '40px' }}>
									<span style={{ fontWeight: 700 }}>21 000 zł</span>
								</div>
								<span
									style={{
										fontSize: '40px',
										fontWeight: '500',
										margin: '30px 0',
										width: '100%',
										textAlign: 'left',
									}}
								>
									na gruntową pompe ciepła
								</span>
								<div style={{ height: '5px', background: '#CFAC65', width: '200px', marginTop:'20px'}} />
							</div>
							<div style={{ margin: '30px 0', width: '100%', textAlign: 'left' }}>
								<div style={{ fontSize: '40px' }}>
									<span style={{ fontWeight: 700 }}>7 000 zł</span>
								</div>
								<span
									style={{
										fontSize: '40px',
										fontWeight: '500',
										margin: '30px 0',
										width: '100%',
										textAlign: 'left',
									}}
								>
									na powietrzną pompę ciepła
								</span>
								<div style={{ height: '5px', background: '#CFAC65', width: '200px', marginTop:'20px'}} />
							</div>
						</div>
						<Button style={{ marginTop: '40px' }}>Czytam dalej!</Button>
					</div>

					<div style={{margin:'0 40px'}}>
						<div
							style={{
								margin: '0 auto',
								maxWidth: '500px',
								height: '800px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'start',
								alignItems: 'center',
								border: '6px solid #224D31',
								borderRadius: '40px',
								padding: '40px',
								color: '#224D31',
							}}
						>
							<TitleUnderscore
								text="Ulga Termomodernizacyjna"
								titleColor="#224D31"
								lineColor="#CFAC65"
								gap={1}
							/>
							<span
								style={{
									fontSize: '40px',
									fontWeight: '500',
									margin: '30px 0',
									width: '100%',
									textAlign: 'left',
								}}
							>
								Odlicz nawet do:
							</span>
							<div style={{ margin: '30px 0', width: '100%', textAlign: 'left' }}>
								<div style={{ fontSize: '40px' }}>
									<span style={{ fontWeight: 700 }}>53 000 zł</span>
								</div>
								<span
									style={{
										fontSize: '40px',
										fontWeight: '500',
										margin: '30px 0',
										width: '100%',
										textAlign: 'left',
									}}
								>
									na wydatki związane z poprawą efektywności energetycznej domu jednorodzinnego
								</span>
								<div style={{ height: '5px', background: '#CFAC65', width: '200px', marginTop:'20px'}} />
							</div>
						</div>
						<Button style={{ marginTop: '40px' }}>Czytam dalej!</Button>
					</div>
				</Carousel>
			</div>
			<div
				style={{
					margin: '50px 0',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					rowGap: '40px',
				}}
			>
				<TitleUnderscore
					text="Darmowy Audiobook"
					titleColor="#224D31"
					lineColor="#CFAC65"
					gap={1}
					fontSize={70}
				/>
				<div style={{ fontSize: '26px', maxWidth: '800px' }}>
					Co MUSISZ wiedzieć przed zakupem fotowoltaiki? - przewodnik Jezeli chcesz uzyskać dostęp
					do audiobook&apos;a wyślemy Tobie dostęp na adres E-mail
				</div>
				<InputContainer>
					<div
						style={{
							position: 'absolute',
							width: '45px',
							top: '55%',
							left: '20px',
							transform: 'translateY(-50%)',
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#E4C78D"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="white"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
							/>
						</svg>
					</div>
					<StyledInput placeholder="E-mail" />
					<button
						style={{
							position: 'absolute',
							width: '45px',
							top: '55%',
							right: '20px',
							transform: 'translateY(-50%)',
							background: 'transparent',
							border: 'none',
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="#224D31"
							className="size-6"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</button>
				</InputContainer>
			</div>
		</SliderContainer>
	);
};

const SliderContainer = styled.div`
	background-color: white;
	margin: auto;
	padding: 50px 0;
`;

const Arrow = styled.button`
	position: absolute;
	outline: 0;
	transition: all 0.5s;
	z-index: 10;
	border: 0;
	background: transparent;
	color: #cfac65;
	font-size: 300px;
	cursor: pointer;
	top: 250px;
`;

const ArrowRight = styled(Arrow)`
	right: calc(12%);
`;

const ArrowLeft = styled(Arrow)`
	left: calc(12%);
`;

const Button = styled.button`
	background-color: black;
	padding: 10px 40px;
	font-size: 40px;
	border: none;
	border-radius: 40px;
	margin-bottom: 100px;

	&:hover {
		background-color: #997326;
	}
`;

const InputContainer = styled.div`
	position: relative;
`;

const StyledInput = styled.input`
	max-width: 500px;
	height: 50px;
	background-color: white;
	border: 5px solid #e4c78d;
	border-radius: 40px;
	color: black;
	font-size: 30px;
	font-weight: 700;
	padding-left: 70px;
	outline: none;

	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&:hover {
		background-color: #dbd6d6;
	}
`;
