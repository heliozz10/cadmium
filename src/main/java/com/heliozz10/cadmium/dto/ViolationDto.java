package com.heliozz10.cadmium.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ViolationDto {
    private final String carRegistrationId;
    private final String location;
}
