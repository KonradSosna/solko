import styled from 'styled-components';
import sponsor1 from '/sponsor1.svg';
import sponsor2 from '/sponsor2.svg';
import sponsor3 from '/sponsor3.svg';

export const Sponsor = () => {
	return (
		<SponsorPanel>
			<Container>
				<div>
					<img src={sponsor1} width={400} />
				</div>
				<div>
					<img src={sponsor2} width={400} />
				</div>
				<div>
					<img src={sponsor3} width={400} />
				</div>
			</Container>
		</SponsorPanel>
	);
};

const SponsorPanel = styled.div`
	background-color: white;
	margin-top: 5px;
	display: flex;
	justify-content: center;

	@media (min-width: 600px) {
		padding: 40px 0;
	}
`;

const Container = styled.div`
	max-width: 1440px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	@media (max-width: 800px) {
		justify-content: center;
	}
`;
