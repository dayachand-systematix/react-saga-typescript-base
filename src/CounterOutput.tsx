import * as React from 'react'
import Chip from '@material-ui/core/Chip';
interface ICounterProps {
    counter: number
}
const counterOutput = (props: ICounterProps) => {
    return (
        <div>
            <Chip color="primary" label={props.counter} />
        </div>
    )
}
export default counterOutput