import styled from "styled-components";

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;

    .not-found-area {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 4rem;
    }
    .not-found-area > span {
        font-size: 1.2rem;
        font-weight: 500;
    } 
`