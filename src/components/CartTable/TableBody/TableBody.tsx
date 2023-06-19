import { default as MuiTableBody } from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import CancelIcon from '@mui/icons-material/Cancel'
import { Box } from '@mui/material'
import Image from '@/components/Image/Image'
import style from './TableBody.module.sass'
import { normalizePrice } from "@/functions/price"

const CustomTableCell = ({ text }: CustomTableCellProps) => {
    return <TableCell className={style.row}>
        {text}
    </TableCell>
}

export default function TableBody(props: TableBodyProps) {
    const { rows, handleOnClick } = props

    return (
        <MuiTableBody>
            {
                rows.length === 0
                    ? <TableRow>
                        <TableCell
                            colSpan={6}
                            className={style.empty}
                        >
                            No selected items
                        </TableCell>
                    </TableRow>
                    : rows.map((row) => {
                        const normalizedPrice = normalizePrice(row.price)
                        const normalizedFullPrice = normalizePrice(row.price * row.quantity)

                        return (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell className={`${style.row} ${style.left}`}>
                                    <Box className={style.product}>
                                        <Image
                                            src={row.preview}
                                            alt={row.title} />
                                        <Box className={style.description}>
                                            {row.title}
                                            <span>1 kg</span>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <CustomTableCell text={`$${normalizedPrice}`} />
                                <CustomTableCell text={row.quantity} />
                                <CustomTableCell text={`$${normalizedFullPrice}`} />
                                <TableCell className={`${style.row}`}>
                                    <CancelIcon
                                        onClick={() => handleOnClick(row.id)}
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    })}
        </MuiTableBody>
    )
}

