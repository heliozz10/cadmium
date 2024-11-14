package com.heliozz10.cadmium.repository;

import com.heliozz10.cadmium.entity.Violation;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ViolationRepository extends ListCrudRepository<Violation, Long> {
    List<Violation> findByCarRegistrationId(String carRegistrationId);
}
