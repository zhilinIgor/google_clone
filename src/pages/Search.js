import React, {useState} from 'react';
import './Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom';


const Search = ({hideButtons = false}) => {

    const [input, setInput] = useState('');
    const history = useHistory();
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const search = (e) => {
        e.preventDefault();
        console.log('You hit the search button', input)
        history.push('/search');
    }

    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon className='search_inputIcon'/>
                <input value={input} onChange={inputHandler}/>
                <MicIcon/>
            </div>

            {!hideButtons ? (
                <div className='search_buttons'>
                    <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                    <Button variant='outlined'>I'm feeling lucky</Button>
                </div>
            ) : (
                <div className='search_buttons'>
                    <Button className='search_buttonsHidden' type='submit' onClick={search} variant='outlined'>Google
                        Search</Button>
                    <Button className='search_buttonsHidden' variant='outlined'>I'm feeling lucky</Button>
                </div>
            )}

        </form>
    );
};

export default Search;