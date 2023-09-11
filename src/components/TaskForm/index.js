import styled from "styled-components";

export const TaskForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: .8rem;
    margin-bottom: 2rem;

    & input {
        color: var(--white);
        font-size: 1rem;
        width: 80%;
        background: none;
        border: none;
        border-bottom: 2px solid var(--dark-blue);
        padding: .3rem .5rem;
    }
    & input::placeholder {
        color: var(--white);
    }
`