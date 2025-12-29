import { LoginForm } from "@/components/LoginForm/Login-form";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <LoginForm />
    </div>
  );
}
