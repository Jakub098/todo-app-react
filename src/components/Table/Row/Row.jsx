import React from "react";

const Row = (props) => {
    const {id, name} = props;

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
        </tr>
    )
}

export default Row;