import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardViewQuestion extends Component {
    render() {
        return (

            this.props.question.map((question) => {
               return  <div id= {question.id} className="card testimonial-card w-50 mx-auto" style={{ marginTop: '10px' }}>

                    <div className="card-header bg-danger">
                        <h5 style={{ color: '#fff' }}>{`${question.author} asks`}</h5>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="avatar white">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-circle"
                                    alt="avatar1"
                                    style={{
                                        padding: '10px',
                                        height: '150px',
                                        width: '150px'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-8">
                            <div className="card-body bg-light">

                                <h2 className="card-title">Would You Rather...</h2>
                                <p>{question.optionOne.text} ...</p>
                                <button className='form-control btn btn-outline-success'>View full</button>
                            </div>
                        </div>
                    </div >

                </div >
            })
        );
        }
    }

function mapStateToProps(store, { questionID }) {
    //console.log(store.questions)
    //console.log(questionID)
    if (store.authedUser !== null && questionID) {

        const question = questionID.map((key) => store.questions[key])
        console.log(question)
        return {
            question,
            auth: store.authedUser
        }
    } else {
        return {
            question: []
        }
    }
}

export default connect(mapStateToProps)(CardViewQuestion);