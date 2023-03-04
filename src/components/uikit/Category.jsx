import { Autocomplete, TextField } from "@mui/material"

function updateActive(){
    document.querySelectorAll(".category__item").forEach(e=>e.classList.remove("active"))
}

export const Category = () => {
    const categoryList = ["IT & Design","Web"];
    return(<section className="category">
        <div className="category__search">
        <span>Вибір категорії:</span>
        <Autocomplete 
        className="autocomplete"
        options={["IT & Design"]}
        renderInput={(params) => <TextField {...params} label="Category" />}/>
        </div>
        {categoryList.map(category=>{
            return <div key={category} className="category__item" onClick={(event)=>{
                updateActive();
                event.target.classList.add("active")
            }}>
                {category}
            </div>
        })}
    </section>)
}