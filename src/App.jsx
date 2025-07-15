import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./components/context/AuthContext";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Students from "./components/Student/Students";
import StudentForm from "./components/Student/StudentForm";
import Teachers from "./components/Teacher/Teachers";
import TeacherForm from "./components/Teacher/TeacherForm";
import Groups from "./components/Groups/Groups";
import GroupForm from "./components/Groups/GroupForm";
import Subjects from "./components/Subjects/Subjects";
import SubjectForm from "./components/Subjects/SubjectForm";
import TeacherGroups from "./components/Teacher/TeacherGroups";
import ApplyEvaluationForm from "./components/Evaluations/ApplyEvaluationForm";
import EvaluationForm from "./components/Evaluations/EvaluationForm";
import CrearUsuario from "./components/CrearUsuario";
import LobbyEvents from "./components/LobbyEvents";
import CalendarEvents from "./components/calendarEvents/CalendarEvents";
import CalendarSuggestions from "./components/calendarSuggestions/CalendarSuggestions";
import CalendarAssignments from "./components/calendarAssignments/CalendarAssignments";
import TeacherScheduler from "./components/Teacher/TeacherScheduler";
import Game from "./components/Game";
import CrearAula from "./components/CrearAula";
import CrearCurso from "./components/CrearCurso";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {isAuthenticated ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="CrearUsuario" element={<CrearUsuario />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="teachers/add" element={<TeacherForm />} />
          <Route path="teachers/edit/:id" element={<TeacherForm />} />
          <Route path="teachers/teacherGroups/:id" element={<TeacherGroups />} />
          <Route path="teacher/teacherScheduler" element={<TeacherScheduler />} />
          <Route path="students" element={<Students />} />
          <Route path="students/add" element={<StudentForm />} />
          <Route path="students/edit/:id" element={<StudentForm />} />
          <Route path="groups" element={<Groups />} />
          <Route path="groups/add" element={<GroupForm />} />
          <Route path="groups/edit/:id" element={<GroupForm />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="subjects/add" element={<SubjectForm />} />
          <Route path="subjects/edit/:id" element={<SubjectForm />} />
          <Route path="evaluations/apply/edit/:id" element={<ApplyEvaluationForm />} />
          <Route path="evaluations/add" element={<EvaluationForm />} />
          <Route path="horarios" element={<LobbyEvents />} />
          <Route path="horarios/nuevo" element={<CalendarEvents />} />
          <Route path="calendarAssignments" element={<CalendarAssignments />} />
          <Route path="calendarSuggestions" element={<CalendarSuggestions />} />
          <Route path="game" element={<Game />} />
          <Route path="CrearAula" element={<CrearAula />} />
          <Route path="CrearCurso" element={<CrearCurso />} />
        </Route>
      ) : (
        // Si no está autenticado y accede a cualquier ruta que no sea /login → redirige
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

export default App;
