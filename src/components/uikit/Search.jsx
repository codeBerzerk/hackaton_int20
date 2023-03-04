import { Autocomplete, TextField } from "@mui/material"

export const Search = () => {
    return(
        <Autocomplete
        disablePortal
        autoHighlight
        className="autocomplete"
        options={[{type:"resume",label:"roma"},{type:"resume",label:"artur"},{type:"project",label:"upwork"}]}
        groupBy={(option)=>option.type}
        renderInput={(params) => <TextField {...params} label="Search" />}
        />
    )
}