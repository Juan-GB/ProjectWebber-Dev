import PropTypes from "prop-types"

function Layout({children}) {
	return (
		<main className="bg-gradient-to-br from-light-bg-gradient-start to-light-bg-gradient-end dark:from-dark-bg-gradient-start dark:to-dark-bg-gradient-end h-screen transition-colors">
			{children}
		</main>
	)
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout
