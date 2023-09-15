import styled from "styled-components";

export const InputBar = styled.input`
    color: var(--white);
    font-size: 1rem;
    width: 80%;
    background: none;
    border: none;
    border-bottom: 2px solid var(--dark-blue);
    padding: .3rem .5rem;

    &::placeholder {
        color: var(--white);
    }
`