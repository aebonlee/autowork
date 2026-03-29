import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthGuard from '../components/AuthGuard';
import AdminGuard from '../components/AdminGuard';

const Home = lazy(() => import('../pages/Home'));
const IntroPage = lazy(() => import('../pages/intro/IntroPage'));
const LessonCategories = lazy(() => import('../pages/lessons/LessonCategories'));
const LessonList = lazy(() => import('../pages/lessons/LessonList'));
const LessonDetail = lazy(() => import('../pages/lessons/LessonDetail'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Settings = lazy(() => import('../pages/Settings'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const Board = lazy(() => import('../pages/community/Board'));
const BoardDetail = lazy(() => import('../pages/community/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/community/BoardWrite'));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback() {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/lessons" element={<LessonCategories />} />
            <Route path="/lessons/:categorySlug" element={<LessonList />} />
            <Route path="/lessons/:categorySlug/:lessonSlug" element={<LessonDetail />} />
            <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
            <Route path="/settings" element={<AuthGuard><Settings /></AuthGuard>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/community/board" element={<Board />} />
            <Route path="/community/board/:id" element={<BoardDetail />} />
            <Route path="/community/board/write" element={<AuthGuard><BoardWrite /></AuthGuard>} />
            <Route path="/admin/*" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
