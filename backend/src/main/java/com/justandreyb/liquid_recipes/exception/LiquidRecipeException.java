package com.justandreyb.liquid_recipes.exception;

public abstract class LiquidRecipeException extends Exception {

    public LiquidRecipeException() {
        super();
    }

    public LiquidRecipeException(String message) {
        super(message);
    }

    public LiquidRecipeException(String message, Throwable cause) {
        super(message, cause);
    }

    public LiquidRecipeException(Throwable cause) {
        super(cause);
    }

    protected LiquidRecipeException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
