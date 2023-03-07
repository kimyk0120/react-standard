/**
 * @description
 * @returns
 */

type Props = {
    title: string;
};

function Sidebar(props: Props) {
    return <h1>{props.title}</h1>;
}

export default Sidebar;
