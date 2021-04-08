const url = `http://localhost:4000`

class TestTakenModel {
  // the "static" keyword allows us to invoke the method without an instance of the class
    static all = () => {
        return fetch(`${url}/TestTaken`).then(res => res.json())
    }

    static show = (TestTakenId) => {
        return fetch(`${url}/TestTaken/${TestTakenId}`).then(res => res.json())
    }

    static create = (TestTakenData) => {
        return fetch(`${url}/TestTaken`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(TestTakenData)
        })
        .then(res => res.json())
    }
}

export default TestTakenModel
