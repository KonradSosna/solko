import { TitleUnderscore } from './TitleUnderscore';
import icon1 from '/icon1.svg';
import icon2 from '/icon2.svg';
import icon3 from '/icon3.svg';

export const Guarantee = () => {
	return (
		<div
			style={{
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<div
				style={{
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '1000px',
				}}
			>
				<span style={{ fontSize: '56px', fontWeight: 700 }}>Najwyzsza jakość</span>
				<span style={{ fontSize: '40px', fontWeight: 500 }}>
					Korzystamy z najwyzszej jakości urządzeń dostępnych na rynku. Sprawdzone i nie zawodne
					rozwiązania wraz z obuługą posprzedarzową oraz gwarancją od Solko Energy!
				</span>
			</div>
			<div style={{ width: '90%', height: '3px', backgroundColor: '#224D31', marginTop: '60px' }} />
			<div
				style={{
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '1000px',
				}}
			>
				<img src={icon1} />
				<TitleUnderscore text="10 lat gwarancji na montaz" titleColor="white" lineColor="#CFAC65" />
				<span style={{ fontSize: '40px', fontWeight: 500 }}>
					Zapewniamy ze nasza instalacja jest solidna, bezpieczna i wykonana zgodnie z najwyzszymi
					standardami
				</span>
			</div>
			<div style={{ width: '90%', height: '3px', backgroundColor: '#224D31', marginTop: '60px' }} />
			<div
				style={{
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '1000px',
				}}
			>
				<img src={icon2} />
				<TitleUnderscore
					text="Do 30 lat gwarancji na nasze urządzenia"
					titleColor="white"
					lineColor="#CFAC65"
				/>
				<span style={{ fontSize: '40px', fontWeight: 500 }}>
				Urządzenia z których korzysamy są projektowane tak aby wytrzymały najtrudniejsze warunki i
					słuzyły przez wiele lat
				</span>
			</div>
			<div style={{ width: '90%', height: '3px', backgroundColor: '#224D31', marginTop: '60px' }} />
			<div
				style={{
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '1000px',
				}}
			>
				<img src={icon3} />
				<TitleUnderscore
					text="Do 30 lat gwarancji na wydajność paneli"
					titleColor="white"
					lineColor="#CFAC65"
				/>
				<span style={{ fontSize: '40px', fontWeight: 500 }}>
				Inwestując juz dziś w panele fotowoltaiczne masz pewność ze posłuzą Ci one przez
					conajmniej 30 lat
				</span>
			</div>
			<div
				style={{
					width: '90%',
					height: '3px',
					backgroundColor: '#224D31',
					marginTop: '60px',
					marginBottom: '60px',
				}}
			/>
		</div>
	);
};
