import { NavLink, Outlet }  from "react-router-dom";

function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
            <header className="bg-white border-b shadow-sm">
                <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
                    <h1 className="font-semibold text-blue-600 text-lg">
                        User Registration System
                    </h1>
                    <div className="flex items-center gap-4 text-sm">
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/login'
                            className={({ isActive }) =>
                                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to='/register'
                            className={({ isActive }) =>
                                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                            }
                        >
                            Register
                        </NavLink>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 flex-1 min-h-0">
                <Outlet />
            </main>
        </div>
    );
}

export default AppLayout;