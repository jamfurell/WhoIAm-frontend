const url = `http://localhost:4000/api`

class QuestionModel {
  // the "static" keyword allows us to invoke the method without an instance of the class
    static all = () => {
        return fetch(`${url}/questions`).then(res => res.json())
    }
}

export default QuestionModel