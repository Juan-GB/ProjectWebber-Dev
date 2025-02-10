import PropTypes from "prop-types"
import {Link, NavLink} from "react-router-dom"
import {useMenu} from "@contexts/MenuContext"

function SideMenuItem({
	text,
	icon,
	path = "",
	target = "_self",
	color = "text-light-text dark:text-dark-text",
}) {

	return (
		<>
			{target === "_self" ? (
				<NavLink
					to={path}
					className={({isActive}) =>
						`flex items-center gap-2 font-medium
						${
							isActive
								? "text-light-text-disable dark:text-dark-text-disable"
								: "text-light-text dark:text-dark-text"
						}`
					}
					>
					{icon}
					{text}
				</NavLink>
			) : (
				<Link
					to={path}
					target={target}
					className={"flex py-2 px-4 rounded-3xl bg-dark-header items-center gap-1 text-shadow font-medium " + color}>
					{icon}
					{text}
				</Link>
			)}
		</>
	)
}

SideMenuItem.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.node,
	path: PropTypes.string,
	target: PropTypes.string,
	color: PropTypes.string,
}

export default SideMenuItem
