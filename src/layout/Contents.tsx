/**
 * @description
 * @returns
 */
type Props = {
    title: string;
};

function Contents(props: Props) {
    return <h1>{props.title}</h1>;
}

export default Contents;
