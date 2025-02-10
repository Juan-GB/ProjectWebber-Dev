import {useCallback} from "react"

// Components
import PreviewItem from './PreviewItem'

// Context
import {useCustomizer} from "@contexts/CustomizerContext"

function PreviewContianer() {
	const {categories, selectedProps} = useCustomizer()

	const previewFiller = useCallback(() => {
		return categories.map((category, index) => {
			if (selectedProps[category].src === "") return
			return <PreviewItem src={selectedProps[category].src} alt={"imagem de um dos " + category + " selecionado"} key={`preview-${index}`} />
		})
	}, [selectedProps])

	return (
		<main className="relative max-h-[19rem] md:max-h-[38rem] h-full max-w-[38rem] w-full aspect-square">
			{previewFiller()}
		</main>
	)
}

export default PreviewContianer


