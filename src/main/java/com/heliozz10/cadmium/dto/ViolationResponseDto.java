package com.heliozz10.cadmium.dto;

import lombok.Data;

@Data
public class ViolationResponseDto {
    private final Long id;
    private final String carRegistrationId;
    private final String timestamp;
    private final String location;
}
