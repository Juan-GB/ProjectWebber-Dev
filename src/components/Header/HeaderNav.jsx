import PropTypes from "prop-types"

function HeaderNav({children}) {
	return (
		<nav className="flex gap-7">
			{children}
		</nav>
	)
}

HeaderNav.propTypes = {
	children: PropTypes.node
}

export default HeaderNav
