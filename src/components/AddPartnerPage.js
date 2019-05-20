import React from 'react';
import { connect } from 'react-redux'
import PartnerForm from "./PartnerForm";
import { startAddPartner } from "../actions/partners";

export class AddPartnerPage extends React.Component {
    onSubmit = (partner) => {
        this.props.startAddPartner(partner)
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
    startAddPartner: (partner) => dispatch(startAddPartner(partner))
})

export default connect(undefined, mapDispatchToProps)(AddPartnerPage);