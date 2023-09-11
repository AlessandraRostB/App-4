import './App.css';
import Imagens from "../assets/imagens(1) - Copia.jpg";

function Cadastrar() {
    return(
        <>
            <div class="d-flex mb-3">
                <h1>Cadastrar</h1>
                <div>
                    <img src={Imagens} alt="Saude"></img> 
                </div>
                <form class="center-form" onSubmit={handleSubmit}>
                    <label for="exampleInputEmail1"  id="exampleInputEmail" class="form-label fs-1">Nome Completo:</label>
                    <input type="text-center" name="nome completo" placeholder="nome completo" onChange={handleInputChange} value={formValues.nomecompleto}></input>
                    <label for="exampleInputSenha" id="exampleInputSenha" class="form-label fs-1">E-mail:</label>
                    <input type="text-center" name="email" placeholder="email" onChange={handleInputChange} value={formValues.email}></input>
                    <label for="exampleInputSenha" id="exampleInputSenha" class="form-label fs-1">Senha:</label>
                    <input type="text-center" name="senha" placeholder="senha" onChange={handleInputChange} value={formValues.senha}></input>
                    <label for="exampleInputSenha" id="exampleInputSenha" class="form-label fs-1">Confirmar senha:</label>
                    <input type="text-center" name="confirmarsenha" placeholder="confirmarsenha" onChange={handleInputChange} value={formValues.confrimarsenha}></input>
                <button type='submit'>Entrar</button>
                </form>
            </div>
        </>
    
    )
}

export default Cadastrar;