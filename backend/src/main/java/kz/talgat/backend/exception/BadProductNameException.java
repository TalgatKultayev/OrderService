package kz.talgat.backend.exception;

public class BadProductNameException extends RuntimeException{
    public BadProductNameException(String message) {
        super(message);
    }

    public BadProductNameException(String message, Throwable cause) {
        super(message, cause);
    }

    public BadProductNameException(Throwable cause) {
        super(cause);
    }
}
