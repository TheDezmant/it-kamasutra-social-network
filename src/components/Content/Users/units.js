import styled from '@emotion/styled';

const StyledUsers = styled.div`
    width: 100%;
    background-color: aqua;
`;
const SelectedPage = styled.span`
    font-weight: ${({ fw }) => (fw !== undefined ? fw : '')};
    cursor: pointer;
`;

export { StyledUsers, SelectedPage };
