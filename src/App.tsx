import './App.css';
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Employees } from './features/employees/Employees';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './features/ecommerceDashboard/Dashboard';
import { Orders } from './features/orders/Orders';
import Calendar from './features/calendar/Calendar';
import { Kanban } from './features/kanban/Kanban';

import { FaHome } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaList } from "react-icons/fa6";





function Dock() {
  let mouseX = useMotionValue(Infinity);

  const items = [
    { name: <FaHome />, path: "/" },
    { name: <CiShoppingCart />, path: "/orders" },
    { name: <FaPeopleRoof /> , path: "/employees" },
    { name: <FaCalendar />, path: "/calendar" },
    { name: <FaList />, path: "/kanban" }
  ];

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="z-40 mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3"
    >
      {items.map((item, i) => (
        <AppIcon mouseX={mouseX} key={i} name={item.name} path={item.path} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, name, path }: { mouseX: MotionValue<number>, name: React.ReactNode, path: string }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link to={path}>
      <motion.div
        ref={ref}
        style={{ width }}
        className="z-50 aspect-square w-10 rounded-full bg-gray-400 flex items-center justify-center"
      >
        {name}
      </motion.div>
    </Link>
  );
}

function App() {
  return (
    <div className="App">


      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>

      <div className='inline-block fixed bottom-0 justify-center left-[50%] -translate-x-1/2 mb-5'>
        <Dock />
      </div>
    </div>
  );
}

export default App;
