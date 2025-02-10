import {memo} from "react"

// Icons
import {
	PiXBold,
	PiHouseFill,
	PiChatCenteredDotsFill,
	PiUserPlusFill,
} from "react-icons/pi"
import {FaDiscord} from "react-icons/fa"

// Components
import SideMenuItem from "./SideMenuItem"
import MenuButton from "@components/Buttons/MenuButton"

function SideMenuContainer() {
	return (
		<section className="absolute flex items-end h-screen w-screen bg-black/5  dark:bg-black/50 backdrop-blur-[8px] z-10 px-8 py-12">
			<nav className="flex flex-col h-fit w-full gap-10 rounded-xl">
				<div className="flex flex-col w-full gap-3">
					<SideMenuItem
						text={"Início"}
						icon={<PiHouseFill size="1.4rem" />}
						path={"/"}
					/>

					<SideMenuItem
						text={"Criar Personagem"}
						icon={<PiUserPlusFill size="1.4rem" />}
						path={"/Customizer"}
					/>
				</div>

				<div className="flex w-full justify-between">
					<MenuButton
						menuContent={
							<>
								<PiXBold size="1.4rem" /> Fechar Menu
							</>
						}
					/>
				</div>
			</nav>

			<div className="flex flex-col gap-2">
				<SideMenuItem
					text={"Discord"}
					icon={<FaDiscord size="1.4rem" />}
					path="https://discord.gg/KXJ8VGQYmT"
					target="_blank"
					color="text-discord"
				/>

				<SideMenuItem
					text={"Feedback"}
					icon={<PiChatCenteredDotsFill size="1.4rem" />}
					path="http"
					target="_blank"
					color="text-golden"
				/>
			</div>
		</section>
	)
}

export default memo(SideMenuContainer)
