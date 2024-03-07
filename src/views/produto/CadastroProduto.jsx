import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

export default function CadastroProduto() {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Codigo do Produto'>
                                    <InputMask
                                        required
                                        mask="9 99999 9"
                                        placeholder="Informe o código do produto"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>
                            
                
                            <TextArea
                            label='Descrição'
                            placeholder='Informe o código do produto' 
                            ></TextArea>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Valor Unitario'
                                    maxLength='100'
                                    width={5}
                                    >
                                   <InputMask 
                                   mask="99,99" 
                                   maskChar={null}
                                   
                               /> 
                                </Form.Input>

                                <Form.Input
                               fluid
                               label='Tempo de Entrega Mínimo em Minutos'
                               width={5}
                           >
                               <InputMask 
                                   mask="9999" 
                                   maskChar={null}
                                   placeholder="Ex: 30"
                               /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={5}
                                >
                                    <InputMask 
                                        mask="9999" 
                                        maskChar={null}
                                        placeholder="Ex: 40"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
