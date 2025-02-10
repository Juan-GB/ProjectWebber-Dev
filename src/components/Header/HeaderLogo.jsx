import {useMemo} from "react"
import {useTheme} from "@contexts/ThemeContext"

function HeaderLogo() {
	const {theme} = useTheme()

	const src = useMemo(
		() => (theme === "light" ? "/logo-light.webp" : "/logo-dark.webp"),
		[theme]
	)

	return (
		<img src={src} alt="Logo do Projeto Webber - Header" className="h-full md:text-white" />
	)
}

export default HeaderLogo
