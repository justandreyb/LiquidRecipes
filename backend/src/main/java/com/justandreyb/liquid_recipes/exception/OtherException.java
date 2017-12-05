package com.justandreyb.liquid_recipes.exception;

public class OtherException extends LiquidRecipeException {
    public OtherException() {
        super();
    }

    public OtherException(String message) {
        super(message);
    }

    public OtherException(String message, Throwable cause) {
        super(message, cause);
    }

    public OtherException(Throwable cause) {
        super(cause);
    }

    protected OtherException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
