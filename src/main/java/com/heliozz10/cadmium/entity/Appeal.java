package com.heliozz10.cadmium.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Entity
@Table(name = "appeal")
public class Appeal {
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue
    @SequenceGenerator(name = "appeal_seq", sequenceName = "appeal_seq", allocationSize = 1)
    private Long id;

    @Column
    private String text;

    @Column(name = "is_handled")
    private boolean isHandled;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "violation_id")
    private Violation violation;

    public Appeal(String text, Violation violation) {
        this(text, violation, false);
    }

    public Appeal(String text, Violation violation, boolean isHandled) {
        this.text = text;
        this.violation = violation;
        this.isHandled = isHandled;
    }
}
