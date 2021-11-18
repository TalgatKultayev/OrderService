package kz.talgat.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class OrderExceptionHandler {
    @SuppressWarnings("rawtypes")
    @ExceptionHandler
    public ResponseEntity<APIErrorResponse> handleException(EmptyOrderException e){
        APIErrorResponse error = new APIErrorResponse();

        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(e.getMessage());
        error.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @SuppressWarnings("rawtypes")
    @ExceptionHandler
    public ResponseEntity<APIErrorResponse> handleException(BadProductNameException e) {
        APIErrorResponse error = new APIErrorResponse();

        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage(e.getMessage());
        error.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    //handle numeric exceptions
    @SuppressWarnings("rawtypes")
    @ExceptionHandler
    public ResponseEntity<APIErrorResponse> handleException(BadProductPriceQuantityException e) {
        APIErrorResponse error = new APIErrorResponse();

        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage(e.getMessage());
        error.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    //handle any other errors
    @ExceptionHandler
    public ResponseEntity<APIErrorResponse> handleException(Exception e){

        APIErrorResponse error = new APIErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Unknown error, try again",
                System.currentTimeMillis());

        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
    }
}

