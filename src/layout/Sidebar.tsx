import styled from "styled-components";

/**
 * @description
 * @returns
 */

type Props = {
    title: string;
};

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;
`;

function Sidebar(props: Props) {
    return (
        <SidebarContainer>
            <h2>{props.title}</h2>
        </SidebarContainer>
    );
}

export default Sidebar;
