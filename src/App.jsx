import "./App.css";
import image from'./assets/heron.png'
const etudiant={
  nom:"nahali",
  prenom:"nourelhouda",
  email:"nahalinour@gmail.com",
  telephone:"+216 22245145",
  filiere:"Genie Logiciel et Syetèmes d'Information",
  annéeDetude:"2",
  groupe:"GLSI 2",
  Ville:"MAhdia",
image: image


}
function App() {
  return (
    <div className="student-page">
      <h1>Fiche étudiant</h1>
<img src={etudiant.image} alt="photo etudiant" />
      <div className="student-info">
        <p><strong>Nom & Prénom :</strong> {etudiant.nom}{etudiant.prenom}</p>
        <p><strong>Email :</strong> {etudiant.email}</p>
        <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
        <p><strong>Filière :</strong> {etudiant.filiere}</p>
        <p><strong>Année d'étude :</strong> {etudiant.annéeDetude}</p>
        <p><strong>Groupe :</strong> {etudiant.groupe}</p>
        <p><strong>Ville :</strong> {etudiant.Ville}</p>
        <a href="mailto:nahalinour@gmail.com">contacter</a>
      </div>
    </div>
  );
}

export default App;