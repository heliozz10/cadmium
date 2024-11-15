package com.heliozz10.cadmium.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "violation")
public class Violation {
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "car_registration_id")
    private String carRegistrationId;

    @Column(name = "timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    @Column
    private String location;

    @Column(name = "is_active")
    private boolean isActive;

    @OneToMany(mappedBy = "violation", fetch = FetchType.EAGER)
    private List<Appeal> appeals;

    public Violation(String carRegistrationId, Date timestamp, String location) {
        this(carRegistrationId, timestamp, location, true);
    }

    public Violation(String carRegistrationId, Date timestamp, String location, boolean isActive) {
        this.carRegistrationId = carRegistrationId;
        this.timestamp = timestamp;
        this.location = location;
        this.isActive = isActive;
    }

    public void addAppeal(Appeal appeal) {
        appeals.add(appeal);
    }
}
