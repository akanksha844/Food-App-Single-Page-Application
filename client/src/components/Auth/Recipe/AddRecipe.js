import React from 'react';

const AddRecipe = () => ( <
    div className = "App" >
    <
    h2 className = "App" > Add Recipe < /h2> <
    form className = "form" >
    <
    input type = "text"
    name = "name"
    placeholder =
    "Recipe Name"
    onChange = { this.handleChange }
    /> <
    select name = "category"
    onChange = { this.handleChange } >
    <
    option value = "Breakfast" > Breakfast < /option> <
    option value = "Lunch" > Lunch < /option> <
    option value = "Dinner" > Dinner < /option> <
    option value = "Snack" > Snack < /option> <
    /select> <
    input type = "text"
    name = "description"
    placeholder = "Add
    description " onchange ={this.handleChange} /> <
    textarea name = "instructions"
    placeholder = "Add instructions"
    onChange = { this.handleChange } > < /textarea>

    <
    button type = "submit"
    className = "button-primary" >
    Submit <
    /button>




    <
    /form> <
    /div>
);

export default AddRecipe;