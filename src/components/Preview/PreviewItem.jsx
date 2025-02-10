import PropTypes from "prop-types"

function PreviewItem({src, alt}) {
	return (
		<img
			src={src}
			alt={alt}
			draggable={false}
			className="absolute top-0 left-0 h-full w-full object-contain filter dark:invert"
		/>
	)
}

PreviewItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default PreviewItem