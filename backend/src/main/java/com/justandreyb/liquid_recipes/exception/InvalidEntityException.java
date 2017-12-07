package com.justandreyb.liquid_recipes.exception;

public class InvalidEntityException extends LiquidRecipeException {
    public InvalidEntityException() {
        super();
    }

    public InvalidEntityException(String message) {
        super(message);
    }

    public InvalidEntityException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidEntityException(Throwable cause) {
        super(cause);
    }

    protected InvalidEntityException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
