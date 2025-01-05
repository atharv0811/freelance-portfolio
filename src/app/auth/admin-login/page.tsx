import AdminLoginForm from "./_components/admin-login-form"

const AdminLogin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-6">Admin Login</h1>
                <AdminLoginForm />
            </div>
        </div>
    )
}

export default AdminLogin