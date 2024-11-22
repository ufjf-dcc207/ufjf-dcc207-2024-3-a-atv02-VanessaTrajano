import LinhaTabela from "./LinhaTabela";

function QuadroHorarios() {
  return (
    <>
      <h2>Quadro de Horários</h2>

      <section>
        <table>
          <LinhaTabela cel1="" cel2="Segunda" cel3="Terça" cel4="Quarta" cel5="Quinta" cel6="Sexta" cel7="Sábado"/>
          <LinhaTabela cel1="07:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="08:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="09:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="10:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="11:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="12:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="13:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="14:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="15:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="16:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="17:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="18:00" cel2="" cel3="" cel4="" cel5="" cel6="" cel7="" />
          <LinhaTabela cel1="19:00" cel2="DCC207-A" cel3="AAA000-X" cel4="BBB000-X" cel5="AAA000-X" cel6="" cel7="" />
          <LinhaTabela cel1="20:00" cel2="DCC207-A" cel3="AAA000-X" cel4="BBB000-X" cel5="AAA000-X" cel6="" cel7="" />
          <LinhaTabela cel1="21:00" cel2="BBB000-X" cel3="CCC000-X" cel4="" cel5="DCC207-A" cel6="AAA000-X" cel7="" />
          <LinhaTabela cel1="22:00" cel2="BBB000-X" cel3="CCC000-X" cel4="" cel5="DCC207-A" cel6="AAA000-X" cel7="" />
        </table>
        <div></div> {/* turmas com horarios livres */}
      </section>
    </>
  );
}

export default QuadroHorarios;
