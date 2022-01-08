import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import { Route, Routes } from "react-router-dom";

function App(props) {
	return (
		<div className="app-wrapper">
			<Header />
			<NavBar />
			<div className="app-wrapper-content">
				<Routes>
					<Route
						exact
						path="/profile"
						element={
							<Profile
								profilePage={props.state.profilePage}
								dispatch={props.dispatch}
							/>
						}
					/>
					<Route
						exact
						path="/dialogs"
						element={<Dialogs store={props.store} state={props.state.dialogsPage} />}
					/>
					<Route exact path="/news" element={<News />} />
					<Route exact path="/music" element={<Music />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
