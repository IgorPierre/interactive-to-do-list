import { styled } from "styled-components";

export const TaskCard = styled.div`
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 100%;
    margin: .8rem;
    padding: .5rem 1rem;

    & span::first-letter {
        text-transform: uppercase;
    }

    & input[type="checkbox"] {
        color: var(--white);
        margin-right: .5rem;
    }

    .div-aux {
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .finished {
        background-color: var(--green);
    }

    .finished::before {
        content: "✔";
        color: var(--white);
    }
`
