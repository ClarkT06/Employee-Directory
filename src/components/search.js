function Search(props){

    return ( 
        <>
<div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">

    <span class="input-group-text" id="inputGroup-sizing-sm">Search</span>
  
  </div>
  
  
  <input name='searchTerm' value={props.searchTerm} onChange={props.handleInputChange} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
</div>
        </>
    )
}

export default Search

//Need to find infexof for the chracters in the string. 
