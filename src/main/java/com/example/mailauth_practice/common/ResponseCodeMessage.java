package com.example.mailauth_practice.common;

public interface ResponseCodeMessage {
    String SUCCESS = "Success.";

    String VALIDATION_FAIL = "Validation failed.";
    String DUPLICATE_ID = "Duplicate Id.";

    String SIGN_IN_FAIL = "Login information mismatch.";
    String CERTIFICATION_FAIL = "Certification failed.";

    String DATABASE_ERROR = "Database error.";
}