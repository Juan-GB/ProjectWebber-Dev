//Components
import HeaderContainer from "@components/header/HeaderContainer"
import SelectionContainer from "@components/SelectionContainer"
import PreviewContainer from "@components/Preview/PreviewContainer"
import BackgroundImage from "@components/BackgroundImage"

// Contexts
import {CustomizerProvider} from "@contexts/CustomizerContext"
import {useMenu} from "@contexts/MenuContext" 

import SideMenuContainer from "@components/SideMenu/SideMenuContainer"


function CustomizerPage() {
	const {isMenuOpen} = useMenu()

	return (
		<div className="relative overflow-hidden flex flex-col h-screen w-screen">
			{isMenuOpen && <SideMenuContainer />}
			<BackgroundImage />
			<HeaderContainer />
			<CustomizerProvider>
				<section className="flex flex-col-reverse flex-1 items-center justify-between px-10 md:flex-row md:py-10">
					<section className="flex flex-col justify-center h-full">
						<SelectionContainer />
					</section>
					<PreviewContainer />
				</section>
			</CustomizerProvider>
		</div>
	)
}

export default CustomizerPage
