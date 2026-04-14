// src/components/BottomNavbar.jsx
import { NavLink } from "react-router-dom";
import { Home, Calendar, Users, Mail, Book } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/events", label: "Events", icon: Calendar },
  { to: "/team", label: "Team", icon: Users },
  { to: "/contact", label: "Contact", icon: Mail },
   { to: "/magazine", label: "Magazine", icon: Book },
];

export default function Navbar() {
  return (
    <div style={wrapper}>
      <div style={container}>
        {items.map((item, i) => (
          <NavItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

function NavItem({ to, label, icon: Icon }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...item,
        color: isActive ? "#00ccff" : "#aaa",
      })}
    >
      {({ isActive }) => (
        <>
          <div
            style={{
              ...iconWrapper,
              background: isActive ? "rgba(0,204,255,0.15)" : "transparent",
              boxShadow: isActive
                ? "0 0 15px rgba(0,204,255,0.6)"
                : "none",
            }}
          >
            <Icon size={20} />
          </div>
          <span style={labelStyle}>{label}</span>
        </>
      )}
    </NavLink>
  );
}

const wrapper = {
  position: "fixed",
  bottom: 20,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 20,
};

const container = {
  display: "flex",
  alignItems: "center",
  gap: "30px",
  padding: "12px 24px",
  borderRadius: "40px",
  background: "rgba(15,15,20,0.6)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "0.7rem",
  transition: "all 0.3s ease",
};

const iconWrapper = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "4px",
  transition: "all 0.3s ease",
};

const labelStyle = {
  fontSize: "0.7rem",
  letterSpacing: "0.5px",
};