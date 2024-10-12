import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      {" "}
      {}
      <div className="card shadow-sm h-100 border-0 rounded-3">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={heroImageUrl}
              className="card-img rounded-start"
              alt={superhero}
            />
          </div>

          <div className="col-8 d-flex flex-column">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title text-primary"> {superhero} </h5>
                <p className="card-text text-muted"> {alter_ego} </p>

                {alter_ego !== characters && (
                  <p className="text-secondary">{characters}</p>
                )}

                <p className="card-text">
                  <small className="text-muted">
                    First Appearance: {first_appearance}
                  </small>
                </p>
              </div>
              <Link to={`/hero/${id}`} className="btn btn-outline-primary mt-2">
                Más info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
