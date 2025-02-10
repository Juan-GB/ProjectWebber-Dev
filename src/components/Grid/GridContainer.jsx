import PropTypes from "prop-types"

function GridContainer({children}) {


	return (
		<section
			className="relative flex flex-col flex-wrap gap-2 md:gap-4 max-h-72 h-72 w-1/1 px-4 py-2 overflow-x-auto overflow-y-hidden">
			{children}
		</section>
	)
}



GridContainer.propTypes = {
	children: PropTypes.node,
}

export default GridContainer
