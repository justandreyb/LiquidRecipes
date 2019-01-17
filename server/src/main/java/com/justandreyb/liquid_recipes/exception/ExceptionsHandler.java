package com.justandreyb.liquid_recipes.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.justandreyb.liquid_recipes.util.StringUtils;

@ControllerAdvice
public class ExceptionsHandler {

    @ExceptionHandler(WrongRequestException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> badRequestExceptionHandler(WrongRequestException exception) {
        return new ResponseEntity<>(
            createErrorResponse("Error. It's a wrong request", exception.getMessage()),
            getHeaders(),
            HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> notFoundExceptionHandler(NotFoundException exception) {
        return new ResponseEntity<>(
            createErrorResponse("Error. Target entity not found", exception.getMessage()),
            getHeaders(),
            HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(InvalidEntityException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> invalidEntityExceptionHandler(InvalidEntityException exception) {
        return new ResponseEntity<>(
            createErrorResponseWithAdditionalData("Error. Invalid entity", exception),
            getHeaders(),
            HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(ApplicationExceptionWithAdditionalData.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> handleApplicationExceptionWithAdditionalData(ApplicationExceptionWithAdditionalData exception) {
        return new ResponseEntity<>(
            createErrorResponseWithAdditionalData("Error while processing action", exception),
            getHeaders(),
            HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(SecurityException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> securityExceptionHandler(SecurityException exception) {
        return new ResponseEntity<>(
            createErrorResponse(exception.getMessage(), exception.getMessage()),
            getHeaders(),
            HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(OtherException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Object> otherExceptionHandler(OtherException exception) {
        return new ResponseEntity<>(
            createErrorResponse(exception.getMessage(), exception.getMessage()),
            getHeaders(),
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    @ExceptionHandler(LiquidRecipeException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Object> applicationExceptionHandler(LiquidRecipeException exception) {
        return new ResponseEntity<>(
            createErrorResponse(exception.getMessage(), exception.getMessage()),
            getHeaders(),
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ResponseEntity<Object> handleAccessDeniedException(AccessDeniedException exception) {
        return new ResponseEntity<>(
            createErrorResponse(exception.getMessage(), exception.getMessage()),
            getHeaders(),
            HttpStatus.FORBIDDEN
        );
    }

    @ExceptionHandler(InternalAuthenticationServiceException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> handleInternalAuthenticationServiceException(InternalAuthenticationServiceException exception) {
        return new ResponseEntity<>(
            createErrorResponse(exception.getMessage(), exception.getMessage()),
            getHeaders(),
            HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Object> exceptionHandler(Exception exception) {
        return new ResponseEntity<>(
            createErrorResponse(exception.getMessage(), exception.getMessage()),
            getHeaders(),
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    private String createErrorResponse(String error, String errorDescription) {
        return "{" +
            "\"success\": false, " +
            "\"error\": \"" + error + "\"" +
            "\"error_description\": \"" + errorDescription + "\"" +
            "}";
    }

    private String createErrorResponseWithAdditionalData(String error, ApplicationExceptionWithAdditionalData exception) {
        return "{" +
            "\"success\": false, " +
            "\"error\": \"" + error + "\"" +
            "\"error_description\": \"" + exception.getMessage() + "\", " +
            "\"data\" : {" +
            StringUtils.mapToString(exception.getData()) +
            "}" +
            "}";
    }

    private HttpHeaders getHeaders() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("content-type", "application/json");
        return httpHeaders;
    }
}
