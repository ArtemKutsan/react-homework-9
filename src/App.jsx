import './App.css';
import DynamicForm from './components/DynamicForm';

function App() {
  return (
    <main>
      <h1 className="container">React Homework 8</h1>

      <section>
        <div className="container">
          <h2>Задача 1: Приложение с react-hook-form</h2>
          <DynamicForm />
        </div>
      </section>
    </main>
  );
}

export default App;
