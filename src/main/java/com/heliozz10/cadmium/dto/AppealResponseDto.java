package com.heliozz10.cadmium.dto;

import com.heliozz10.cadmium.entity.Violation;
import lombok.Data;

@Data
public class AppealResponseDto {
    private final AppealedViolationDto violation;
    private final String text;

    public AppealResponseDto(Violation violation, String text) {
        this.violation = new AppealedViolationDto(violation.getCarRegistrationId(), violation.getTimestamp().toString(), violation.getLocation(), violation.isActive());
        this.text = text;
    }
}