import React from 'react'
import PartnerForm from "./PartnerForm";
import { editPartner, removePartner } from "../actions/partners";
import { connect } from 'react-redux'

export class EditPartnerPage extends React.Component {
    onSubmit = (partner) => {
        this.props.editPartner(this.props.partner.uid, partner)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removePartner({ uid: this.props.partner.uid })
        this.props.history.push('/')
    }
    render() {
        <div>
            <PartnerForm
                onSubmit={this.onSubmit}
                partner={this.props.partner}
            />
            <button
                onClick={this.onRemove}
            >
                Deletar Conta
            </button>
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    partner: state.partners.find((partner) => partner.uid === props.match.params.uid)
})

const mapDispatchToProps = (dispatch, props) => ({
    editPartner: (uid, partner) => dispatch(editPartner(uid, partner)),
    removePartner: (data) => dispatch(removePartner(data))
})

export default connect(mapStateToProps)(EditPartnerPage)