const url = process.env.REACT_APP_API_URL || `http://localhost:4000`

class TestTakenModel {
  // the "static" keyword allows us to invoke the method without an instance of the class
    static all = () => {
        return fetch(`${url}/TestTaken`).then(res => res.json())
    }

    static show = (TestTakenId) => {
        return fetch(`${url}/TestTaken/${TestTakenId}`).then(res => res.json())
    }

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
        // let request= axios.put(`${endPoint}/${todo._id}`, todo);
        // return request;
    }

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
