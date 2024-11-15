package com.heliozz10.cadmium.repository;

import com.heliozz10.cadmium.entity.Appeal;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppealRepository extends ListCrudRepository<Appeal, Long> {

}
