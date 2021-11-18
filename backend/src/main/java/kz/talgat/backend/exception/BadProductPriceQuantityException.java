package kz.talgat.backend.exception;

public class BadProductPriceQuantityException extends RuntimeException{
    public BadProductPriceQuantityException(String message) {
        super(message);
    }

    public BadProductPriceQuantityException(String message, Throwable cause) {
        super(message, cause);
    }

    public BadProductPriceQuantityException(Throwable cause) {
        super(cause);
    }
}
