import "./App.scss";
import Header from "./components/header/Header";
import logo from "./assets/images/logo.png";
import TopicCard from "./components/topicCard/TopicCard";
import React, { useState } from "react";
import Footer from "./components/footer/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import Tabel from "./components/table/Table";
import Topic from "./components/topicCard/Topic";

const App = () => {
	const [isTable, setIsTable] = useState(false);

	return (
	<div className="App">
		<HashRouter>
			<Header logo={logo}></Header>

			<Routes>
				<Route exact path="table" element={<Tabel />}></Route>
				<Route exact path="/" element={<TopicCard />}></Route>
				<Route exact path="topicCard/:topicName" element={<Topic />}></Route>
				<Route
					path="*"
					element={
						<main
						style={{
							padding: "1rem",
							textAlign: "center",
							fontSize: "3rem",
						}}
						>
						<h1>404</h1>
						<h3>Not found</h3>
						</main>
					}
				/>
				<Route exact path="topicCard/:topicName" element={<Topic />}></Route>
			</Routes>

			<Footer onClickButtonTable={() => setIsTable(!isTable)}></Footer>
		</HashRouter>
	</div>
	);
}

export default App;
