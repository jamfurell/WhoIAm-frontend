const url = process.env.REACT_APP_API_URL || `http://localhost:4000`

class TestTakenModel {
  // the "static" keyword allows us to invoke the method without an instance of the class
    static all = () => {
        return fetch(`${url}/TestTaken`).then(res => res.json())
    }
//fetch request-get test result data for specific TestTakenId
    static show = (TestTakenId) => {
        return fetch(`${url}/TestTaken/${TestTakenId}`).then(res => res.json())
    }
//fetch request-create new document with results from questionnaire 
    static create = (TestTakenData) => {
        console.log(TestTakenData)
        return fetch(`${url}/TestTaken`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(TestTakenData)
        })
        .then(res => res.json())
    }
//fetch request-update test data to include new username for specific TestTakenId
    static update= (TestTakenId, TestTaken) => {
        console.log(TestTakenId)

        return fetch(`${url}/TestTaken/${TestTakenId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(TestTaken)
        })
        .then(res => res.json())
    }
//fetch request-delete test data for specific TestTakenId
    static delete= (TestTakenId) => {
        return fetch(`${url}/TestTaken/${TestTakenId}`, 
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then (res => res.json())
        }
    }

export default TestTakenModel
