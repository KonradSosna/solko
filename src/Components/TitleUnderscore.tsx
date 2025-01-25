import { FC } from 'react';

type Props = {
	text: string;
	titleColor: string;
	lineColor: string;
	gap?: number;
	fontSize?: number;
	letterSpacing?: number;
	fontWeight?: number;
};

export const TitleUnderscore: FC<Props> = ({
	text,
	titleColor,
	lineColor,
	gap,
	fontSize,
	fontWeight,
	letterSpacing,
}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				rowGap: gap ? gap : '20px',
			}}
		>
			<span
				style={{
					fontSize: fontSize ? fontSize : '51px',
					fontWeight: fontWeight ? fontWeight : 700,
					color: titleColor,
					letterSpacing: letterSpacing,
					whiteSpace: 'nowrap',
				}}
			>
				{text}
			</span>
			<div style={{ height: '3px', backgroundColor: lineColor, width: '150px' }}></div>
		</div>
	);
};
