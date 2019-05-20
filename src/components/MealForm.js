import React from 'react'
import InputMask from 'react-input-mask'
import TimePicker from "rc-time-picker";
import moment from "moment";

export default class MealForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.meal ? props.meal.name : '',
            description: props.meal ? props.meal.description : '',
            price: props.meal ? (props.meal.price / 100).toString() : undefined,
            available: props.meal ? props.meal.available : undefined,
            location: props.meal ? props.meal.location : '',
            courrier: props.meal ? props.meal.courrier : false,
            courrierStart: props.meal ? moment(props.meal.courrierStart*1000) : moment(),
            courrierEnd: props.meal ? moment(props.meal.courrierEnd*1000) : moment().add(2,'hours').startOf('hour'),
            pickUp: props.meal ? props.meal.pickUp : false,
            pickUpStart: props.meal ? moment(props.meal.pickUpStart*1000) : moment(),
            pickUpEnd: props.meal ? moment(props.meal.pickUpEnd*1000) : moment().add(2,'hours').startOf('hour'),
            table: props.meal ? props.meal.table : false,
            tableStart: props.meal ? moment(props.meal.tableStart*1000) : moment(),
            tableEnd: props.meal ? moment(props.meal.tableEnd*1000) : moment().add(2,'hours').startOf('hour'),
            frozen: props.meal ? props.meal.frozen : false,
            picture: props.meal ? props.meal.picture : '',
            error: ''
        }
    }
    onPriceChange = (e) => {
        const price = e.target.value
        if (price.match(/^\d*(\,\d{0,2})?$/)) {
            this.setState({ price })
        }
    }
    onInputChange = (e) => {
        const { target: { name, type } } = e
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({ [name]: value })
    }
    onCourrierChange = (e) => {
        const { target: { name, checked } } = e
        this.setState({ [name]: checked, courrierStart: moment().valueOf() })
    }
    onPickUpChange = (e) => {
        const { target: { name, checked } } = e
        this.setState({ [name]: checked, pickUpStart: moment().valueOf() })
    }
    onTableChange = (e) => {
        const { target: { name, checked } } = e
        this.setState({ [name]: checked, tableStart: moment().valueOf() })
    }
    onCourrierStartChange = (courrierStart) => {
        this.setState({ courrierStart })
    }
    onCourrierEndChange = (courrierEnd) => {
        this.setState({ courrierEnd })
    }
    onPickUpStartChange = (pickUpStart) => {
        this.setState({ pickUpStart })
    }
    onPickUpEndChange = (pickUpEnd) => {
        this.setState({ pickUpEnd })
    }
    onTableStartChange = (tableStart) => {
        this.setState({ tableStart })
    }
    onTableEndChange = (tableEnd) => {
        this.setState({ tableEnd })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.name || !this.state.description || !this.state.price || !this.state.available /*|| !this.state.location*/) {
            this.setState({ error: 'Por favor, complete os campos para cadastrar uma refeição' })
        } else if (!this.state.courrier && !this.state.pickUp && !this.state.table) {
            this.setState({ error: 'Por favor, selecione como o prato poderá ser servido' })
        } else if (this.state.courrier && (!this.state.courrierStart || !this.state.courrierEnd)) {
            this.setState({ error: 'Por favor, selecione o período disponível para entrega' })
        } else if (this.state.pickUp && (!this.state.pickUpStart || !this.state.pickUpEnd)) {
            this.setState({ error: 'Por favor, selecione o período disponível para retirada' })
        } else if (this.state.table && (!this.state.tableStart || !this.state.tableEnd)) {
            this.setState({ error: 'Por favor, selecione o período disponível para servir em sua casa' })
        } else if (this.state.courrierStart > this.state.courrierEnd || this.state.pickUpStart > this.state.pickUpEnd || this.state.tableStart > this.state.tableEnd) {
            this.setState({error: 'O período de atendimento é inválido'})
        } else {
            this.setState({ error: '' })
            this.props.onSubmit({
                name: this.state.name.toLowerCase(),
                description: this.state.description.toLowerCase(),
                price: parseFloat(this.state.price, 10) * 100,
                available: parseInt(this.state.available),
                location: this.state.location,
                courrier: this.state.courrier,
                courrierStart: this.state.courrierStart.valueOf(),
                courrierEnd: this.state.courrierEnd.valueOf(),
                pickUp: this.state.pickUp,
                pickUpStart: this.state.pickUpStart.valueOf(),
                pickUpEnd: this.state.pickUpEnd.valueOf(),
                table: this.state.table,
                tableStart: this.state.tableStart.valueOf(),
                tableEnd: this.state.tableEnd.valueOf(),
                frozen: this.state.frozen,
                picture: this.state.picture
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <label>
                        Nome do prato:
                        <input
                            name='name'
                            type='text'
                            placeholder='Pê-efe de frango empanado'
                            value={this.state.name}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Descrição:
                        <input
                            name='description'
                            type='text'
                            placeholder='Filé de frango empanado frito, acompanhado de arroz, feijões, farofa de miúdos e salada de alfaces'
                            value={this.state.description}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Valor:
                        <InputMask
                            name='price'
                            type='text'
                            placeholder='R$ 13'
                            mask='99,99'
                            value={this.state.price}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Pratos disponíveis:
                        <input
                            name='available'
                            type='number'
                            placeholder={3}
                            value={this.state.available}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Prato congelado?
                        <i className="material-icons">kitchen</i>
                        <input
                            name='frozen'
                            type='checkbox'
                            checked={this.state.frozen}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Disponível para entrega?
                        <i className="material-icons">motorcycle</i>
                        <input
                            name='courrier'
                            type='checkbox'
                            checked={this.state.courrier}
                            onChange={this.onCourrierChange}
                        />
                        <i className="material-icons">alarm_on</i>
                        <TimePicker
                            showSecond={false}
                            defaultValue={moment()}
                            value={moment(this.state.courrierStart)}
                            onChange={this.onCourrierStartChange}
                            minuteStep={15}
                            disabled={!this.state.courrier}
                        />
                        <i className="material-icons">alarm_off</i>
                        <TimePicker
                            showSecond={false}
                            defaultValue={moment()}
                            value={moment(this.state.courrierEnd)}
                            onChange={this.onCourrierEndChange}
                            minuteStep={15}
                            disabled={!this.state.courrier}
                        />
                    </label>
                    <label>
                        Disponível para retirada?
                        <i className="material-icons">shopping_basket</i>
                        <input
                            name='pickUp'
                            type='checkbox'
                            checked={this.state.pickUp}
                            onChange={this.onPickUpChange}
                        />
                        <i className="material-icons">alarm_on</i>
                        <TimePicker
                            showSecond={false}
                            defaultValue={moment()}
                            value={moment(this.state.tableStart)}
                            onChange={this.onPickUpStartChange}
                            minuteStep={15}
                            disabled={!this.state.pickUp}
                        />
                        <i className="material-icons">alarm_off</i>
                        <TimePicker
                            showSecond={false}
                            defaultValue={moment()}
                            value={moment(this.state.pickUpEnd)}
                            onChange={this.onPickUpEndChange}
                            minuteStep={15}
                            disabled={!this.state.pickUp}
                        />
                    </label>
                    <label>
                        Disponível para servir em sua casa?
                        <i className="material-icons">airline_seat_recline_normal</i>
                        <input
                            name='table'
                            type='checkbox'
                            checked={this.state.table}
                            onChange={this.onTableChange}
                        />
                        <i className="material-icons">alarm_on</i>
                        <TimePicker
                            showSecond={false}
                            defaultValue={moment()}
                            value={moment(this.state.tableStart)}
                            onChange={this.onTableStartChange}
                            minuteStep={15}
                            disabled={!this.state.table}
                        />
                        <i className="material-icons">alarm_off</i>
                        <TimePicker
                            showSecond={false}
                            defaultValue={moment()}
                            value={moment(this.state.tableEnd)}
                            onChange={this.onTableEndChange}
                            minuteStep={15}
                            disabled={!this.state.table}
                        />
                    </label>
                    <button>Cadastrar</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}