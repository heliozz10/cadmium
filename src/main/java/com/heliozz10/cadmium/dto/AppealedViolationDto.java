package com.heliozz10.cadmium.dto;

import lombok.Data;

@Data
public class AppealedViolationDto {
    private final String carRegistrationId;
    private final String timestamp;
    private final String location;
    private final Boolean isActive;
}
