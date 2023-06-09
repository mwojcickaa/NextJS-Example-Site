import React from 'react'
import { default as MuiTableBody } from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import CancelIcon from '@mui/icons-material/Cancel'
import Image from '@/components/Image/Image'
import style from './TableBody.module.sass'
import { Box } from '@mui/material'


function createData(
    id: number,
    title: string,
    price: number,
    quantity: number,
    carbs: number,
    protein: number,
) {
    return { id, title, price, quantity, carbs, protein };
}

const rows = [
    createData(1, 'Kolendra siewna', 159, 6.0, 24, 4.0),
    createData(2, 'Koper włoski', 237, 9.0, 37, 4.3),
    createData(3, 'Kolendra siewna', 262, 16.0, 24, 6.0),
    createData(4, 'Kolendra siewna', 305, 3.7, 67, 4.3),
    createData(5, 'Koper włoski', 356, 16.0, 49, 3.9),
];


const CustomTableCell = ({ text }: CustomTableCellProps) => {
    return <TableCell className={style.row}>
        {text}
    </TableCell>
}

const cancelIconOnClick = () => {
    console.log("click")
}


export default function TableBody() {
    return (
        <MuiTableBody>
            {rows.map((row) => (
                <TableRow
                    key={row.id}
                >
                    <TableCell className={`${style.row} ${style.left}`}>
                        <Box className={style.product}>
                            <Image
                                src="/shop/FenneSeeds.png"
                                alt="test" />
                            <Box className={style.description}>
                                {row.title}
                                <span>1 kg</span>
                            </Box>
                        </Box>
                    </TableCell>
                    <CustomTableCell text={`${row.price} zł`} />
                    <CustomTableCell text={row.quantity} />
                    <CustomTableCell text={`${row.price * row.quantity} zł`} />
                    <TableCell className={`${style.row}`}>
                        <CancelIcon
                            onClick={() => cancelIconOnClick()} />
                    </TableCell>
                </TableRow>
            ))}
        </MuiTableBody>
    )
}

