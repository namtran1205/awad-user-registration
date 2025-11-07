import { Outlet, Link, NavLink } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <nav className="container mx-auto px-4 h-14 flex items-center gap-4">
          <Link to="/" className="font-semibold">User Registration</Link>
          <NavLink to="/login" className="text-sm text-gray-600 hover:text-black">Login</NavLink>
          <NavLink to="/register" className="text-sm text-gray-600 hover:text-black">Sign Up</NavLink>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
