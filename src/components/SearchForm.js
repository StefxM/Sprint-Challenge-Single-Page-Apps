import React from "react";

export default const SearchForm = props => {
 
  return (
    <section className="search-form">
     <input value={props.value} onChange={props.onChange} />
    </section>
  );
}
