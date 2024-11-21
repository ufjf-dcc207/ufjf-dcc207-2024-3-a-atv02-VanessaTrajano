function Header() {
  return (
    <>
      <label>
        Acesso rápido: <br />
        <select id="opcoes" name="menu">
          <option value="aaaaa">aaaaa</option>
          <option value="bbbbb">bbbbb</option>
          <option value="ccccc">ccccc</option>
          <option value="dddddd">dddddd</option>
        </select>
      </label>

      <p>[Usuário: 00000000000][Minhas Mensagens][Perfil Atual: 202503298][Trocar Perfil][Sair]</p>
      <nav>
        <ul>
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
    </>
  );
}

export default Header;
