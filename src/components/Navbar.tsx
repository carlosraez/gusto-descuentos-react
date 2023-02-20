import { es } from "../i18n/spanish"

export const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="hola"
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
