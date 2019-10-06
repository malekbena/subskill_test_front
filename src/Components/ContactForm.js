import React from 'react';

import axios from 'axios';

import { DOMAIN } from '../Helpers/Config'
import { updateField } from "../Helpers/Func"


import { Button, Form, FormGroup, Label, Input, Spinner, Container } from 'reactstrap';
import "./ContactForm.css"

export default class ContactForm extends React.Component {
    state = {
        fields: {},
        errors: {},
        waiting: false,
        sended: false
    }
    componentDidMount() {
        this.handleUpdateField({ name: "fongecif", value: true })
        this.handleUpdateField({ name: "postType", value: "CDD" })
        this.handleUpdateField({ name: "retraining", value: "moyen" })
        this.handleUpdateField({ name: "phoneCall", value: "12-14" })
    }
    handleUpdateField = (field) => {
        this.setState({ fields: updateField(field, this.state.fields) })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.sendEmail(JSON.stringify(this.state.fields))
        this.setState({ waiting: true })
    }
    sendEmail = (datas) => {
        axios.post(
            `${DOMAIN}/api/sendEmail`,
            datas
        ).then((
            res => {
                let sended = res.data.isOK
                this.setState({
                    errors: res.data.errors,
                    waiting: false,
                    sended
                })
            }
        ))
    }
    checkError = (label) => {
        let errors = this.state.errors
        let check = 0
        Object.keys(errors).map(function (key) {
            if (errors[key].field === label) {
                check++
            }
        })
        return check > 0 ? true : false
    }
    render() {
        return (
            <>
                {!this.state.sended ?
                    <Container fluid className="p-5 formContent">
                        <h2 className="formTitle">vous souhaitez en savoir plus sur le cpf de transition professionnelle ou préparer votre projet de formation ?</h2>
                        <h2 className="formTitle">laissez nous vous contacter.</h2>
                        <Form onSubmit={(e) => { this.handleSubmit(e) }}>
                            <FormGroup tag="fieldset" className="mt-5">
                                <legend>1. Avez-vous déjà contacté la Fongecif ?</legend>
                                <FormGroup check>
                                    <Label check >
                                        <Input className="" value={true} defaultChecked onChange={(e) => { this.handleUpdateField({ name: "fongecif", value: e.target.value }) }} type="radio" name="fongecif" />{' '}
                                        <span className="ml-3 text-capitalize">oui</span>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" value={false} name="fongecif" onChange={(e) => { this.handleUpdateField({ name: "fongecif", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize">non</span>
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup tag="fieldset" className="mt-5">
                                {this.checkError("fongecif") && <p classname="text-danger">erreur</p>}
                                <legend>2. Vous êtes en :</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" name="postType" value="CDI" onChange={(e) => { this.handleUpdateField({ name: "postType", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> CDI </span>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" value="CDD" name="postType" defaultChecked onChange={(e) => { this.handleUpdateField({ name: "postType", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> CDD </span>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" name="postType" value="Autre" onChange={(e) => { this.handleUpdateField({ name: "postType", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> Autre </span>
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            {this.checkError("postType") && <p classname="text-danger">erreur</p>}
                            <FormGroup tag="fieldset" className="mt-5">
                                <legend>3. Vous avez un projet de reconversion professionelle :</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" value="court" name="retraining" onChange={(e) => { this.handleUpdateField({ name: "retraining", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> à court terme </span>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" name="retraining" defaultChecked value="moyen" onChange={(e) => { this.handleUpdateField({ name: "retraining", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> à moyen terme </span>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" name="retraining" value="long" onChange={(e) => { this.handleUpdateField({ name: "retraining", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> à long terme </span>
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            {this.checkError("retraining") && <p classname="text-danger">erreur</p>}
                            <FormGroup tag="fieldset" className="mt-5">
                                <legend>4. A quel moment de la journée souhaitez-vous être appelé ?</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" name="phoneCall" value="9-12" onChange={(e) => { this.handleUpdateField({ name: "phoneCall", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> entre 9h et 12h </span>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" name="phoneCall" value="12-14" defaultChecked onChange={(e) => { this.handleUpdateField({ name: "phoneCall", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> entre 12h et 14h </span>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" name="phoneCall" value="14-16" onChange={(e) => { this.handleUpdateField({ name: "phoneCall", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> entre 14h et 16h </span>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="" type="radio" name="phoneCall" value="16-18" onChange={(e) => { this.handleUpdateField({ name: "phoneCall", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> entre 16h et 18h </span>
                                    </Label>
                                </FormGroup>
                                {this.checkError("phoneCall") && <p classname="text-danger">Vous devez choisir un horraire</p>}
                                <FormGroup className="mt-5">
                                    <legend>5. Vos informations</legend>
                                    <Label for="name" className="mb-0 mt-3">Nom</Label>
                                    <Input required className={`formInput ${this.checkError("firstname") && "inputError"}`} onChange={(e) => { this.handleUpdateField({ name: "firstname", value: e.target.value }) }} type="text" name="firstname" id="name" />
                                    {this.checkError("firstname") && <p className="text-danger">Vous devez saisir votre prènom</p>}
                                    <Label for="lastname" className="mb-0 mt-3">Prènom</Label>
                                    <Input required className={`formInput ${this.checkError("lastname") && "inputError"}`} type="text" name="lastname" id="lastname" onChange={(e) => { this.handleUpdateField({ name: "lastname", value: e.target.value }) }} />
                                    {this.checkError("lastname") && <p className="text-danger">Vous devez saisir votre nom</p>}
                                    <Label for="phone" className="mb-0 mt-3">Numéro de téléphone</Label>
                                    <Input required className={`formInput ${this.checkError("phone") && "inputError"}`} pattern="[0-9]{10}" type="tel" name="phone" id="phone" onChange={(e) => { this.handleUpdateField({ name: "phone", value: e.target.value }) }} />
                                    {this.checkError("phone") && <p className="text-danger">Vous devez saisir votre numèro</p>}
                                    <Label for="email" className="mb-0 mt-3">Adresse email</Label>
                                    <Input required className={`formInput ${this.checkError("email") && "inputError"}`} type="text" pattern="[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}" name="email" id="email" onChange={(e) => { this.handleUpdateField({ name: "email", value: e.target.value }) }} />
                                    {this.checkError("email") && <p className="text-danger">Vous devez saisir votre email</p>}
                                        <legend className='mt-5'><b>Que faites-vous de mes données ?</b></legend>
                                    <Label check className="ml-4">
                                        <Input type="checkbox" name="agreement" value="agreement" required onChange={(e) => { this.handleUpdateField({ name: "agreement", value: e.target.value }) }} />{' '}
                                        <span className="ml-3 text-capitalize"> En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées dans le cadre de la demande. </span>
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <div className="w-100 d-flex justify-content-end">
                                {
                                    this.state.waiting ?
                                        <Spinner color="warning" />
                                        :
                                        <Button className="contactBtn">envoyer</Button>
                                }
                            </div>
                        </Form>
                    </Container>
                    :
                    <Container className="text-center paragraph vh-100">
                        <p className="text-uppercase">merci d'avoir pris le temps de <br/> répondre à ces questions.<br/><br/>
                            un de nos conseillers vous contactera<br/> dans un délai maximum de 72 heures.
                    </p>
                    </Container>
                }
            </>
        );
    }
}