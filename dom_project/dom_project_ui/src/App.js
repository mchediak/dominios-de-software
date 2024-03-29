import "./App.css";
import Button from "./components/Button";
import React, { useState } from "react";
import QuestionItem from "./components/QuestionItem";
import Dialog from "./components/Dialog";


// LEMBRETES:
// A gente precisa de uma tela de cadastro e de login.
// Para o cadastro, cada professor vai precisar de CPF, Nome, E-mail, Senha, Cargo e na hora de logar vai preicsar do E-mail e da Senha.
// Deve ter uma tela também para o professor pesquisar por questões.

function App() {
  const [questions, setQuestions] = useState([
    {
      code: 2605,
      name: "Teste",
      question: "Qual o nome do stone?",
      subject: "História",
      subjectType: "Human",
      reviewed: true,
    },
    {
      code: 2812,
      name: "Teste 2",
      question: "Qual a idade do stone?",
      subject: "Matemática",
      subjectType: "Exact",
      reviewed: false,
    },
  ]);

  // Cada questão será objetiva com 5 alternativas, sendo só uma correta. Vou colocar um exemplo meia boca aqui só para ilustrar:
  // {
  //  code: 2812,
  //  name: "Teste 2",
  //  question: "Qual a idade do stone?",
  //  option1: "12",
  //  option2: "13",
  //  option3: "20",
  //  option4: "21",
  //  option5: "28",
  //  answer: "21",
  //  subject: "Matemática",
  //  subjectType: "Exact",
  //  reviewed: false,
  // }
  //
  // 

  //TODO Fazer setQuestions após salvar

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((previous) => !previous);
  };

  return (
    <div className="app">
      <header className="app-header">
        <p className="header" style={{ color: "white" }}>
          Identificador único de questões
        </p>
      </header>
      <div className="action-buttons">
        <Button label="Adicionar" onClick={toggleModal} />
        {isModalOpen ? (
          <Dialog
            isOpen={isModalOpen}
            onCancel={toggleModal}
            onSave={toggleModal}
            existingQuestions={questions}
          />
        ) : null}
      </div>
      <div className="questions-list">
        {questions.map((item, index) => {
          return (
            <div key={index}>
              <QuestionItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
