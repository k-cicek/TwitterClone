import React from "react";

function SideLink({ name, Icon, active, onMenuItemClick }) {
  const isActive = active === name;
  return (
    <li className="group" onClick={() => onMenuItemClick(name)}>
      <a
        href={name.toLowerCase()}
        className="cursor-pointer block text-xl mb-2 pointer-events-none"
      >
        <div className="inline-block">
          <div
            className={`flex items-center group-hover:bg-gray-light group-hover:font-bold rounded-full pl-3 pr-8 py-3
          ${isActive ? "font-bold" : ""}
          `}
          >
              <Icon />
            <span className="ml-4">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default SideLink;
