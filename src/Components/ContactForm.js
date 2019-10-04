import React from 'react';
import { Button, Form, FormGroup, Label, Input, Spinner, Col } from 'reactstrap';
import axios from 'axios';
import { DOMAIN } from '../Helpers/Config'
import { updateField } from "../Helpers/Func"

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
                    <Col className="p-5">
                    <h2 className="text-uppercase">vous souhaitez en savoir plus sur le cpf de transition professionnelle ou préparer votre projet de formation ?</h2>
                    <h2 className="text-uppercase">laissez nous vous contacter.</h2>
                        <Form onSubmit={(e) => { this.handleSubmit(e) }}>
                            <FormGroup tag="fieldset">
                                <legend>1. Avez-vous déjà contacté la Fongecif ?</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" value={true} defaultChecked onChange={(e) => { this.handleUpdateField({ name: "fongecif", value: e.target.value }) }} type="radio" name="fongecif" />{' '}
                                        Oui
                        </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" value={false} name="fongecif" onChange={(e) => { this.handleUpdateField({ name: "fongecif", value: e.target.value }) }} />{' '}
                                        Non
                        </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <legend>2. Vous êtes en :</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" name="postType" value="CDI" onChange={(e) => { this.handleUpdateField({ name: "postType", value: e.target.value }) }} />{' '}
                                        CDI
                        </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" value="CDD" name="postType" defaultChecked onChange={(e) => { this.handleUpdateField({ name: "postType", value: e.target.value }) }} />{' '}
                                        CDD
                        </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" name="postType" value="Autre" onChange={(e) => { this.handleUpdateField({ name: "postType", value: e.target.value }) }} />{' '}
                                        Autre
                        </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <legend>3. Vous avez un projet de reconversion professionelle :</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" value="court" name="retraining" onChange={(e) => { this.handleUpdateField({ name: "retraining", value: e.target.value }) }} />{' '}
                                        A court terme
                        </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" name="retraining" defaultChecked value="moyen" onChange={(e) => { this.handleUpdateField({ name: "retraining", value: e.target.value }) }} />{' '}
                                        A moyen terme
                        </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" name="retraining" value="long" onChange={(e) => { this.handleUpdateField({ name: "retraining", value: e.target.value }) }} />{' '}
                                        A long terme
                        </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <legend>4. A quel moment de la journée souhaitez-vous être appelé ?</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" name="phoneCall" value="9-12" onChange={(e) => { this.handleUpdateField({ name: "phoneCall", value: e.target.value }) }} />{' '}
                                        Entre 9h et 12h
                        </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" name="phoneCall" value="12-14" defaultChecked onChange={(e) => { this.handleUpdateField({ name: "phoneCall", value: e.target.value }) }} />{' '}
                                        entre 12h et 14h
                        </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" name="phoneCall" value="14-16" onChange={(e) => { this.handleUpdateField({ name: "phoneCall", value: e.target.value }) }} />{' '}
                                        Entre 14h et 16h
                        </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input className="formInput" type="radio" name="phoneCall" value="16-18" onChange={(e) => { this.handleUpdateField({ name: "phoneCall", value: e.target.value }) }} />{' '}
                                        Entre 16h et 18h
                        </Label>
                                </FormGroup>
                                <FormGroup>
                                    <legend>5. Vos informations</legend>
                                    <Label for="name">Nom</Label>
                                    <Input className="formInput" onChange={(e) => { this.handleUpdateField({ name: "firstname", value: e.target.value }) }} type="text" name="firstname" id="name" />
                                    <Label for="lastname">Prènom</Label>
                                    <Input className="formInput" type="text" name="lastname" id="lastname" onChange={(e) => { this.handleUpdateField({ name: "lastname", value: e.target.value }) }} />
                                    <Label for="phone">Numéro de téléphone</Label>
                                    <Input className="formInput" type="phone" name="phone" id="phone" onChange={(e) => { this.handleUpdateField({ name: "phone", value: e.target.value }) }} />
                                    <Label for="email">Adresse email</Label>
                                    <Input className="formInput" type="email" name="email" id="email" onChange={(e) => { this.handleUpdateField({ name: "email", value: e.target.value }) }} />
                                    {this.checkError("email") && <p classnam="text-danger">error</p>}
                                </FormGroup>
                            </FormGroup>
                            {
                                this.state.waiting ? <Spinner color="warning" />
                                    :
                                    <Button className="contactBtn text-uppercase">envoyer</Button>
                            }
                        </Form>
                    </Col>
                    :
                    <p>merci d'avoir pris le temps de répondre à ces questions.
                        un de nos conseillers vous contactera dans un délai maximum de 72 heures.
                    </p>
                }
            </>
        );
    }
}