import styled from "@emotion/styled";

export const MovieCard = styled.article`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px);
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    h2 a {
        margin-top: 12px;
        font-size: clamp(1rem, 2vw, 1.5rem);
    }

    p {
        font-size: clamp(0.8rem, 1.5vw, 1rem);
        margin-top: 8px;
        flex-grow: 1;
    }

    ul {
        display: flex;
        gap: 8px;
        margin-top: 8px;
        flex-wrap: wrap;
        font-size: clamp(0.7rem, 1vw, 0.9rem);
    }
`;
