
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Leaf } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-agro-green/5 to-agro-green-light/10">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-agro-green to-agro-green-light flex items-center justify-center shadow-lg">
              <Leaf size={28} className="text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-agro-green to-agro-green-light bg-clip-text text-transparent font-montserrat">
            Plant Analytics
          </CardTitle>
          <CardDescription className="text-agro-gray-600">
            Monitoreo inteligente de cultivos con IA
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-agro-gray-700 font-medium">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="usuario@plantanalytics.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-agro-gray-200 focus:border-agro-green focus:ring-agro-green/20"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-agro-gray-700 font-medium">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-agro-gray-200 focus:border-agro-green focus:ring-agro-green/20"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-agro-green to-agro-green-light hover:from-agro-green/90 hover:to-agro-green-light/90 text-white font-medium py-2.5 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Iniciar sesión
            </Button>
          </form>
          <div className="text-center text-sm text-agro-gray-500 mt-4">
            <p>Demo: cualquier email y contraseña</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
