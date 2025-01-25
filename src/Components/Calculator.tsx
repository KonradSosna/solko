import styled from 'styled-components';
import { TitleUnderscore } from './TitleUnderscore';
import { useState } from 'react';

export const Calculator = () => {
	const [value, setValue] = useState(0);

	const handleMinus = () => {
		if (value > 0) setValue((prevState) => prevState - 100);
	};

	const handlePlus = () => {
		setValue((prevState) => prevState + 100);
	};
	return (
		<CalculatorContainer id="calculator">
			<TitleUnderscore text="Kalkulator fotowoltaiczny" titleColor="#CFAC65" lineColor="white" />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems:'center',
					maxWidth: '600px',
					width: '100%',
					marginBottom:'60px'
				}}
			>
				<Step>1</Step>
				<div style={{height:'3px', width:'100%', background:'gray'}} />
				<Step>2</Step>
				<div style={{height:'3px', width:'100%', background:'gray'}} />
				<Step>3</Step>
			</div>
			<span style={{ fontSize: '34px', fontWeight: '600' }}>
				Wysokość miesięcznego rachunku za prąd:
			</span>
			<div style={{ display: 'flex', maxHeight: '100px', gap: '20px', alignItems: 'center' }}>
				<InputContainer>
					<StyledInput
						type="number"
						min={0}
						placeholder="0"
						value={value}
						onChange={(e) => setValue(Number(e.target.value))}
					/>
				</InputContainer>
				<InputButton onClick={handlePlus}>+</InputButton>
				<InputButton onClick={handleMinus}>-</InputButton>
			</div>
			<span style={{ display: 'flex', fontSize: '34px', fontWeight: '600', gap: '10px' }}>
				Twoje roczne zapotrzebowanie na energię elektryczną wynosi około:
				<TitleUnderscore
					text={`${Math.floor(value * 12.26)} kWh`}
					titleColor="#CFAC65"
					lineColor="#224D31"
					gap={1}
					fontSize={34}
				/>
			</span>
			<span style={{ display: 'flex', fontSize: '34px', fontWeight: '600', gap: '10px' }}>
				Twoje roczne opłaty za prąd aktualnie wyniosą około:
				<TitleUnderscore
					text={`${value * 12} zł`}
					titleColor="#CFAC65"
					lineColor="#224D31"
					gap={1}
					fontSize={34}
				/>
			</span>

			<Button>Przejdź dalej</Button>
		</CalculatorContainer>
	);
};

const CalculatorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 40px;
	padding: 50px;
	color: white;
`;

const InputContainer = styled.div`
	position: relative;

	&:after {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translate(-50%, -50%);
		content: 'zł';
		color: #5c5858;
		font-size: 34px;
		font-weight: 700;
	}
`;

const StyledInput = styled.input`
	max-width: 300px;
	height: 50px;
	background-color: white;
	border: 5px solid gray;
	color: black;
	font-size: 30px;
	font-weight: 700;
	padding-left: 20px;
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

const Step = styled.div`
	background-color: #224d31;
	border-radius: 40px;
	font-size: 36px;
	padding: 0 28px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InputButton = styled.button`
	background-color: #cfac65;
	border: none;
	font-size: 60px;
	color: black;
	width: 70px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: #e4c78d;
	}
`;

const Button = styled.button`
	background-color: #cfac65;
	padding: 20px 40px;
	font-size: 28px;
	color: black;
	border: none;
	border-radius: 20px;

	&:hover {
		background-color: #997326;
	}
`;
