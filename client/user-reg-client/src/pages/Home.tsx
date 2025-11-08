import { Link } from "react-router-dom"
import { ArrowRight} from "lucide-react"

export default function Home() {
  return (
    <div className="flex-1 flex flex-col min-h-0 px-4 py-25">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-10 min-h-0">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-balance mb-6">
            User{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Registration
            </span>{" "}
            System
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance mb-6">Secure, fast, and easy user authentication for your application</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/50"
            >
              Create Account <ArrowRight size={20} />
            </Link>

            <Link
              to="/login"
              className="px-8 py-3 bg-slate-800 text-white rounded-lg font-semibold border border-blue-400/30 hover:border-blue-400/60 hover:bg-slate-700 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}
