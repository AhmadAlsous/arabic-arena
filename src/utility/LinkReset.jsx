import { Link, NavLink } from 'react-router-dom';

export function LinkReset({ to, children, ...props }) {
  return (
    <Link
      to={to}
      {...props}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      {children}
    </Link>
  );
}

export function NavLinkReset({ to, children, ...props }) {
  return (
    <NavLink
      to={to}
      {...props}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      {children}
    </NavLink>
  );
}
