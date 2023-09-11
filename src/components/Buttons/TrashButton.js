import styled from "styled-components";

export const TrashButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.4rem;
    color: var(--white);
    
    &:hover {
        color: var(--red);
    }
`