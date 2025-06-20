import "./Auth.css";

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { register, reset } from "../../slices/authSlice";


const Register = () => {
  // 1. Gerenciamento de Estado para os Inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const {user, loading, error} = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user); 

    dispatch(register(user));
  };

  //Clean all auth states 
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);



  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver fotos e vídeos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>

        <input type="text" 
        placeholder="Nome de usuário" 
        onChange = {(e) => setName(e.target.value)} 
        value={name || ""} // Conecta o input ao estado 'name'
        />

        <input
          type="email"
          placeholder="E-mail"
          required
          value={email || ""} // Conecta o input ao estado 'email'
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado quando o valor muda
        />

        <input
          type="password"
          placeholder="Senha"
          required
          value={password || ""} // Conecta o input ao estado 'password'
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado quando o valor muda
        />

        <input
          type="password"
          placeholder="Confirme a senha"
          required
          value={confirmPassword || ""} // Conecta o input ao estado 'confirmPassword'
          onChange={(e) => setConfirmPassword(e.target.value)} // Atualiza o estado quando o valor muda
        />

        {!loading && <input type = "submit" value = "Cadastrar"/>}
        {loading && <input type = "submit" value = "Aguarde..." disabled/>}
        {error && <Message msg={error} type="error" />}

      </form> 

      <p>
        Já tem uma conta? <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
};

export default Register;