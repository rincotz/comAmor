import React from 'react';
import { connect } from 'react-redux'
import MealForm from "./MealForm";
import { startAddMeal } from "../actions/meals";

export class AddMealPage extends React.Component {
    onSubmit = (meal) => {
        this.props.startAddMeal(meal)
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
    startAddMeal: (meal) => dispatch(startAddMeal(meal))
})

export default connect(undefined, mapDispatchToProps)(AddMealPage)
