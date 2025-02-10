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
			<section className="flex-1 flex flex-col items-center justify-center h-full w-full text-light-text dark:text-dark-text">
				<h1 className="text-2xl">Bem-vindo ao projeto Webber!</h1>
				<p>Descrição do projeto...</p>
			</section>
		</div>
	)
}

export default HomePage
