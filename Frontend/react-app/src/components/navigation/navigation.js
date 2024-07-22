import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/logo.png'
import { menuItems } from '../../utils/menuitems'
import { signout } from '../../utils/icons'

function navigation() {
  return (
    <NavStyled>
        <div className='user-con'>
            <img src={avatar} alt="user" />
            <div className='text'>
                <h2>Dhruv</h2>
                <p>Your Money</p>
            </div>
        </div>
        <div className='menu-items'>
            <ul>
                {menuItems.map((item) => {
                    return <li key={item.id}>
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                }
                )}
            </ul>
        </div>
        <div>
            {signout}  Sign out
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    .user-con{
        height: 80px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            background: #d4f8e8;
            box-shadow: 0px 1px 17px rgba(0, 100, 0, 0.2);
        }
            }
    }
`;

export default navigation