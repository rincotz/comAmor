import React from 'react';
import { connect } from 'react-redux'
import PartnerForm from "./PartnerForm";
import { addPartner } from "../actions/partners";

export class AddPartnerPage extends React.Component {
    onSubmit = (partner) => {
        this.props.addPartner(partner)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Complete seu cadastro</h1>
                <PartnerForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addParter: (partner) => dispatch(addPartner(partner))
})

export default connect(undefined, mapDispatchToProps)(AddPartnerPage);