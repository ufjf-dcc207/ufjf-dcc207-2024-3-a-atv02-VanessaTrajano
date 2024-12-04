import "./LinhaTabela.css";

type Props = {
  cel1: string;
  cel2: string;
  cel3: string;
  cel4: string;
  cel5: string;
  cel6: string;
  cel7: string;
  cinza: boolean;
};

function LinhaTabela({
  cel1,
  cel2,
  cel3,
  cel4,
  cel5,
  cel6,
  cel7,
  cinza,
}: Props) {
  return (
    <>
        <tr className={cinza ? "linha cinza" : "linha"}>
          <td>{cel1}</td>
          <td>{cel2}</td>
          <td>{cel3}</td>
          <td>{cel4}</td>
          <td>{cel5}</td>
          <td>{cel6}</td>
          <td>{cel7}</td>
        </tr>
    </>
  );
}

export default LinhaTabela;
