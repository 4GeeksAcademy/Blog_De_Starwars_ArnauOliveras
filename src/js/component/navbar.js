import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand navbar-light bg-light px-5">
			<Link to="/">
				<p className="navbar-brand">
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/57A0EA5BFA41EA7991E8629C6563BC178462B0399E733A6249F8150F93ACFED8/scale?width=600&aspectRatio=1.78&format=webp" width="100" className="d-inline-block align-top" alt="Logo" />
				</p>
			</Link>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ms-auto">
					<li className="nav-item">
						<div className="dropdown">
							<button className="btn btn-primary dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites <p className="bg-secondary px-1 mb-0 ms-2 rounded-3">{store.favorites.length}</p>
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								{store.favorites.length === 0 ? (
									<li><span className="dropdown-item">(empty)</span></li>
								) : (
									store.favorites.map((favorite, index) => (
										<li key={index} className="d-flex justify-content-between align-items-center">
											<Link to={"/" + favorite.type + "/" + favorite.uid} >
												<span className="dropdown-item btn btn-sm btn-light">{favorite.name}</span>
											</Link>
											<button className="btn btn-sm btn-light ms-2" onClick={() => actions.removeFavorites(favorite)}><i className="fa fa-trash"></i></button>
										</li>
									))
								)}
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};