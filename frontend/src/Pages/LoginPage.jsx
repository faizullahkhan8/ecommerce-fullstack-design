import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("user@example.com");
    const [password, setPassword] = useState("password");
    const { login, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await login({ email, password });
        if (user) {
            navigate(from, { replace: true });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
             <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                 <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                 <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                         <label className="block text-gray-700 mb-1">Email</label>
                         <input 
                            type="email" 
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-primary"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                         />
                     </div>
                     <div>
                         <label className="block text-gray-700 mb-1">Password</label>
                         <input 
                            type="password" 
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-primary"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                         />
                     </div>
                     <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
                     >
                         {loading ? "Logging in..." : "Login"}
                     </button>
                 </form>
                 <div className="mt-4 text-center text-sm">
                     Don't have an account? <Link to="/register" className="text-primary hover:underline">Register</Link>
                 </div>
             </div>
        </div>
    );
};

export default LoginPage;
