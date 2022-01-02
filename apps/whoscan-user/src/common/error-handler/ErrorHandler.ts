class ErrorHandler {
  errorMessage: string;

  constructor(error: any) {
    this.errorMessage = '';

    if (error) {
      if (typeof error === 'string') {
        this.errorMessage = error;
      } else if (typeof error === 'object') {
        if (error.message) {
          this.errorMessage = error.message;
        } else {
          for (const [key, value] of Object.entries(error)) {
            if (Array.isArray(value)) {
              const message = value.reduce(
                (acc: string, item: string) => `${acc}, ${item}`,
              );
              this.errorMessage = this.errorMessage.concat(
                `"${key}": ${message}. `,
              );
            }
          }
        }
      } else {
        this.errorMessage = 'Unhandled error';
      }
    }
    if (this.errorMessage === '') {
      this.errorMessage = 'Unhandled error';
    }
  }
}

export default ErrorHandler;
