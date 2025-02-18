import PropTypes from "prop-types"
import {useMemo, useCallback} from "react"
import {motion} from "motion/react"

function GridItem({src, alt, id, name, checkedItemId, setCheckedItems}) {
	const isChecked = useMemo(() => checkedItemId === id, [checkedItemId, id])

	const handleLableStyle = useCallback(() => {
		let style = `relative block max-h-24 max-w-24 md:max-h-28 md:max-w-28 h-full aspect-square  rounded-2xl object-contain bg-linear-to-br transition-colors overflow-hidden
				
		from-light-prop-gradient-start/[15%] to-light-prop-gradient-end/[15%] dark:from-dark-prop-gradient-start/[15%] dark:to-dark-prop-gradient-end/[15%] cursor-pointer filter dark:invert`

		const hoverStyle = ` hover:from-light-prop-gradient-start/[25%] hover:to-light-prop-gradient-end/[25%] dark:hover:from-dark-prop-gradient-start/[25%] dark:hover:to-dark-prop-gradient-end/[25%] `

		const checkedStyle = ` has-checked:from-light-prop-gradient-start/[33%] 
		has-checked:to-light-prop-gradient-end/[33%] has-checked:dark:from-dark-prop-gradient-start/[33%] has-checked:dark:to-dark-prop-gradient-end/[33%]`

		style += hoverStyle
		style += isChecked && checkedStyle
		return style
	}, [isChecked])()

	const handleImgStyle = useCallback(() => {
		const categoryZoomStyle = {
			corpos: "top-0 left-0 scale-[1]",
			cabelos: "top-6 md:top-7 left-3 scale-[1.7]",
			sobrancelhas: "top-22 left-10 md:top-25 md:left-12 scale-[4]",
			olhos: "top-19 left-10 md:top-22 md:left-11 scale-[4]",
			narizes: "top-20 left-13 md:top-23 md:left-15 scale-[5]",
			bocas: "top-11 left-12 md:top-14 md:left-15 scale-[5]",
			camisas: "-top-5 left-[0.8%] md:-top-5 md:left-[0.5%] scale-[1.2]",
		}

		return categoryZoomStyle[name]
	}, [name])

	return (
		<motion.label
			htmlFor={id}
			className={handleLableStyle}
			draggable={false}
			initial={{opacity: 0, y: 15, scale: 1}}
			whileInView={{opacity: 1, y: 0, transition: {duration: 0.4}}}
			whileHover={{scale: 1.1}}
			whileTap={{scale: 0.95, transition: {duration: 0.09}}}>
			<input
				type="radio"
				name={name}
				id={id}
				className="hidden "
				value={id}
				checked={isChecked}
				onChange={() => {
					setCheckedItems(name, {id: id, src: src})
				}}
			/>
			<img
				src={src}
				alt={alt}
				className={`w-1/1 absolute ${handleImgStyle()}`}
				draggable={false}
				loading="lazy"
			/>
		</motion.label>
	)
}

GridItem.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	checkedItemId: PropTypes.string.isRequired,
	setCheckedItems: PropTypes.func.isRequired,
}

export default GridItem
