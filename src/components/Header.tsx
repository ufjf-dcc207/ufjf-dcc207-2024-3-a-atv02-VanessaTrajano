import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="bloco1">
        <label>
          Acesso rápido: <br />
          <select id="opcoes" name="menu">
            <option value="aaaaa">aaaaa</option>
            <option value="bbbbb">bbbbb</option>
            <option value="ccccc">ccccc</option>
            <option value="dddddd">dddddd</option>
          </select>
        </label>
        <p>
          [Usuário: 00000000000][Minhas Mensagens][Perfil Atual:
          202503298][Trocar Perfil][Sair]
        </p>
      </div>

      <nav>
        <ul className="navigation">
          <li>Acadêmico</li>
          <li>Bolsas</li>
          <li>Biblioteca</li>
          <li>Estágios</li>
          <li>Dados dos Aluno</li>
          <li>Email Institucional</li>
          <li>Sites</li>
          <li>Eventos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
