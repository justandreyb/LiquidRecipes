package com.justandreyb.liquid_recipes.config.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.justandreyb.liquid_recipes.exception.LiquidRecipeException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.exception.OtherException;
import com.justandreyb.liquid_recipes.exception.SecurityException;
import com.justandreyb.liquid_recipes.exception.WrongRequestException;

@ControllerAdvice
public class ExceptionsHandler {

    @ExceptionHandler(WrongRequestException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> badRequestExceptionHandler(WrongRequestException exception) {
        return new ResponseEntity<>(
                createErrorResponse(exception),
                getHeaders(),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> notFoundExceptionHandler(NotFoundException exception) {
        return new ResponseEntity<>(
                createErrorResponse(exception),
                getHeaders(),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(SecurityException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> securityExceptionHandler(SecurityException exception) {
        return new ResponseEntity<>(
                createErrorResponse(exception),
                getHeaders(),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(OtherException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Object> otherExceptionHandler(OtherException exception) {
        return new ResponseEntity<>(
                createErrorResponse(exception),
                getHeaders(),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    @ExceptionHandler(LiquidRecipeException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Object> applicationExceptionHandler(LiquidRecipeException exception) {
        return new ResponseEntity<>(
                createErrorResponse(exception),
                getHeaders(),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Object> exceptionHandler(Exception exception) {
        return new ResponseEntity<>(
                createErrorResponse(exception),
                getHeaders(),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    private String createErrorResponse(Exception exception) {
        return "{ \"success\": false, \"error\": true, \"message\": \"" + exception.getMessage() + "\"}";
    }

    private HttpHeaders getHeaders() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("content-flavorType", "application/json");
        return httpHeaders;
    }
}