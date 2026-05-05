import React from 'react'

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);  
    return (
    <nav>
      <img src="/logo.png" alt="SQI College of ICT logo" />

      <ul>
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            onMouseEnter={() => item.children && setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a href="#">
              {item.label}
              {item.children && <span> ▾</span>}
            </a>

            {item.children && openMenu === item.label && (
              <ul>
                {item.children.map((child) => (
                  <li key={child}>
                    <a href="#">{child}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
