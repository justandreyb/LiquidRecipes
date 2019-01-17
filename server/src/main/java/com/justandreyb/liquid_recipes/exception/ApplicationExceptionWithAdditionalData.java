package com.justandreyb.liquid_recipes.exception;

import java.util.Map;

public abstract class ApplicationExceptionWithAdditionalData extends LiquidRecipeException {

    protected Map<String, String> data;

    public ApplicationExceptionWithAdditionalData() {
        super();
    }

    public ApplicationExceptionWithAdditionalData(String message) {
        super(message);
    }

    public ApplicationExceptionWithAdditionalData(String message, Throwable cause) {
        super(message, cause);
    }

    public ApplicationExceptionWithAdditionalData(Throwable cause) {
        super(cause);
    }

    protected ApplicationExceptionWithAdditionalData(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

    public ApplicationExceptionWithAdditionalData(String message, Map<String, String> data) {
        super(message);
        this.data = data;
    }

    public Map<String, String> getData() {
        return this.data;
    }
}
