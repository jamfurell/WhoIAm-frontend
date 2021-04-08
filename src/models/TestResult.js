const url = `http://localhost:4000`

class TestResultModel {
  // the "static" keyword allows us to invoke the method without an instance of the class
  static all = () => {
    return fetch(`${url}/TestResult`).then(res => res.json())
  }

  static show = (TestResultId) => {
    return fetch(`${url}/TestResult/${TestResultId}`).then(res => res.json())
  }

  static create = (TestResultData) => {
    return fetch(`${url}/TestResult`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(TestResultData)
    })
      .then(res => res.json())
  }
}

export default TestResultModel
