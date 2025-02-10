// Components
import HeaderContainer from "@components/header/HeaderContainer"
import SideMenuContainer from "@components/SideMenu/SideMenuContainer"
import BackgroundImage from "@components/BackgroundImage"

// Contexts
import {useMenu} from "@contexts/MenuContext" 

function HomePage() {
	const {isMenuOpen} = useMenu()

	return (
		<div className="relative w-screen h-screen overflow-hidden">
			{isMenuOpen && <SideMenuContainer />}
			<HeaderContainer />
			<BackgroundImage />
		</div>
	)
}

export default HomePage
