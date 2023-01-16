import React from "react";
import Row from './Row/Row'

const Table = (props) => {
    const {data} = props;

    return (<table>
        <tbody>
            {data.map((row, index) => 
                <Row
                key={`key-${index}`}
                id={row.id}
                name={row.name}
                />
            )}
        </tbody>
    </table>
    )
}

export default Table;