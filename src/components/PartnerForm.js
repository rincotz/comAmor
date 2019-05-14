import React from 'react'
import moment from 'moment'
import InputMask from 'react-input-mask'

export default class PartnerForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            id: props.partner ? props.partner.id : '',
            name: props.partner ? props.partner.name : '',
            gender: props.partner ? props.partner.gender : 'female',
            birth: props.partner ? moment(props.partner.birth*1000).format('DD/MM/YYYY') : undefined,
            email: props.partner ? props.partner.email : '',
            phone: props.partner ? props.partner.phone : '',
            bio: props.partner ? props.partner.bio : '',
            nationality:props.partner ? props.partner.nationality : 'brasileira',
            addressLine1: props.partner ? props.partner.addressLine1 : '',
            addressLine2: props.partner ? props.partner.addressLine2 : '',
            number: props.partner ? props.partner.number : '',
            neighborhood: props.partner ? props.partner.neighborhood : '',
            zip: props.partner ? props.partner.zip : '',
            picture: props.partner ? props.partner.zip : undefined,
            error: ''
        }
    }
    onInputChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({ [name]: value })
    }
    onImageChange = (e) => {
        e.preventDefault()
        const reader = new FileReader()
        const picture = e.target.files[0]
        reader.onloadend = () => {
            this.setState({ picture })
        }
    }
    validateId = (input) => {
        const cpf = input.replace(/\D/g, '');
        if (cpf === '' || cpf.length !== 11 || !/^\d{11}$/.test(cpf)) {
            return false;
        }
        const digits = cpf.split('').map(x => parseInt(x));
        for (let j = 0; j < 2; j++) {
            let sum = 0;
            for (let i = 0; i < 9 + j; i++) {
                sum += digits[i] * (10 + j - i);
            }
            let checkDigit = 11 - (sum % 11);
            if (checkDigit === 10 || checkDigit === 11) {
                checkDigit = 0;
            }
            if (checkDigit !== digits[9 + j]) {
                return false;
            }
        }
        return true;
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.nationality || !this.state.zip || !this.state.neighborhood || !this.state.number || !this.state.addressLine1 || !this.state.phone || !this.state.name || !this.state.gender) {
            this.setState({ error: 'Por favor, complete todas as informações para o cadastro' })
        }  else if (!this.state.email.match(/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i)) {
            this.setState({ error: 'Por favor, preencha o local indicado para e-mail com um endereço de e-mail válido'})
        } else if (!this.validateId(this.state.id)) {
            this.setState({ error: 'Por favor, preencha o local indicado para CPF com um número de CPF válido'})
        } else if (!moment(this.state.birth, 'DD-MM-YYYY').isValid()) {
            this.setState({ error: 'Por favor, preencha o local indicado para nascimento com uma data válida'})
        }else {
            this.setState({ error: '' })
            this.props.onSubmit({
                id: this.state.id,
                name: this.state.name.toLowerCase(),
                gender: this.state.gender.toLowerCase(),
                birth: moment(this.state.birth, 'DD-MM-YYYY').valueOf(),
                email: this.state.email.toLowerCase(),
                phone: this.state.phone,
                bio: this.state.bio.toLowerCase(),
                nationality: this.state.nationality.toLowerCase(),
                addressLine1: this.state.addressLine1.toLowerCase(),
                addressLine2: this.state.addressLine2.toLowerCase(),
                number: this.state.number,
                neighborhood: this.state.neighborhood.toLowerCase(),
                zip: this.state.zip,
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
                        Nome
                        <input
                            name='name'
                            type='text'
                            placeholder='Maria Aparecida Santos'
                            value={this.state.name}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Nacionalidade
                        <select
                            name='nationality'
                            value={this.state.nationality}
                            onChange={this.onInputChange}
                        >
                            <option value="brasileira">Brasileira</option>
                            <option value="estrangeira">Estrangeira</option>
                        </select>
                    </label>
                    <label>
                        Nascimento
                        <InputMask
                            name='birth'
                            type='text'
                            placeholder='24/05/1967'
                            mask='99/99/9999'
                            value={this.state.birth}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Sexo
                        <select
                            name='gender'
                            value={this.state.gender}
                            onChange={this.onInputChange}
                        >
                            <option value='female'>Female</option>
                            <option value='male'>Male</option>
                        </select>
                    </label>
                    <label>
                        e-mail
                        <input
                            name='email'
                            type='text'
                            placeholder='seu_email@exemplo.com.br'
                            value={this.state.email}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Foto
                        <input
                            name='picture'
                            type='file'
                            onChange={e => this.onImageChange(e)}
                        />
                    </label>
                    <label>
                        CPF
                        <InputMask
                            name='id'
                            type='text'
                            mask='999.999.999-99'
                            placeholder='999.999.999-99'
                            value={this.state.id}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Celular
                        <InputMask
                            name='phone'
                            type='text'
                            placeholder='(11) 999 555 111'
                            mask='(99) 999 999 999'
                            value={this.state.phone}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Sua história
                        <input
                            name='bio'
                            type='text'
                            placeholder='Fale um pouco sobre você! Todos se interessam por uma boa história.'
                            value={this.state.bio}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label>
                        Endereço:
                        <label>
                            Rua
                            <input
                                name='addressLine1'
                                type='text'
                                placeholder='Rua Francisco dos Santos Xavier'
                                value={this.state.addressLine1}
                                onChange={this.onInputChange}
                            />
                        </label>
                        <label>
                            Número
                            <input
                                name='number'
                                type='text'
                                placeholder='245'
                                value={this.state.number}
                                onChange={this.onInputChange}
                            />
                        </label>
                        <label>
                            Complemento
                            <input
                                name='addressLine2'
                                type='text'
                                placeholder='Bloco 2, Apartamento 25'
                                value={this.state.addressLine2}
                                onChange={this.onInputChange}
                            />
                        </label>
                        <label>
                            Bairro
                            <input
                                name='neighborhood'
                                type='text'
                                placeholder='Jardim das Acácias'
                                value={this.state.neighborhood}
                                onChange={this.onInputChange}
                            />
                        </label>
                        <label>
                            CEP
                            <InputMask
                                name='zip'
                                type='text'
                                placeholder='18120-000'
                                mask='99999-999'
                                value={this.state.zip}
                                onChange={this.onInputChange}
                            />
                        </label>
                    </label>
                    <button>Cadastrar</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}