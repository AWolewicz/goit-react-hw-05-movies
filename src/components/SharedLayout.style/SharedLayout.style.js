import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NLink = styled(NavLink)`
  background-color: #222;
  border-radius: 50px;
  color: #fff;
  display: inline-block;
  font-weight: 300;
  padding: 1rem 2rem;
  text-decoration: none;

  &.active {
  background-color: green;
  }
`;