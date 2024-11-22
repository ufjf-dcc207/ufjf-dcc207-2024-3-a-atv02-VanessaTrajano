import LinhaTabela from "./LinhaTabela";
import "./QuadroHorarios.css";

function QuadroHorarios() {
  return (
    <div className="container">
      <h2 className="titulo-quadro">Quadro de Horários</h2>

      <section className="quadro">
        <table>
          <LinhaTabela cinza={false} cel1="" cel2="Segunda" cel3="Terça" cel4="Quarta" cel5="Quinta" cel6="Sexta" cel7="Sábado"/>
          <LinhaTabela cinza={true} cel1="07:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={false} cel1="08:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={true} cel1="09:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={false} cel1="10:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={true} cel1="11:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={false} cel1="12:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={true} cel1="13:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={false} cel1="14:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={true} cel1="15:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={false} cel1="16:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={true} cel1="17:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={false} cel1="18:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cinza={true} cel1="19:00" cel2="DCC207-A" cel3="AAA000-X" cel4="BBB000-X" cel5="AAA000-X" cel6="" cel7="" />
          <LinhaTabela cinza={false} cel1="20:00" cel2="DCC207-A" cel3="AAA000-X" cel4="BBB000-X" cel5="AAA000-X" cel6="" cel7="" />
          <LinhaTabela cinza={true} cel1="21:00" cel2="BBB000-X" cel3="CCC000-X" cel4="" cel5="DCC207-A" cel6="AAA000-X" cel7="" />
          <LinhaTabela cinza={false} cel1="22:00" cel2="BBB000-X" cel3="CCC000-X" cel4="" cel5="DCC207-A" cel6="AAA000-X" cel7="" />
        </table>
        <div className="horario-livre">
          <h3>Turmas com Horário Livre</h3>
          <p>EADXXX000-X</p>
        </div>
      </section>
    </div>
  );
}

export default QuadroHorarios;
