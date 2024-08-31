import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "HTML",
      nivel: "Básico",
      color:"red"
    },
    {
      titulo: "Node JS",
      nivel: "Noob",
      color:"blue"
    },
    {
      titulo: "Python",
      nivel: "Pro",
      color:"yellow"
    }
  ]
  return (
    <div className="skills">
      <h2>Habilidades</h2>
                <Card dados={habilidades}/>
    </div>
  );
}

export default Skills;