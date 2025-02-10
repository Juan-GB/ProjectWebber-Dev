import {NavLink, Link} from "react-router-dom"
import PropTypes from "prop-types"

function HeaderNavLink({to, target= "_self", ariaLabel, color, children}) {
	return (
		<>
			{target === "_self" ? (
				<NavLink
					to={to}
					aria-label={ariaLabel}
					role="link"
					className={({isActive}) =>
						`relative translate-y-[13%] transition-colors text-[1.05rem] font-medium 
				${
					isActive
						? "text-light-text dark:text-dark-text"
						: "text-light-text-disable dark:text-dark-text-disable"
				}`
					}>
					{children}
				</NavLink>
			) : (
				<Link
					to={to}
					target={"_blank"}
					rel={"noopener noreferrer"}
					aria-label={ariaLabel}
					role="link"
					className={`relative translate-y-[13%] transition-colors text-[1.05rem] font-medium ` + color}>
					{children}
				</Link>
			)}
		</>
	)
}

HeaderNavLink.propTypes = {
	to: PropTypes.string.isRequired,
	target: PropTypes.string,
	color: PropTypes.string,
	ariaLabel: PropTypes.string.isRequired,
	children: PropTypes.any,
}

export default HeaderNavLink
