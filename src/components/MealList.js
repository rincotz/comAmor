import React from 'react'
import { connect } from 'react-redux'
import MealListItem from './MealListItem'
import selectMeals from '../selectors/selectMeals'

const MealList = (props) => (
    <div>
        <h1>Meal List</h1>
        <ul>
        {props.meals.map((meal) => (
            <MealListItem key={meal.id} {...meal} />
        ))}
        </ul>
    </div>
)

const mapStateToProps = (state) => ({
    meals: selectMeals(state.meals)
})

export default connect(mapStateToProps)(MealList)

