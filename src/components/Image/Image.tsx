import { Box } from "@mui/material"

export default function Image(props: ImageProps) {
    return (
        <Box
            component="img"
            alt={props.alt}
            src={props.src}
            className={props.className || ""}
        />
    )
}