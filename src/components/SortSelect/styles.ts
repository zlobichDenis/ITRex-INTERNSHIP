import styled from "styled-components";

export const SortWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const SortToggle = styled.div`
    position: absolute;
    right: 0px;
    overflow: hidden;
    border: none;
    width: 1px;
    height: 1px;
`;

export const SortList = styled.ul`
    display: none;
    position: absolute;
    right: 0px;
    width: 180px;
    background-color: #FFFF;
`;

export const SortListItem = styled.li`
    padding: 10px 20px;
    color: $text-title-color;
    cursor: pointer;
    font-family: Poppins;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
`;
