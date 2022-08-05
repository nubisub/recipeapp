import {TextField} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchBar = (props) => {
    const [search,setSearch]=useState(props.id)
    let handleChange = (e) => {
        setSearch(e.target.value)
    }
    const navigate = useNavigate();
    const handleSubmit = () =>{
        event.preventDefault();
        navigate('/search/'+search);
        if (props.reload) {
            window.location.reload()
        }
    }
    return(
    <div className="flex justify-center my-8">
        <form className="flex justify-center items-center"  onSubmit={handleSubmit}>
            <TextField sx={{width:500, borderRadius:100}}
                       color="success"
                       id="outlined-basic"
                       label="Search Recipe"
                       variant="outlined"
                       onChange={handleChange}
                       value={search}
                       inputProps={{
                           'aria-label': 'search',
                       }}
            />
            <button className="ml-[-56px] z-10 h-full w-[56px] "  type='submit' >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    </div>
    )
}
export default SearchBar