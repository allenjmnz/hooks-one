import React from 'react'

// Remember to add Prop Types below the component and above the export default
import PropTypes from 'prop-types'

// Suggested props: 
/*  1. Users Array 
    2. An object representing the empty form
    3. onChange handler
    4. onSubmit handler */
function Form(props) {
  return (
    <form>
      {/* Here you need to add two input[type="text"], one input[type="number"], one <select> element and a submit button */}
      {/* Inside the select element you need to have a default option with value "None" and display "Has no direct boss" */}
      {/* The <option> tags must have a "value" attribute of user.id and display user.name */}
    </form>
  );
}

export default Form
