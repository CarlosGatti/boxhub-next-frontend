// SubMenuItem.js
import React, { ReactNode } from 'react';

import styled from 'styled-components';

const SubMenuItemWrapper = styled.div`
padding: 0.5rem 0.5rem 0.5rem 0.5rem;
cursor: pointer;
transition: background-color 0.3s ease, color 0.3s ease;
margin-bottom: 0.25rem; 

&:hover {

  background-color: var(--color-primary); 
  color: #ffffff;
}

&:last-child {
  margin-bottom: 0; 
}

span {
  display: block; 
  font-weight: 400;
  width: 100%; 
  font-size: var(--font-size-md);
  color: #3a393b; 
  transition: var(--transition);
}
`;

interface SubMenuItemProps {
    children: ReactNode;
    onClick?: () => void;
  }

  const SubMenuItem: React.FC<SubMenuItemProps> = ({ children, onClick }) => {
  return (
    <SubMenuItemWrapper onClick={onClick}>
      {children}
    </SubMenuItemWrapper>
  );
};

export default SubMenuItem;
