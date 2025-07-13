//main.jsx
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Layout from './components/Layout';
import Students from './components/Student/Students';
import StudentForm from './components/Student/StudentForm';
import Teachers from './components/Teacher/Teachers';
import TeacherForm from './components/Teacher/TeacherForm';
import Groups from './components/Groups/Groups';
import GroupForm from './components/Groups/GroupForm';
import Subjects from './components/Subjects/Subjects';
import SubjectForm from './components/Subjects/SubjectForm';
import TeacherGroups from './components/Teacher/TeacherGroups';
import ApplyEvaluationForm from './components/Evaluations/ApplyEvaluationForm';
import EvaluationForm from './components/Evaluations/EvaluationForm';
import { AuthProvider } from './components/context/AuthContext';
import PrivateRoute from "./components/routes/PrivateRoute";
import Login from "./components/Login";
import CrearUsuario from "./components/CrearUsuario";
import LobbyEvents from './components/LobbyEvents';
import CalendarEvents from "./components/calendarEvents/CalendarEvents";


import CalendarSuggestions from "./components/calendarSuggestions/CalendarSuggestions";
import CalendarAssignments from "./components/calendarAssignments/CalendarAssignments";
import TeacherScheduler from "./components/Teacher/TeacherScheduler";

import Game from "./components/Game";
import CrearAula from './components/CrearAula';
import CrearCurso from './components/CrearCurso';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="CrearUsuario" element={<CrearUsuario />} />
            <Route path="login" element={<Login />} />
            <Route path="teachers" element={<PrivateRoute><Teachers /> </PrivateRoute>} />
            <Route path="teachers/add" element={<TeacherForm />} />
            <Route path="teachers/edit/:id" element={<TeacherForm />} />
            <Route path="teachers/teacherGroups/:id" element={<PrivateRoute><TeacherGroups /> </PrivateRoute>} />
            <Route path="teacher/teacherScheduler" element={<TeacherScheduler />} />
            <Route path="students" element={<PrivateRoute> <Students /> </PrivateRoute>} />
            <Route path="students/add" element={<StudentForm />} />
            <Route path="students/edit/:id" element={<StudentForm />} />
            <Route path="groups" element={<PrivateRoute> <Groups /> </PrivateRoute>} />
            <Route path="groups/add" element={<GroupForm />} />
            <Route path="groups/edit/:id" element={<GroupForm />} />
            <Route path="subjects" element={<PrivateRoute> <Subjects /> </PrivateRoute>} />
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
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);