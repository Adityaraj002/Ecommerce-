class ApiError extends Error{
  constructor(statusCode,
    message = 'something went wrong',
    errors = [],
    data = null,
    stack = ''
  ) {
    super(message)
    this.statusCode = statusCode
    this.data = data
    this.errors = errors
    this.success = false

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this,this.constructor);
    }
    
  }
}

export {ApiError}