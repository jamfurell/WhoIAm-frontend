const url = process.env.REACT_APP_API_URL || `http://localhost:4000`

class QuestionModel {
  // the "static" keyword allows us to invoke the method without an instance of the class
  static all = () => {
      return fetch(`${url}/api/questions`).then(res => res.json())
  }

  static show = (questionId) => {
    return fetch(`${url}/api/questions/${questionId}`).then(res => res.json())
  }
}

export default QuestionModel