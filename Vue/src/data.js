export default {
    getEmployee() {
      let employee = {
        Owner: "John Heart",
        Status: 1
      };
  
      return employee;
    },
    getStatuses() {
        let statuses = [{
            "Id": 1, "Name": "Not Started"
          }, {
            "Id": 2, "Name": "In Progress"
          }, {
            "Id": 3, "Name": "Deferred"
          }, {
            "Id": 4, "Name": "Need Assistance"
          }, {
            "Id": 5, "Name": "Completed"
          }
        ];
        return statuses;
    }
  }