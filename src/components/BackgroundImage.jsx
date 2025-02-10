function BackgroundImage() {
	return (
		<>
			<img
				src="/bg-image.png"
				alt="background image"
				className="fixed left-[50%] top-[50%] translate-[-50%] max-h-screen aspect-square z-0 blur-[4px] filter invert dark:invert-0 opacity-[10%] animate-spin-slow"
				draggable={false}
			/>
		</>
	)
}

export default BackgroundImage
