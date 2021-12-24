import styled from 'styled-components';

type TabsProps = {
  isDisplay: boolean,
}

export const Tabs = styled.div<TabsProps>`
    display: ${({ isDisplay }) => isDisplay ? "flex" : "none"};
    flex-direction: row;
    justify-content: center;
    gap: 24px;

    @media (min-width: 1920px) {
        justify-content: flex-start;
        gap: 56px;
    }

    @media (min-width: 768px) and (max-width: 1919px) {
        justify-content: flex-start;
        gap: 12px;
    }
`;