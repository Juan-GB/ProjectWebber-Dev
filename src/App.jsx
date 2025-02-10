import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {lazy, Suspense} from "react"

// Pages
const CustomizerPage = lazy(() => import("@pages/CustomizerPage"))
const HomePage = lazy(() => import("@pages/HomePage"))

// Components
import Layout from "./components/layout/Layout"

// Contexts
import {ThemeProvider} from "@contexts/ThemeContext"
import {MenuProvider} from "@contexts/MenuContext"

function App() {
	return (
		<ThemeProvider>
			<MenuProvider>
				<Router>
					<Layout>
						<Suspense fallback={<h2 className="text-white">Carregando...</h2>}>
							<Routes>
								<Route Component={HomePage} path="/" />
								<Route Component={CustomizerPage} path="/Customizer" />
							</Routes>
						</Suspense>
					</Layout>
				</Router>
			</MenuProvider>
		</ThemeProvider>
	)
}

export default App

