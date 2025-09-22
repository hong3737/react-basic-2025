import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button`
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    background: ${({ theme, variant }) =>
        variant === "tab"
            ? theme.colors.primary
            : variant === "login"
            ? theme.colors.secondary
            : "#ccc"};

    color: white;
`;

function Button({ children, variant, ...props }) {
    return (
        <StyledButton variant={variant} {...props}>
            {children}
        </StyledButton>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["tab", "login", "default"]), // 이 값만 허용
};

Button.defaultProps = {
    variant: "default",
};

export default Button;
