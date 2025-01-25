import YouTube from 'react-youtube';
import styled from 'styled-components';
import backLogo from '/backLogo.svg';
import { Guarantee } from './Guarantee';

export const Film = () => {
	return (
		<Container
			style={{
				backgroundImage: `url(${backLogo})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '1800px',
				backgroundPositionX: '100%',
			}}
		>
			<StyledFilm videoId={'9RZyjkzywTU'}/>
			<div style={{ width: '100%', height: '3px', backgroundColor: '#CFAC65', margin: '60px 0' }} />
			<Guarantee />
		</Container>
	);
};

const Container = styled.div`
	padding-top: 100px;
`;

const StyledFilm = styled(YouTube)`
		@media (max-width: 640px) {
		display: none;
	}
`
