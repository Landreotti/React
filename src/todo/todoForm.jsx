import React from 'react';
import IconButton from '../template/iconButton';
import Grid from '../template/grid';


export default props => {
    const keyHandler = (e) => {
        if(e.key === "Enter"){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === "Escape") {
            props.handleClearSearch()
        }
    }

    return (
        <div role="form" className='todoForm'>
            <Grid cols="12 9 10">
                <input 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa" 
                    value={props.description} 
                    onChange={props.handleChange}
                    onKeyUp={props.keyHandler}
                />    
            </Grid>
            <Grid cols="12 3 2">
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style='danger' icon='close' onClick={props.handleClearSearch}></IconButton>
            </Grid>
        </div>
    )
}