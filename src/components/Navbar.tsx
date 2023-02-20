
import { useEffect } from "react"
import { es } from "../i18n/spanish"
import { getRestaurants } from "../services/services"

export const Navbar = () => {
    useEffect(() => {
      getRestaurants()
    }, [])
    
  return (
    <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder={es.placeHolderSearchRestaurant}
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                {es.search}
                            </button>
                        </form>
                    </div>
                </nav>
  )
}

