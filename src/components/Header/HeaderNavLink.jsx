import {NavLink} from "react-router-dom"
import PropTypes from "prop-types"

function HeaderNavLink({to, target, ariaLabel, children}) {
	return (
		<NavLink
			to={to}
			target={target ? target : "_self"}
			rel={target && "noopener noreferrer"}
			aria-label={ariaLabel}
			role="link"
			className={({isActive}) =>
				`relative translate-y-[13%] font-specialelite transition-colors text-[1.05rem]
				${
					isActive
						? "text-light-text dark:text-dark-text"
						: "text-light-text-disable dark:text-dark-text-disable"
				}`
			}>
			{children}
		</NavLink>
	)
}

HeaderNavLink.propTypes = {
	to: PropTypes.string.isRequired,
	target: PropTypes.string,
	ariaLabel: PropTypes.string.isRequired,
	children: PropTypes.any,
}

export default HeaderNavLink
