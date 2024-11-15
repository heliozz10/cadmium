package com.heliozz10.cadmium.controller;

import com.heliozz10.cadmium.dto.AppealDto;
import com.heliozz10.cadmium.dto.AppealResponseDto;
import com.heliozz10.cadmium.dto.ViolationDto;
import com.heliozz10.cadmium.dto.ViolationResponseDto;
import com.heliozz10.cadmium.entity.Appeal;
import com.heliozz10.cadmium.entity.Violation;
import com.heliozz10.cadmium.repository.AppealRepository;
import com.heliozz10.cadmium.repository.ViolationRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    private final ViolationRepository violationRepo;
    private final AppealRepository appealRepo;

    public ApiController(ViolationRepository violationRepo, AppealRepository appealRepo) {
        this.violationRepo = violationRepo;
        this.appealRepo = appealRepo;
    }

    @GetMapping("/get-violations")
    public ResponseEntity<List<ViolationResponseDto>> getViolations(@RequestParam String carRegistrationId) {
        List<ViolationResponseDto> violations = new ArrayList<>();
        violationRepo.findByCarRegistrationId(carRegistrationId).forEach(
                violation -> {
                    if(violation.isActive())
                        violations.add(new ViolationResponseDto(violation.getId(), violation.getCarRegistrationId(), violation.getTimestamp().toString(), violation.getLocation()));
                }
        );
        return ResponseEntity.ok(violations);
    }

    @CrossOrigin(origins = "http://10.27.212.138")
    @PostMapping("/add-violation")
    public ResponseEntity<?> addViolation(@RequestBody ViolationDto violationDto) {
        Violation violation = violationRepo.save(new Violation(violationDto.getCarRegistrationId(), new Date(), violationDto.getLocation()));
        return ResponseEntity.ok(null);
    }

    @PostMapping("/add-appeal")
    public ResponseEntity<?> addAppeal(@RequestBody AppealDto appealDto) {
        Violation violation = violationRepo.findById(appealDto.getViolationId()).orElse(null);
        if(violation == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Violation not found");
        }
        Appeal appeal = appealRepo.save(new Appeal(appealDto.getText(), violation));
        return ResponseEntity.ok(new AppealResponseDto(violation, appeal.getText()));
    }
}
