import { useRef, useState } from 'react';
import { HeroBuscar } from "../components";

export const SearchPage = () => {
    const searchInputRef = useRef('');
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); 

    const handleSearch = () => {
        const inputValue = searchInputRef.current.value; 
        setSearchTerm(inputValue);
        console.log(`Buscando: ${inputValue}`);
        setSearchTriggered(true); 
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center mb-4">Buscar Héroe</h1>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            ref={searchInputRef} 
                            placeholder="Ingrese nombre del héroe..."
                        />
                        <button
                            className="btn btn-primary"
                            onClick={handleSearch}
                        >
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                {searchTriggered && (
                    <HeroBuscar
                        buscar={searchTerm} 
                        triggered={searchTriggered}
                    />
                )}
            </div>
        </div>
    );
};
