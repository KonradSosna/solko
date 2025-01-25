import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slide1 from '/slide1.svg';
import slide2 from '/slide2.svg';
import slide3 from '/slide3.svg';
import slide4 from '/slide4.svg';
import styled from 'styled-components';
import { TitleUnderscore } from './TitleUnderscore';

export const Slider = () => {
	const imageWidth = 800;
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
				text="Nasze instalacje"
				titleColor="#224D31"
				lineColor="#CFAC65"
				fontSize={60}
				letterSpacing={16}
			/>
			<div
				style={{ backgroundColor: 'white', maxWidth: '1280px', display: 'block', margin: 'auto' }}
			>
				<Carousel
					customRightArrow={<CustomRightArrow />}
					customLeftArrow={<CustomLeftArrow />}
					swipeable={false}
					draggable={false}
					showDots={false}
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
					itemClass="carousel-item-padding-40-px"
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '60px 100px',
						}}
					>
						<TitleUnderscore
							text="Politechnika Morska"
							titleColor="black"
							lineColor="#224D31"
							gap={1}
							/>
						<span
							style={{ fontSize: '30px', fontWeight: '500', margin: '30px 0', maxWidth: '700px' }}
						>
							Współpraca z deweloperem Manilo. Nowy wydział politechniki morskiej w Szczecinie.
							Łącznie 89 paneli PV generujących 40kWp
						</span>
						<img src={slide1} width={imageWidth} />
						<Shadow />
						<Button>Czytaj dalej</Button>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '60px 100px',
						}}
					>
						<TitleUnderscore text="Grzepnica" titleColor="black" lineColor="#224D31" gap={1} />
						<span
							style={{ fontSize: '30px', fontWeight: '500', margin: '30px 0', maxWidth: '700px' }}
						>
							Instalacja 7kWp - łącznie 16 paneli, pompa ciepła i klimatyzacja. Całość mimo cięzkich
							warunków atmosferycznych zostala zrealizowana w 2 dni!
						</span>
						<img src={slide2} width={imageWidth} />
						<Shadow />
						<Button>Czytaj dalej</Button>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '60px 100px',
						}}
					>
						<TitleUnderscore
							text="Kamień Pomorski"
							titleColor="black"
							lineColor="#224D31"
							gap={1}
							/>
						<span
							style={{ fontSize: '30px', fontWeight: '500', margin: '30px 0', maxWidth: '700px' }}
						>
							Instalacja 12kWp - łącznie 26 paneli i magazyn energii o pojemności 18kW
						</span>
						<img src={slide3} width={imageWidth} />
						<Shadow />
						<Button>Czytaj dalej</Button>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '60px 100px',
						}}
					>
						<TitleUnderscore text="Szczecin" titleColor="black" lineColor="#224D31" gap={1} />
						<span
							style={{ fontSize: '30px', fontWeight: '500', margin: '30px 0', maxWidth: '700px' }}
						>
							Łącznie 48 paneli co daje nam 5,28kWp na kazdy lokal. Dodatkowo kazdy dom został
							wyposazony w pompę ciepła!
						</span>
						<img src={slide4} width={imageWidth} />
						<Shadow />
						<Button>Czytaj dalej</Button>
					</div>
				</Carousel>
			</div>
			<div style={{ height: '200px', border: '1px solid black' }}>Placeholder dla opinii google</div>
			<div style={{margin:'50px 0', display:'flex', flexDirection:'column', rowGap:'40px'}}>
				<TitleUnderscore
					text="Twoja instalacja w 2 minuty!"
					titleColor="#224D31"
					lineColor="#CFAC65"
					gap={1}
				/>
				<span style={{ color: '#224D31', fontSize: '26px' }}>
					Zobacz jak wygląda współpraca z Solko Energy od pierwszego kontaktu ze specjalistą do
					połączenia instalacji!
				</span>
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
	/* border-radius: 35px; */
	z-index: 10;
	border: 0;
	background: transparent;
	color: #cfac65;
	font-size: 300px;
	/* min-width: 43px;
	min-height: 43px; */
	/* opacity: 1; */
	cursor: pointer;
	top: 500px;
`;

const ArrowRight = styled(Arrow)`
	right: calc(8%);
`;

const ArrowLeft = styled(Arrow)`
	left: calc(8%);
`;

const Button = styled.button`
	background-color: #cfac65;
	padding: 30px 70px;
	font-size: 50px;
	color: black;
	border: none;
	border-radius: 20px;
	margin-bottom: 100px;

	&:hover {
		background-color: #997326;
	}
`;

const Shadow = styled.div`
	height: 90px;
	width: 65%;
	background-color: gray;
	border-radius: 100%;
	margin-top: 24px;
	filter: blur(12px);
`;
