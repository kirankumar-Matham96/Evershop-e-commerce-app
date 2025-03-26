// export class CustomError extends Error {
//     constructor(status=500, message="") {
//       super(message);
//       this.status = status;
//       this.message = message;
//     }

//     getStatus = () => {
//       return this.status;
//     };

//     getErrorMessage = () => {
//       return this.message;
//     };
//   }

class CustomError extends Error {
  constructor(status = 500, message = "") {
    super(message);
    this.status = status;
    this.message = message;
  }

  getStatus() {
    return this.status;
  }

  getErrorMessage() {
    return this.message;
  }
}

module.exports = CustomError;
