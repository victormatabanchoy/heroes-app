import { Link } from "react-router-dom";
import '../../styles/HeroCardBuscar.css';


export const HeroCardBuscar = ({
    id,
    name,
    images,
    powerstats,
    appearance
}) => {
    return (
        <div className="col mb-4">
            <div className="card shadow-lg border-0 rounded-3 hero-card">
                <div className="card-img-container">
                    <img src={images.md} className="card-img-top" alt={`${name}`} />
                </div>
                <div className="card-body p-4">
                    <h5 className="card-title text-center mb-3">{name}</h5>
                    <div className="row">
                        <div className="col-6">
                            <h6 className="card-subtitle mb-2 text-muted text-center">Power Stats</h6>
                            <ul className="list-unstyled text-center">
                                <li><strong>Intelligence:</strong> {powerstats.intelligence}</li>
                                <li><strong>Strength:</strong> {powerstats.strength}</li>
                                <li><strong>Speed:</strong> {powerstats.speed}</li>
                                <li><strong>Durability:</strong> {powerstats.durability}</li>
                                <li><strong>Power:</strong> {powerstats.power}</li>
                                <li><strong>Combat:</strong> {powerstats.combat}</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <h6 className="card-subtitle mb-2 text-muted text-center">Appearance</h6>
                            <ul className="list-unstyled text-center">
                                <li><strong>Gender:</strong> {appearance.gender}</li>
                                <li><strong>Race:</strong> {appearance.race}</li>
                                <li><strong>Eye Color:</strong> {appearance.eyeColor}</li>
                                <li><strong>Hair Color:</strong> {appearance.hairColor}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to={`/hero/${id}`} className="btn btn-outline-primary btn-block">
                            Más info
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
