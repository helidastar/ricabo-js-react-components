import WelcomeCard from '../Components/WelcomeCard';
import Counter from '../Components/Counter';
import StudentInfo from '../Components/StudentInfo';

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 40, fontSize: "3rem", letterSpacing: 2 }}>HELLO WORLD</h1>
      <p style={{ textAlign: "center", marginBottom: 40, fontSize: "1.2rem" }}>Welcome to my Website</p>
      <div className="main-container">
        <div className="card">
          <WelcomeCard name="Charity" />
        </div>
        <div className="card">
          <Counter />
        </div>
        <div className="card">
          <StudentInfo />
        </div>
      </div>
    </div>
  );
}
