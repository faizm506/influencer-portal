import { useId } from "react";

type AuthScoreRingProps = {
	score: number;
	size?: number;
};

export function AuthScoreRing({ score, size = 56 }: AuthScoreRingProps) {
	const gradientId = `auth-score-gradient-${useId().replace(/:/g, "")}`;
	const normalizedScore = Math.min(100, Math.max(0, score));
	const radius = 42;
	const circumference = 2 * Math.PI * radius;
	const strokeWidth = 8;

	return (
		<div
			role="img"
			aria-label={`Authenticity score: ${score} out of 100`}
			className="relative shrink-0"
			style={{ width: size, height: size }}
		>
			<svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden="true">
				<defs>
					<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#34d399" />
						<stop offset="100%" stopColor="#38bdf8" />
					</linearGradient>
				</defs>
				<circle
					cx="50"
					cy="50"
					r={radius}
					fill="none"
					stroke="rgba(255,255,255,0.12)"
					strokeWidth={strokeWidth}
				/>
				<circle
					cx="50"
					cy="50"
					r={radius}
					fill="none"
					stroke={`url(#${gradientId})`}
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					strokeDasharray={circumference}
					strokeDashoffset={circumference * (1 - normalizedScore / 100)}
				/>
			</svg>
			<span className="absolute inset-0 grid place-items-center font-display text-sm font-semibold tabular-nums">
				{score}
			</span>
		</div>
	);
}
