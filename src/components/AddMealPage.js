import React from 'react';
import { connect } from 'react-redux'
import MealForm from "./MealForm";
import { addMeal } from "../actions/meals";

export class AddMealPage extends React.Component {
    onSubmit = (meal) => {
        this.props.addMeal(meal)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Cadastre seu prato</h1>
                <MealForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addMeal: (meal) => dispatch(addMeal(meal))
})

export default connect(undefined, mapDispatchToProps)(AddMealPage)
