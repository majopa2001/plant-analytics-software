
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular delay de autenticación
    await new Promise(resolve => setTimeout(resolve, 1000));

    const success = login(username, password);
    
    if (success) {
      toast({
        title: "¡Bienvenido!",
        description: "Has iniciado sesión correctamente.",
      });
    } else {
      toast({
        title: "Error de autenticación",
        description: "Usuario o contraseña incorrectos.",
        variant: "destructive"
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-agro-green via-agro-green-light to-agro-green-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-agro-green-bright/20 rounded-full blur-xl animate-pulse-soft delay-1000"></div>
      
      <Card className="w-full max-w-md relative z-10 backdrop-blur-lg bg-white/95 border-0 shadow-2xl">
        <CardHeader className="space-y-4 text-center pb-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-agro-green to-agro-green-light flex items-center justify-center shadow-lg">
              <Leaf size={32} className="text-white" />
            </div>
            <div className="font-montserrat font-bold text-3xl bg-gradient-to-r from-agro-green to-agro-green-light bg-clip-text text-transparent">
              Plant Analytics
            </div>
          </div>
          <CardTitle className="text-2xl font-montserrat text-agro-gray-800">Acceso al Sistema</CardTitle>
          <CardDescription className="text-agro-gray-600">
            Ingresa tus credenciales para acceder al dashboard de monitoreo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-agro-gray-700 font-medium">Usuario</Label>
              <Input
                id="username"
                type="text"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="h-12 border-agro-gray-300 focus:border-agro-green focus:ring-agro-green/20 rounded-xl transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-agro-gray-700 font-medium">Contraseña</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 pr-12 border-agro-gray-300 focus:border-agro-green focus:ring-agro-green/20 rounded-xl transition-all duration-200"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-12 w-12 text-agro-gray-500 hover:text-agro-green"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </Button>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-agro-green to-agro-green-light hover:from-agro-green-dark hover:to-agro-green text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5" 
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Iniciando sesión...
                </div>
              ) : (
                "Iniciar Sesión"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
