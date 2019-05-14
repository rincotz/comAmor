import React from 'react';
import MealForm from "./MealForm";
import { editMeal, removeMeal } from "../actions/meals";
import { connect } from "react-redux";

export class EditMealPage extends React.Component {
    onSubmit = (meal) => {
        this.props.editMeal(this.props.meal.id, meal)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeMeal({ id: this.props.meal.id })
        this.props.history.push('/')
    }
    render() {
        <div>
            <MealForm
                onSubmit={this.onSubmit}
                meal={this.props.meal}
            />
            <button
                onClick={this.onRemove}
            >
                Remover
            </button>
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    meal: state.meals.find((meal) => meal.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    editMeal: (id, meal) => dispatch(editMeal(id, meal)),
    removeMeal: (data) => dispatch(removeMeal(data))
})

export default connect(mapStateToProps)(EditMealPage)