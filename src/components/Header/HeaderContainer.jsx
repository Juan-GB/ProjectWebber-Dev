import MenuButton from "../Buttons/MenuButton"
import {PiListBold} from "react-icons/pi"
import ThemeButton from "../buttons/ThemeButton"
import HeaderLogo from "./HeaderLogo"
import HeaderNav from "./HeaderNav"
import HeaderNavLink from "./HeaderNavLink"

import {useMediaQuery} from "react-responsive"

function HeaderContainer() {
	const isMobile = useMediaQuery({maxWidth: 768})

	return (
		<header className="flex justify-between items-center h-16 py-2 px-4 md:px-10 bg-light-header dark:bg-dark-header transition-colors">
			<HeaderLogo />

			{isMobile ? (
				<div className="flex gap-4">
					<ThemeButton />
					<MenuButton menuContent={<PiListBold size="1.6rem" />} />
				</div>
			) : (
				<HeaderNav>
					<HeaderNavLink to={"/"} ariaLabel="Home Page" text="Home">
						Home
					</HeaderNavLink>
					<HeaderNavLink
						to={"/Customizer"}
						ariaLabel="Customizer Page"
						text="Customizer">
						Customizer
					</HeaderNavLink>
					<HeaderNavLink
						to="https://google.com"
						target="_blank"
						ariaLabel="Discord page"
						text="Discord"
						color={"text-light-text dark:text-dark-text"}>
						Discord
					</HeaderNavLink>
					<HeaderNavLink
						to="https://google.com"
						target="_blank"
						ariaLabel="Feedback page"
						text="Feedback"
						color={"text-light-text dark:text-dark-text"}>
						Feedback
					</HeaderNavLink>
					<ThemeButton />
				</HeaderNav>
			)}
		</header>
	)
}

export default HeaderContainer
