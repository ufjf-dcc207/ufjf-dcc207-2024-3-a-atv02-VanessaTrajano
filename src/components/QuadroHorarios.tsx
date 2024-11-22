import LinhaTabela from "./LinhaTabela";

function QuadroHorarios() {
  return (
    <>
      <h2>Quadro de Horários</h2>

      <section>
        <table>
          <LinhaTabela cel1="" cel2="Segunda" cel3="Terça" cel4="Quarta" cel5="Quinta" cel6="Sexta" cel7="Sábado"/>
        </table>
        <div></div> {/* turmas com horarios livres */}
      </section>
    </>
  );
}

export default QuadroHorarios;
