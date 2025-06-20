import { api, requestConfig } from "../utils/config";

// Register a new user
const register = async (data) => {
  const config = requestConfig("POST", data); 

  try {
    const res = await fetch(`${api}/users/register`, config);

    // Verifica se a resposta HTTP foi bem-sucedida (status 2xx)
    // Se a API retornar um status de erro (4xx, 5xx), a Promise do fetch não será rejeitada.
    // É preciso verificar 'res.ok' (true para status 200-299)
    if (!res.ok) {
      const errorData = await res.json(); 
      throw new Error(errorData.errors ? errorData.errors[0] : "Erro ao registrar usuário.");
    }

    const data = await res.json(); 

    if (data) { 
      localStorage.setItem("user", JSON.stringify(data));
      return data; 
    }

    return res; // Retorna a resposta original se não houver dados
  } catch (error) {
    console.error("Erro no registro:", error); // Use console.error para erros
    return { errors: error.message || "Erro desconhecido ao registrar." };
  }
};

//Logout an user
const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/login"; // Redireciona para a página de login
}

const authService = {
  register,
  logout,
};

export default authService;